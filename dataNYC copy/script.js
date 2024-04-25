document.addEventListener('DOMContentLoaded', function() {
  // All your JavaScript code goes here
  
  const DATASET_IDENTIFIER = 'n6c5-95xh';    // Resource identifier
  const LIMIT = 10;                         // Limit # of items returned

  const urlEndpoint = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}`;

  let localData = [];

  const graphEl = document.querySelector('#graph');
  const dropdownEl = document.querySelector('#dropdown');

  function parseData(data) {
      let liveCount = 0;
      let installedCount = 0;
      let repairCount = 0;

      data.forEach(function(kiosk) {
          if (kiosk.STATUS === 'live') {
              liveCount++;
          } else if (kiosk.STATUS === 'installed') {
              installedCount++;
          } else if (kiosk.STATUS === 'repair') {
              repairCount++;
          }
      });

      document.querySelector('#live-count').textContent = liveCount;
      document.querySelector('#installed-count').textContent = installedCount;
      document.querySelector('#repair-count').textContent = repairCount;
  }

  dropdownEl.addEventListener('change', function() {
      const selectedStatus = dropdownEl.value;

      if (selectedStatus === 'live') {
          const liveKiosks = localData.filter(function(kiosk) {
              return kiosk.STATUS === 'live';
          });
          parseData(liveKiosks);
      } else if (selectedStatus === 'installed') {
          const installedKiosks = localData.filter(function(kiosk) {
              return kiosk.STATUS === 'installed';
          });
          parseData(installedKiosks);
      } else if (selectedStatus === 'repair') {
          const repairKiosks = localData.filter(function(kiosk) {
              return kiosk.STATUS === 'repair';
          });
          parseData(repairKiosks);
      } else {
          parseData(localData);
      }
  });

  fetch(urlEndpoint)
      .then(function(response) {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(function(data) {
          localData = data;
          parseData(localData);
      })
      .catch(function(error) {
          console.error('There was a problem with the fetch operation:', error);
      });
});
