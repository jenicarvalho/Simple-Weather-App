class Weather {
    constructor(city, country = 'br') {
        this.apiKey = '3b7e07eb897fc608d941420f15a08881';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from api
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}