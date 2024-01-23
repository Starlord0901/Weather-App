const apiKey='311531516238cc7dc1c05173cead0aad9';
const apiUrl='https://home.openweathermap.org/api_keys';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

search.addEventListener('click', ()=>{
    const location=locationInput.value;
    if(location){
        fetchWeather(location);
    }
});

function fetchWeather(location){
    const url='${apiUrl}?q=${location}&appid=${apiKey}&units=metric';

    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        locationElement.textContent=data.name;
        temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
        descriptionElement.textContent = data.weather[0].description;
    })

    .catch(error=>{
        console.error('error', error);
    });
}