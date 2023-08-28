import { getWeatherInfo } from "./weatherService.js";

// Función para mostrar información del clima de una ciudad
async function showWeather(city) {
  try {
    // Obtenemos los datos del clima utilizando la función del servicio meteorológico
    const weatherData = await getWeatherInfo(city);

    // Mostramos la información en la consola
    console.log(`El clima en ${city} es: ${weatherData.weather}`);
    console.log(`Temperatura: ${weatherData.temperature}°C`);
  } catch (error) {
    // Manejamos errores y mostramos un mensaje en caso de problemas
    console.error("Error al obtener información del clima:", error.message);
  }
}

// Ciudad para la cual queremos obtener información del clima
const city = "New York";
showWeather(city);
