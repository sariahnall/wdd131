const trips = [
	{
		destination: 'Greece',
		description: 'A beautiful country with rich history, stunning views, and delicious food.',
        main_img: 'images/greece-main.webp',
        img_alt: 'Beautiful sunset in Athens, Greece',
		map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100621.0547358081!2d23.655937386059016!3d37.99094375013074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens%2C%20Greece!5e0!3m2!1sen!2sus!4v1743840788217!5m2!1sen!2sus',
		datewent: 'June 19th-30th 2023',
		image_gallery: [
			'images/greece1.jpg',
			'images/greece2.jpg',
            'images/greece3.jpg',
            'images/greece4.jpg'
		],
    },
    {
		destination: 'Yellowstone',
		description: 'Experience the wonders of nature in one of Americas most iconic national parks.',
        main_img: 'images/yellowstone-main.webp',
        img_alt: 'Waterfall in Yellowstone Canyon',
		map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d727448.0462790879!2d-111.17349296284081!3d44.58487635549668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5351e55555555555%3A0xaca8f930348fe1bb!2sYellowstone%20National%20Park!5e0!3m2!1sen!2sus!4v1743840842523!5m2!1sen!2sus',
		datewent: 'July 16th 2024',
		image_gallery: [
			'images/yellowstone1.jpg',
			'images/yellowstone2.jpg',
            'images/yellowstone3.jpg',
            'images/yellowstone4.jpg'
			
		],
    },
    {
        destination: 'Goldbug Hot Springs',
		description: 'Relax in the natural hot springs nestled in the mountains.',
        main_img: 'images/goldbughotsprings-main.webp',
        img_alt: 'Mountain View on goldbug trail to hot springs',
		map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22607.128016765473!2d-113.95592152049765!3d44.905213194727104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x535820cd3dcad3bf%3A0xce17406dbdeee00e!2sGoldbug%20Hot%20Springs!5e0!3m2!1sen!2sus!4v1743837699650!5m2!1sen!2sus',
		datewent: 'March 1st 2025',
		image_gallery: [
			'images/goldbug1.jpg',
			'images/goldbug2.jpg',
            'images/goldbug3.jpg',
            'images/goldbug4.jpg'
			
		],
	}
];

// Home page javascript
function getTwoRandomTrips(trips) {
    let firstIndex = Math.floor(Math.random() * trips.length);
    let secondIndex;
    do {
        secondIndex = Math.floor(Math.random() * trips.length);
    } while (secondIndex === firstIndex);
    return [trips[firstIndex], trips[secondIndex]];
}
function tripTemplate(trip){
	return `
		<div class="trip">
            <img src="${trip.main_img}" alt="${trip.img_alt}">
    		<h3>${trip.destination}</h3>			
		</div> `
}
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
    const idSafeDestination = trip.destination.replace(/\s+/g, '-');
    return `
        <div class="trip">
            <img src="${trip.main_img}" alt="${trip.img_alt}">
            <h3>${trip.destination}</h3>
            <button class="see-more-btn" data-destination="${idSafeDestination}">See More</button>

            <div class="trip-details" id="details-${idSafeDestination}" style="display:none;">
                <p><strong>When:</strong> ${trip.datewent}</p>
                <p><strong>Description:</strong> ${trip.description}</p>
                <h4>Gallery:</h4>
                <div class="image-gallery">
                    ${trip.image_gallery.map(img => `<img src="${img}" alt="Image from ${trip.destination}">`).join('')}
                </div>
                <h4>Map:</h4>
                <iframe src="${trip.map}" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    `;
}
function renderTrips() {
    const tripContainer = document.querySelector('#trip-container');
    tripContainer.innerHTML = trips.map(tripDetailsTemplate).join('');
    const buttons = document.querySelectorAll('.see-more-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            toggleTripDetails(destination);
        });
    });
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
renderTrips();