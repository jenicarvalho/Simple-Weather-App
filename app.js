// Init storage
const storage = new Storage();

// get stored location data
const weatherLocation = storage.getLocationData();

// Init weather
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();


// Get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    //chamge location
    weather.changeLocation(city, country);

    //set location
    storage.setLocationData(city, country);

    // get and display weather
    getWeather();

    // close modal
    $('#locModal').modal('hide');

});



function getWeather() {
    weather.getWeather()
    .then( results => {
        ui.paint(results);
    })
    .catch(error => console.log(error));
}