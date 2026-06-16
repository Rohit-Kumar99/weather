 const API_KEY = '5a1fc316f6587a238a00afe4c9963941';

// const APIKEY = "d54b108e96c80d6717d844eba8dad9a6",
const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".input-city")
const searchBtn = document.querySelector("button");
 

async function checkWeather(city = 'karachi'){
    const res = await fetch(URL + city + `&appid=${API_KEY}`);
    let data = await res.json();
    document.querySelector("#city").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = Math.floor(data.main.temp) + "°c";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(input.value)
})
input.addEventListener("keyup", (e)=>{
    if (e.key == "Enter") {
        checkWeather(input.value)
    }
})

checkWeather()
