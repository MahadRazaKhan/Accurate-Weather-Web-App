const apiKey = "074cc116ce019e7c40750d3347521e58";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon"); // Assuming .weather-icon is the class of <img> tag

async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
    var data = await response.json();

    if (data.cod === "404") {
        alert("City not found. Please try again.");
        return;
    }

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    
    const weatherCondition = data.weather[0].main.toLowerCase();
    if(weatherCondition === "clouds"){
        weatherIcon.src = "images/clouds.png"; 
    } else if(weatherCondition === "clear"){
        weatherIcon.src = "images/clear.png"; 
    } else if(weatherCondition === "rain"){
        weatherIcon.src = "images/rain.png"; 
    } else if(weatherCondition === "drizzle"){
        weatherIcon.src = "drizzle.png"; 
    } else if(weatherCondition === "mist"){
        weatherIcon.src = "mist.png"; 
    }
    document.querySelector(".weather").style.display = 'block';
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
