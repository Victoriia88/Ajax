const apiUrl =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

const xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);

xhr.onload = function () {
  if (xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    const temperature = response.main.temp;
    const pressure = response.main.pressure;
    const description = response.weather[0].description;
    const humidity = response.main.humidity;
    const windSpeed = response.wind.speed;
    const windDegree = response.wind.deg;
    const weatherIconCode = response.weather[0].icon;

    document.getElementById("temperature").textContent = temperature;
    document.getElementById("pressure").textContent = pressure;
    document.getElementById("description").textContent = description;
    document.getElementById("humidity").textContent = humidity;
    document.getElementById("windSpeed").textContent = windSpeed;
    document.getElementById("windDegree").textContent = windDegree;

    const weatherIconElement = document.getElementById("weatherIcon");
    weatherIconElement.src = `http://openweathermap.org/img/w/${weatherIconCode}.png`;
    weatherIconElement.alt = "Погодний значок";
  } else {
    console.error("Помилка отримання погодних даних:", xhr.status);
  }
};

xhr.onerror = function () {
  console.error("Помилка запиту погоди.");
};

xhr.send();
