// Function to render your items
function renderItems(data) {
	// Create handles to differnt boroughs
	const manhattanEl = document.getElementById('manhattan-list')
	const brooklynEl = document.getElementById('brooklyn-list')
	const bronxEl = document.getElementById('bronx-list')
	const queensEl = document.getElementById('queens-list')

	// Create lists for different boroughts
	let manhattanList = [];
	let brooklynList =[];
	let bronxList =[];
	let queensList =[];

	// Sort data by borough
	data.forEach(function(item) {
		if (item.borough == 'Manhattan') {
			manhattanList.push(item);
		} else if (item.borough == 'Brooklyn') {
			brooklynList.push(item);
		} else if (item.borough == 'Bronx') {
			bronxList.push(item);
		} else if (item.borough == 'Queens') {
				queensList.push(item);}

	});

	
	// Loop through each borough list, and create the html and append to borough handle
	manhattanList.forEach(function(item) {
		const itemDetails =
			`	
			<div class="artwork manhattan" onclick="makeActive(event)">
				<div class="line" style="height: ${item.duration / 365 * 100}vh;"></div>
				<div class="metadata">
					<div class="metadata-image">
						<img src="${item.img}" />
					</div>
					<div class="metadata-text">
						<p class="title">"${item.title}"</p>
						<p class="artist"> Artist: ${item.artist}</p>
						<p class="partner">Partner: ${item.partner}</p>
						<p class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></button> ${item.location}</p>
						<p class="borough">${item.borough}</p>
						<p class="site">Site Type: ${item.site}</p>
						<p class="type">Project Type: ${item.type}</p>
						<p class="installed">Installed: ${item.installed}</p>
						<p class="removed">Removed${item.removed}</p>
						<p class="duration">Days On Site:${item.duration}</p>
					</div>
				</div>
			</div>
			`
		manhattanEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

	})

	brooklynList.forEach(function(item) {
		const itemDetails =
			`	
			<div class="artwork brooklyn" onclick="makeActive(event)">
				<div class="line" style="height: ${item.duration / 365 * 100}vh;"></div>
				<div class="metadata">
					<div class="metadata-image">
						<img src="${item.img}" />
					</div>
					<div class="metadata-text">
						<p class="title">"${item.title}"</p>
						<p class="artist"> Artist: ${item.artist}</p>
						<p class="partner">Partner: ${item.partner}</p>
						<p class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></button> ${item.location}</p>
						<p class="borough">${item.borough}</p>
						<p class="site">Site Type: ${item.site}</p>
						<p class="type">Project Type: ${item.type}</p>
						<p class="installed">Installed: ${item.installed}</p>
						<p class="removed">Removed${item.removed}</p>
						<p class="duration">Days On Site:${item.duration}</p>
					</div>
				</div>
			</div>
			`
		brooklynEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	})

	bronxList.forEach(function(item) {
		const itemDetails =
			`	
			<div class="artwork bronx" onclick="makeActive(event)">
				<div class="line" style="height: ${item.duration / 365 * 100}vh;"></div>
				<div class="metadata">
					<div class="metadata-image">
						<img src="${item.img}" />
					</div>
					<div class="metadata-text">
						<p class="title">"${item.title}"</p>
						<p class="artist"> Artist: ${item.artist}</p>
						<p class="partner">Partner: ${item.partner}</p>
						<p class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></button> ${item.location}</p>
						<p class="borough">${item.borough}</p>
						<p class="site">Site Type: ${item.site}</p>
						<p class="type">Project Type: ${item.type}</p>
						<p class="installed">Installed: ${item.installed}</p>
						<p class="removed">Removed${item.removed}</p>
						<p class="duration">Days On Site:${item.duration}</p>
					</div>
				</div>
			</div>
			`
		bronxEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	})

	queensList.forEach(function(item) {
		const itemDetails =
			`	
			<div class="artwork queens" onclick="makeActive(event)">
				<div class="line" style="height: ${item.duration / 365 * 100}vh;"></div>
				<div class="metadata">
					<div class="metadata-image">
						<img src="${item.img}" />
					</div>
					<div class="metadata-text">
						<p class="title">"${item.title}"</p>
						<p class="artist"> Artist: ${item.artist}</p>
						<p class="partner">Partner: ${item.partner}</p>
						<p class="location"><i class="fa-sharp fa-solid fa-location-dot"></i></button> ${item.location}</p>
						<p class="borough">${item.borough}</p>
						<p class="site">Site Type: ${item.site}</p>
						<p class="type">Project Type: ${item.type}</p>
						<p class="installed">Installed: ${item.installed}</p>
						<p class="removed">Removed${item.removed}</p>
						<p class="duration">Days On Site:${item.duration}</p>
					</div>
				</div>
			</div>
			`
		queensEl.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
	})
}


fetch('assets/data.json')
	.then(function(response) {
		return response.json();	
	})
	.then(function(data){
		// And passes the data to the function, above!
		renderItems(data) // In reverse order
	})

//////////////////////////////////////////////////////////////////////////////////////////////////


//the buttons to showcase specific burrough//
function manhattanBtn(){
	document.getElementById("brooklyn-list").style.display = "none";
	document.getElementById("bronx-list").style.display = "none";
	document.getElementById("queens-list").style.display = "none";
	document.getElementById("manhattan-list").style.display = "flex";

//setting up the winodw for the flexGrow//
	document.getElementById("manhattan-list").style.width ="100%";

//flexGrow to spread out the divs to fill the screen//		
	const container = document.getElementById('manhattan-list');
	const children = container.children;

		const numChildren = children.length;
		for (let i = 0; i < numChildren; i++) {
		children[i].style.flexGrow = 1;
		}

		const manhattanList = document.querySelectorAll(".metadata");
		manhattanList.forEach(element => {
		  element.style.left = "76%";
		  element.style.top = "30%";

		});
	}



//repeat for each burrough//
function brooklynBtn(){
	document.getElementById("manhattan-list").style.display = "none";
	document.getElementById("bronx-list").style.display = "none";
	document.getElementById("queens-list").style.display = "none";
	document.getElementById("brooklyn-list").style.display = "flex";

	document.getElementById("brooklyn-list").style.width ="100%";

	const container = document.getElementById('brooklyn-list');
	const children = container.children;

		const numChildren = children.length;
		for (let i = 0; i < numChildren; i++) {
		children[i].style.flexGrow = 1;

		const brooklynList = document.querySelectorAll(".metadata");
		brooklynList.forEach(element => {
		  element.style.left = "5%";
	
		});
	}

}

function bronxBtn(){
	document.getElementById("manhattan-list").style.display = "none";
	document.getElementById("brooklyn-list").style.display = "none";
	document.getElementById("queens-list").style.display = "none";
	document.getElementById("bronx-list").style.display = "flex";


	document.getElementById("bronx-list").style.width ="100%";
	
	const container = document.getElementById('bronx-list');
	const children = container.children;

		const numChildren = children.length;
		for (let i = 0; i < numChildren; i++) {
		children[i].style.flexGrow = 1;

		const bronxList = document.querySelectorAll(".metadata");
		bronxList.forEach(element => {
		  element.style.left = "76%";
	
		});
}
}

function queensBtn(){
	document.getElementById("manhattan-list").style.display = "none";
	document.getElementById("brooklyn-list").style.display = "none";
	document.getElementById("bronx-list").style.display = "none";
	document.getElementById("queens-list").style.display = "flex";

	document.getElementById("queens-list").style.width ="100%";
	
	const container = document.getElementById('queens-list');
	const children = container.children;

		const numChildren = children.length;
		for (let i = 0; i < numChildren; i++) {
		children[i].style.flexGrow = 1;
}
		const queensList = document.querySelectorAll(".metadata");
		queensList.forEach(element => {
		  element.style.left = "70%";
	
		});	
}

function refresh(){
	window.location.reload();
}

function renderStarsBackground() {
	var canvas = document.getElementById("starfield"),
	context = canvas.getContext("2d"),
	stars = 500;

	for (var i = 0; i < stars; i++) {
			x = Math.random() * canvas.offsetWidth;
			y = Math.random() * canvas.offsetHeight;
		context.fillStyle = "white";
			context.fillRect(x,y,1,1);
	}
}

renderStarsBackground();


function makeActive(event) {
	const lineEls = document.querySelectorAll('.artwork');

	lineEls.forEach(function(el) {
		el.classList.remove('active');
	});

	const target = event.target || event.srcElement;
	const parentEl = target.parentElement;
	parentEl.classList.add('active');
}