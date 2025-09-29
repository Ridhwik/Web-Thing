document.addEventListener('DOMContentLoaded',  () => {

    const cityInput = document.getElementById('city-input');
    const weatherButton = document.getElementById('get-weather-btn');
    const cityName = document.getElementById('city-name');
    const cityDescription = document.getElementById('description');
    const cityTemperature = document.getElementById('temperature');
    const error = document.getElementById('error-message');
    const weather_info = document.getElementById('weather-info');
   const API_KEY = "5f56d525d1619d0a2cd2eac4ce55588e"; // env variable


    weatherButton.addEventListener('click', async () => {
        const city = cityInput.value.trim();
        if (!city) return "";


        // SERVER/DB  IS IN THE OTHER CONTINENT
        // SERVER MAY THROW A ERROR 

        try {

           const data =  await grabData(city);
            showData(data);
            
        } catch (error) {
            showError();
        }
    })



   async function grabData(city) {
    // grab url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
   

    if (!response) showError();
    
    const data = await response.json();
    console.log(data);
    
    return data;
    }



    function showData(data) {
    // displaying data 
    const {name, main, weather} = data;
    cityName.textContent = name;
    cityTemperature.textContent =  `Temperature: ${main.temp} `;
    cityDescription.textContent =`Description: ${weather[0].description}`;
        
    // removing hidden class
    weather_info.classList.remove('hidden')
    error.classList.add('hidden')
    }

    function showError() {
        weather_info.classList.add('hidden');
        error.classList.remove('hidden');
    }
})