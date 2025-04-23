import axios from 'axios';

export const getWeather = async (req, res) => {
  const { city } = req.params;
  const apiKey = process.env.WEATHER_API_KEY;

  try {
    const { data } = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`
    );

    const formatted = {
      location: {
        city: data.location.name,
        region: data.location.region,
        country: data.location.country,
        localtime: data.location.localtime,
        timezone: data.location.tz_id
      },
      current: {
        temperature_c: data.current.temp_c,
        temperature_f: data.current.temp_f,
        feels_like_c: data.current.feelslike_c,
        condition: data.current.condition.text,
        icon_url: `https:${data.current.condition.icon}`,
        wind_kph: data.current.wind_kph,
        wind_dir: data.current.wind_dir,
        humidity: data.current.humidity,
        uv_index: data.current.uv,
        cloud: data.current.cloud,
        visibility_km: data.current.vis_km,
        pressure_mb: data.current.pressure_mb
      },
      forecast: data.forecast.forecastday[0].hour.map(hour => ({
        time: hour.time,
        temperature_c: hour.temp_c,
        condition: hour.condition.text,
        icon_url: `https:${hour.condition.icon}`,
        humidity: hour.humidity,
        wind_kph: hour.wind_kph,
        chance_of_rain: hour.chance_of_rain
      }))
    };

    res.json(formatted);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
};
