import fetch from "node-fetch";

// Función para obtener información del clima de una ciudad
async function getWeatherInfo(city) {
  const apiKey = process.env.OPENWEATHER_API_KEY || "YOUR_API_KEY_HERE"; // Usa variable de entorno
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    // Hacemos una solicitud a la API del servicio meteorológico
    const response = await fetch(apiUrl);

    // Verificamos si la respuesta es exitosa
    if (!response.ok) {
      throw new Error("No se pudo obtener la información del clima");
    }

    // Convertimos la respuesta a formato JSON
    const weatherData = await response.json();

    // Retornamos los datos relevantes sobre el clima
    return {
      weather: weatherData.weather[0].description,
      temperature: weatherData.main.temp
    };
  } catch (error) {
    // En caso de errores, lanzamos una excepción con un mensaje descriptivo
    throw new Error("Error al obtener información del clima");
  }
}

// Exportamos la función para ser utilizada en otros archivos
export { getWeatherInfo };
