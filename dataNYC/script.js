/*
  Step 1:

    Initialize variables for use later.

  What is happening?

    1a. Creates constants to use to configure the endpoint with parameters + filters.

    1b. Constructs the url of endpoint to make request against. This uses the constants defined in (1a).

    1c. Defines and initializes variable named `localData` to an empty array. This will later be updated to
        hold a copy of the data we receive from the NYC Data API.

    1d. Creates a handle for the "graph" element we want to update the percentages of. Crates a handle for
        the dropdown, so that we may attach an "change" event listener on it. Any new option selected in the
        dropdown will cause:

          - The local copy data to be filtered based on the dropdown option value.

          - The filtered data is re-parsed so that it can update the color count values.

          - This, in turn, updates the CSS dynamically and causes the styles to update.
*/

// 1a
const DATASET_IDENTIFIER = 'n6c5-95xh';   // Resource identifier
const LIMIT = 10;                         // Limit # of items returned

// 1b
const urlEndpoint = `https://data.cityofnewyork.us/resource/n6c5-95xh.json${DATASET_IDENTIFIER}.json?$limit=${LIMIT}`;

// 1c
let localData = [];

// 1d
const graphEl = document.querySelector('#graph');
const dropdownEl = document.querySelector('#dropdown');

/*
  Step 3:

    Parse the Data and render it in some form.

  What is happening?

    3a. We initialize several variables, representing the color count of squirrels, with zero.

    3b. With the array of data, in the `forEach` loop we begin tallying the different squirrel colors.

    3c. We add "CSS variables", that represent the color count, to the `graphEl`.

    3d. In `styles.css`, we create a CSS variable `--total` which is the sum of all the color counts.
        This uses special CSS functions `calc()` and `var()` to identify that some calculation needs to be made.

    3e. In `styles.css`, the counts we updated in (2c) are being use to calculate the percentage a color makes up
        from the whole set of colors. We then use this value to apply a width value in percent unit to the element
        with the color class.

    3f. Add event listener on dropdown to make updates when the value of the dropdown changes.
*/

function parseData(data) {
  // 3a
	let grayCount = 0;
	let cinnamonCount = 0;
	let blackCount = 0;
	let undefinedCount = 0;

  // 3b
	data.forEach(function(squirrel) {
		if (squirrel.primary_fur_color == 'Gray') {
      grayCount = grayCount + 1;
      // Note: using `grayCount++;` is a shorthand for incrementing
    } else if (squirrel.primary_fur_color == 'Cinnamon') {
      cinnamonCount = cinnamonCount + 1;
    } else if (squirrel.primary_fur_color == 'Black') {
      blackCount = blackCount + 1;
    } else {
      undefinedCount = undefinedCount + 1;
    }
	})

	// Logging some useful debugging information.
	console.log('Gray: ' + grayCount)
	console.log('Cinnamon: ' + cinnamonCount)
	console.log('Black: ' + blackCount)
	console.log('Undefined: ' + undefinedCount)

	// 3c
	graphEl.style.setProperty('--gray', grayCount)
	graphEl.style.setProperty('--cinnamon', cinnamonCount)
	graphEl.style.setProperty('--black', blackCount)
	graphEl.style.setProperty('--undefined', undefinedCount)
}

// 3f
dropdownEl.addEventListener('change', function() {
	if (dropdownEl.value == 'Morning') {
    const filteredDataByAM = localData.filter(function(squirrel) { return squirrel.shift == 'AM' });
    parseData(filteredDataByAM);
  } else if (dropdownEl.value == 'Afternoon') {
    const filteredDataByPM = localData.filter(function(squirrel) { return squirrel.shift == 'PM' });
    parseData(filteredDataByPM);
  } else {
    // Option: All
    parseData(localData);
  }
});

/*
  Step 2:
    
    Grabbing data from the NYC Data <YOUR RESOURCE> endpoint.

  What is happening?

    2a. When this script loads, the `fetch()` function is immediately called.

    2b. We cache the JSON response into the variable `localData`, so that we don't have to request it again.
        Because `data` is a variable that is only acessible in the function, we must save it in another
        variable to be able to be used elsewhere in the code.
*/

// 2a
fetch(https://data.cityofnewyork.us/resource/n6c5-95xh.json)
  .then(function(response) {
	  return response.json();
  })
  .then(function(data) {
    // 2b
    localData = data;
    parseData(localData);
  });