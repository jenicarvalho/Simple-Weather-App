class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.humidity = document.getElementById('w-humidity');
        this.temperatureHigh = document.getElementById('w-feels-like');
        this.description = document.getElementById('w-description');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = `${weather.main.temp} °C`;
        this.description.textContent = weather.weather[0].description;
        this.temperatureHigh.textContent = `Temperatura Máxima: ${weather.main.temp_max}`;
        this.humidity.textContent = `Umidade relativa: ${weather.main.humidity}`;
        this.wind.textContent = `Ventos: ${weather.wind.speed}`;
        console.log(weather);
    }
}