const trips = [
	{
		destination: 'Greece',
		description: 'A beautiful country with rich history, stunning views, and delicious food.',
        main_img: 'images/greece-main.webp',
        img_alt: 'Beautiful sunset in Athens, Greece',
		map: 'link to map',
		datewent: 'June 19th-30th 2023',
		image_gallery: [
			'images/greece-1.webp',
			'images/greece-2.webp',
			
		],
    },
    {
		destination: 'Yellowstone',
		description: 'Experience the wonders of nature in one of Americas most iconic national parks.',
        main_img: 'images/yellowstone-main.webp',
        img_alt: 'Waterfall in Yellowstone Canyon',
		map: '',
		datewent: 'July 16th 2024',
		image_gallery: [
			'',
			'',
			
		],
    },
    {
        destination: 'Goldbug Hot Springs',
		description: 'Relax in the natural hot springs nestled in the mountains.',
        main_img: 'images/goldbughotsprings-main.webp',
        img_alt: 'Mountain View on goldbug trail to hot springs',
		map: '',
		datewent: 'March 1st 2025',
		image_gallery: [
			'',
			'',
			
		],
	}
];

// Home page javascript
function getTwoRandomTrips(trips) {

    let firstIndex = Math.floor(Math.random() * trips.length);
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * trips.length);
    } while (secondIndex === firstIndex); // make sure they're different

    return [trips[firstIndex], trips[secondIndex]];
}

function tripTemplate(trip){
	return `
		<div class="trip">
            <img src="${trip.main_img}" alt="${trip.img_alt}">
    		<h3>${trip.destination}</h3>			
		</div> `
	
};

function renderTrip(trip, elementId){
	let container = document.querySelector(`#${elementId}`);
	container.innerHTML = tripTemplate(trip);
}

function init(){
	const [trip1, trip2] = getTwoRandomTrips(trips);
	renderTrip(trip1, 'random1');
	renderTrip(trip2, 'random2');
}

init();

// Trips Javascript
function tripDetailsTemplate(trip) {
    return `
        <div class="trip">
            <img src="${trip.main_img}" alt="${trip.img_alt}">
            <h3>${trip.destination}</h3>
            <p><strong>When:</strong> ${trip.datewent}</p>
            <p><strong>Description:</strong> ${trip.description}</p>
            <button class="see-more-btn" onclick="toggleTripDetails('${trip.destination}')">See More</button>

            <div class="trip-details" id="details-${trip.destination}" style="display:none;">
                <h4>Gallery:</h4>
                <div class="image-gallery">
                    ${trip.image_gallery.map(img => `<img src="${img}" alt="Image from ${trip.destination}">`).join('')}
                </div>
                <h4>Map:</h4>
                <a href="${trip.map}" target="_blank">View Map</a>
            </div>
        </div>
    `;
}

function renderTrips() {
    const tripContainer = document.querySelector('#trip-container');
    tripContainer.innerHTML = trips.map(tripDetailsTemplate).join('');
}

function toggleTripDetails(destination) {
    const detailsDiv = document.querySelector(`#details-${destination}`);
    const isHidden = detailsDiv.style.display === "none";
    
    if (isHidden) {
        detailsDiv.style.display = "block";
    } else {
        detailsDiv.style.display = "none";
    }
}

// Call the renderTrips function to populate the page
renderTrips();