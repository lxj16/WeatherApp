class Weather {
  constructor(city, countryCode) {
    this.apiKey = "f0036b78a1181ff5765b0fb42a29d17b";
    this.city = city;
    this.countryCode = countryCode;
  }

  //fetch weather data
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.countryCode
      }&APPID=${this.apiKey}`
    );

    const weatherData = await response.json();
    return weatherData;
  }

  //change location
  changeLocation(city, countryCode) {
    this.city = city;
    this.countryCode = countryCode;
  }
}
