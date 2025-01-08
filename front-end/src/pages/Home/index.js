import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  const handleUpload = () => {
    navigate("/upload");
  };

  const handleImageUploaded = () => {
    navigate("/image");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <div>
        <Button variant="contained" onClick={handleUpload}>
          Upload
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={handleImageUploaded}>Image Uploaded</Button>
      </div>
    </div>
  );
}

export default HomePage;
