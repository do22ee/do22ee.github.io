const API_KEY = "0f80c6bedd5b20c28265d0447f870fe5";


function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url).then(response => response.json())
    .then(data => {
        const city = document.querySelector("#left span.c");
        const weather = document.querySelector("#left span.w");
        city.innerText = `${data.name} | `;
        weather.innerText = `Weather: ${data.weather[0].main} | Humidity: ${data.main.humidity}`;
    });
}


function OnGeoError() {
    alert("Where do you live?");
}




navigator.geolocation.getCurrentPosition(onGeoOK, OnGeoError);