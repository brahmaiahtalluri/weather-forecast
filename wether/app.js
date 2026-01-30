
const apiKey = "c4cd0f760d22e34be2a022f0c223a320";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const resultBox = document.getElementById("weatherResult");
const locBtn = document.getElementById("locBtn");

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city !== "") getWeatherByCity(city);
});

cityInput.addEventListener("keypress", e => {
    if (e.key === "Enter") searchBtn.click();
});

locBtn.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(pos => {
        getWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
    }, () => {
        alert("Location permission denied");
    });
});

function getWeatherByCity(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetchWeather(url);
}

function getWeatherByCoords(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    fetchWeather(url);
}

function fetchWeather(url) {
    resultBox.style.display = "none";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            

            //  City not found
            if (data.cod !== 200) {
                alert("City not found ");
                return;
            }
            console.log(data);

            resultBox.style.display = "block";

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("country").innerText = data.sys.country;
            document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
            document.getElementById("description").innerText = data.weather[0].description;
            document.getElementById("humidity").innerText = data.main.humidity + "%";

            // 🌬 OpenWeather gives wind in m/s → convert to km/h
            const windKmH = (data.wind.speed * 3.6).toFixed(1);
            document.getElementById("windSpeed").innerText = windKmH + " km/h";

            document.getElementById("feelsLike").innerText = Math.round(data.main.feels_like) + "°C";
            document.getElementById("pressure").innerText = data.main.pressure + " hPa";

            document.getElementById("weatherIcon").src =
                `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(() => {
            alert("Network error ");
        });
}
