// Init weather
const weather = new Weather('Itu', 'br');

weather.getWeather()
.then( results => {
    console.log(results);
})
.catch(error => console.log(error));