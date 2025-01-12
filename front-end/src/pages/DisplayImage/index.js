import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as LoadImageService from "../../services/LoadImageService";

function ImageLoader() {
  let navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const fetchImage = async () => {
    const response = await LoadImageService.loadImage(fileName);
    if (response.status === 200) {
      const url = URL.createObjectURL(response.data);
      setImageSrc(url);
      setError("");
    }
    if (response.status === 404) {
      setImageSrc(null);
      setError("Image not found");
    }
  };

  const handleLoadImage = () => {
    if (!fileName) {
      alert("Please enter a file name first");
      return;
    } else {
      fetchImage();
    }
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
        <div
          style={{
            width: "380px",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
          }}
        >
          <input
            type="text"
            placeholder="Enter image file name (e.g., image.jpg)"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <Button variant="contained" onClick={handleLoadImage}>
          load image
        </Button>
        <Button variant="contained" onClick={handleBackHome}>
          back to home
        </Button>
      </div>
      <div>
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Loaded"
            style={{ width: "300px", marginTop: "10px" }}
          />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}

export default ImageLoader;
