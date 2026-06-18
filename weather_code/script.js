const API_KEY = "5a1fc316f6587a238a00afe4c9963941";

const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector(".input-city");
const searchBtn = document.querySelector("button");

async function checkWeather(city = "karachi") {
  if (!city.trim()) {
    alert("Please enter a city name");
    return;
  }
  try {
    const res = await fetch(URL + city + `&appid=${API_KEY}`);

    if (!res.ok) {
      throw new Error("City not found");
    }

    const data = await res.json();

    document.querySelector("#city").textContent = data.name;
    document.querySelector("#temp").textContent =
      Math.floor(data.main.temp) + "°C";
  } catch (error) {
    console.error(error);

    document.querySelector("#city").textContent = "City not found";
    document.querySelector("#temp").textContent = "--";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(input.value.trim());
});

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    checkWeather(input.value.trim());
  }
});

checkWeather();
