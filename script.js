async function getWeather() {
  const location = document.getElementById('locationInput').value;
  if (!location) {
    alert("Please enter a city name!");
    return;
  }

  const apiKey = '86bcfb584fdf487899d44928250308';
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      document.getElementById('result').innerText = "❗ Location not found!";
    } else {
      const tempC = data.current.temp_c;
      document.getElementById('result').innerText = `🌡️ Temperature in ${data.location.name}: ${tempC}°C`;
    }
  } catch (error) {
    console.error(error);
    document.getElementById('result').innerText = "⚠️ Error fetching weather!";
  }
}
