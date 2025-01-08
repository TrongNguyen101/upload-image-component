import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as TestService from "../../services/TestService";

function ImagePage() {
  let navigate = useNavigate();

  const [weather, setWeather] = useState([]);

  const fetchWeather = async () => {
    const data = await TestService.getWeather();
    setWeather(data);
  };

  const handleRequest = () => {
    fetchWeather();
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <Button variant="contained" onClick={handleRequest}>
          request api
        </Button>
        <Button variant="contained" onClick={handleBackHome}>
          back home
        </Button>
      </div>
      <div>
        <ul>
          {weather.map((item, key) => (
            <li key={key}>
              <p>Date: {item.date}</p>
              <p>Temperature C: {item.temperatureC}</p>
              <p>Temperature F: {item.temperatureF}</p>
              <p>Summary: {item.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ImagePage;
