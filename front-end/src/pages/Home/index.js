import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();
  const handleClickEvent = () => {
    navigate("/upload");
  };
  
  return (
    <div>
      <Button variant="contained" onClick={handleClickEvent}>
        Upload
      </Button>
    </div>
  );
}

export default HomePage;
