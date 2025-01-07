function getWeather() {
    
    const place = document.getElementById('places').value;
    const weatherOutput = document.getElementById('weather-output');
    const cloudImage = document.getElementById('cloud-image');
    
    
    if (place === "") {
        weatherOutput.textContent = "Please select a place.";
        cloudImage.style.display = "none";
        return;
    }
    
    
    const weatherPrediction = simulateWeatherPrediction(place);
    
 
    weatherOutput.textContent = `The weather in ${place} is predicted to be: ${weatherPrediction}`;
    
    
    cloudImage.style.display = "block";
}

function simulateWeatherPrediction(place) {
    
    const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Windy", "Thunderstorms","likely to be hot"];
    const randomCondition = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
    return randomCondition;
}
