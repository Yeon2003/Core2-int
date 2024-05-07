
const DATASET_IDENTIFIER = 'nnf6-km2a';
const urlEndpoint = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json`;


let localData = [];
const boroughsPerBacteria = {};

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
  console.log(data);
  const boroughs = [];

 
  data.forEach(entry => {

    // const borough = entry.borough;
    // const bacteria = entry.taxa_or_area_of_study;

    // boroughsPerBacteria[bacteria] = borough; 

    const studyTypes = [
      "Algae",
      "Amphibians",
      "Arthropods",
      "Birds",
      "Crustaceans",
      "Fish",
      "Human Health",
      "Invertebrates",
      "Mammals",
      "Microorganisms",
      "Plants",
      "Water quality",
      "Other"

    ]

    for (studyType of studyTypes) {

      if (entry.taxa_or_area_of_study && entry.taxa_or_area_of_study.includes(studyType)) {
        if (entry.borough && !boroughs.includes(entry.borough)) {
  
          // check if it's in the boroughPerBacteria object
          if (boroughsPerBacteria[studyType] != null) {
              //   if it is, then push it onto the current array
            boroughsPerBacteria[studyType].push(entry.borough);
          } else {
            //   if it's not, then create a new one
            boroughsPerBacteria[studyType] = [entry.borough]; 
  
          }
  
        }
  
    }

   
    }

    // if (entry.taxa_or_area_of_study && entry.taxa_or_area_of_study.includes("Plants")) {
    //   if (entry.borough && !boroughs.includes(entry.borough)) {

    //     // check if it's in the boroughPerBacteria object
    //     if (boroughsPerBacteria["Plants"] != null) {
    //       //console.log(boroughsPerBacteria["Algae"])
    //         //   if it is, then push it onto the current array
    //       boroughsPerBacteria["Plants"].push(entry.borough);
    //     } else {
    //       //   if it's not, then create a new one
    //       boroughsPerBacteria["Plants"] = [entry.borough]; 

    //     }

    //   }

    // }
    
  });

  console.log(boroughsPerBacteria);


  console.log('Boroughs:', boroughs);

  
  showAssets(data, boroughs);
}


function showAssets(data, boroughs) {

  //document.querySelectorAll('.petri-dish img').forEach(img => img.remove());
/* '.boxxx' instead of .petri-dish img but it made my petrisihes disappear*/




 
  data.forEach(entry => {
    if (entry.taxa_or_area_of_study && entry.taxa_or_area_of_study.includes("Algae")) {
      const borough = entry.borough;
      const position = assetPositions[borough];
      const randomNumber = Math.floor(Math.random() * 35) + 1;
      if (position) {
        const petriDish = document.querySelector('.boxxx');
        if (petriDish) {
          const img = document.createElement('img');
          img.src = `assets/bacteria/b${randomNumber}.png`; 
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

var adding = true;

function addbacteria(bacteria){
  console.log(boroughsPerBacteria[bacteria]);

 



  // selects the boxes
  let bronx = document.getElementsByClassName('bronx');
  let brooklyn = document.getElementsByClassName('brooklyn');
  let manhattan = document.getElementsByClassName('manhattan');
  let queens = document.getElementsByClassName('queens');
  let statenIsland = document.getElementsByClassName('Staten Island');
  let more = document.getElementsByClassName('More');

  console.log (more)
  console.log (bronx)
  console.log (manhattan)
  console.log (brooklyn)
  console.log (queens)
  // console.log(bronx);
  // console.log(brooklyn);
  // let queens = document.querySelector('brooklyn');
  // let manhattan = document.querySelector('manhattan');

  const randomNumber = Math.floor(Math.random() * 35) + 1;

  //gets the number of images to show in the boxes
  let manhattanPermits = 0;
  let bronxPermits = 0;
  let brooklynPermits = 0;
  let queensPermits = 0;
  let statenIslandPermits = 0;
  let morePermits = 0;
  boroughsPerBacteria[bacteria].forEach((element, i) => {
    if (element.includes("Manhattan")) {
      manhattanPermits++;

      if (adding) {
        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`; // Change to your local path
        manhattan[0].appendChild(img);
      } else {
        manhattan[0].innerHTML = "";
      }
    }

    if(element.includes("Bronx")) {
      bronxPermits++;

      if (adding) {

        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`;
        bronx[0].appendChild(img);
  

      } else {
        bronx[0].innerHTML = "";


      }
    }
    if(element.includes("Brooklyn")) {
      brooklynPermits++;
      if (adding) {

        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`;
      
        brooklyn[0].appendChild(img);
  

      } else {
        brooklyn[0].innerHTML = "";


      }
     
    }
   
    if(element.includes("Queens")) {
      queensPermits++;
      if (adding) {

        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`;
      
        queens[0].appendChild(img);
  

      } else {
        queens[0].innerHTML = "";


      }
      
    }
    
    if(element.includes("Staten Island")) {
      statenIslandPermits++;
      if (adding) {

        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`;
      
        statenIsland[0].appendChild(img);
  

      } else {
        statenIsland[0].innerHTML = "";


      }
      
    }
    
    if(element.includes(",")) {
      morePermits++;
      if (adding) {

        var img = document.createElement("img");
        const randomImageNumber = Math.floor(Math.random() * 35) + 1;
        img.src = `assets/bacteria/b${randomImageNumber}.png`;
      
        more[0].appendChild(img);
  

      } else {
        more[0].innerHTML = "";


      }
      
    }
    // if(element.includes("Brooklyn"))
    // manhattanPermits++;

  

  });

  if (adding) {
    adding = false;
  } else {
    adding = true;
  }


  //showing the images in the boxes

  console.log(bronxPermits);
  let imgBronx = '';
  //         start   end
//   for(let i = 0; i < bronxPermits; i++){


//     var img = document.createElement("img");
//     img.src = `assets/bacteria/b${i}.png`;
    

//     bronx[0].appendChild(img);
//   }
}
// putting random image link from the internet works.."https://www.genome.gov/sites/default/files/tg/en/illustration/bacteria.jpg" 


