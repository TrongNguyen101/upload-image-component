import * as request from "../..//utils/TestRequest";

export const getWeather = async () => {
  try {
    const response = await request.get("WeatherForecast");
    return response.data;
  } catch (error) {
    return console.log(error);
  }
};
