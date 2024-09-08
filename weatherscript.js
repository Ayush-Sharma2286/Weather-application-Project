const apiKey = '29b6a088b4b57daae8f31c4df3acb197';

function getWeather() {
    const city = document.getElementById('city-input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city-name').textContent = data.name;
            const d=new Date();
            document.getElementById("time").textContent = `Day & Date: ${d.toDateString()}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp}°C`;
            document.getElementById('description').textContent = `Description: ${data.weather[0].description}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('wind').textContent = `Wind Speed: ${data.wind.speed} km/h`;
        })
        .catch(error => {
            alert('City not found! Please enter a valid city name.');
            console.error('Error fetching weather data:', error);
        });
}
