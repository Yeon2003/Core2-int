
const DATASET_IDENTIFIER = 'nnf6-km2a';
const urlEndpoint = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json`;


let localData = [];

function fetchData(areaOfStudy) {
  fetch(`${urlEndpoint}?$query=SELECT%20permit_year%2C%20project_title%2C%20institution%2C%20borough%2C%20park_name%2C%20location_within_park%2C%20taxa_or_area_of_study%20WHERE%20%60taxa_or_area_of_study%60%20IN%20('${areaOfStudy}')%20ORDER%20BY%20borough%20ASC`)
    .then(response => response.json())
    .then(data => {
      localData = data;
      parseData(localData);
    })
    .catch(error => console.error('Error fetching data:', error));
}


function parseData(data) {
  
  const boroughs = [];

 
  data.forEach(entry => {
    if (entry.taxa_or_area_of_study && entry.taxa_or_area_of_study.includes("Algae")) {
      if (entry.borough && !boroughs.includes(entry.borough)) {
        boroughs.push(entry.borough);
      }
    }
  });


  console.log('Boroughs:', boroughs);

  
  showAssets(data, boroughs);
}


function showAssets(data, boroughs) {

  document.querySelectorAll('.petri-dish img').forEach(img => img.remove());


  const assetPositions = {
    "Bronx": { x: 50, y: 50 }, 
    "Manhattan": { x: 150, y: 150 } 
  };

 
  data.forEach(entry => {
    if (entry.taxa_or_area_of_study && entry.taxa_or_area_of_study.includes("Algae")) {
      const borough = entry.borough;
      const position = assetPositions[borough];
      if (position) {
        const petriDish = document.querySelector('.petri-dish');
        if (petriDish) {
          const img = document.createElement('img');
          img.src = `assets/bacteria/${entry.asset}.png`; 
          img.alt = `Asset for ${borough}`;
          img.style.position = 'absolute';
          img.style.left = `${position.x}px`;
          img.style.top = `${position.y}px`;
          petriDish.appendChild(img);
        }
      }
    }
  });
}


fetch(urlEndpoint)
  .then(response => response.json())
  .then(data => {
    localData = data;
    parseData(localData);
  });


const gridEl = document.querySelector('.image-grid');
gridEl.querySelectorAll('.image-row .image-cell').forEach(item => {
  item.addEventListener('click', function() {
    const areaOfStudy = this.querySelector('img').alt;
    console.log(`Clicked on ${areaOfStudy}`);
    fetchData(areaOfStudy);
  });
});
