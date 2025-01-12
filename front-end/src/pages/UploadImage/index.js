import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as UploadService from "../../services/UploadService";

function UploadImagePage() {
  const navigate = useNavigate();
  const [seleactedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const formData = new FormData();
  formData.append("image", seleactedFile);

  const fetchUpload = async () => {
    const response = await UploadService.postFile(formData);
    if (response.status === 200) {
      alert(response.data);
    } else {
      alert("Upload failed");
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        try {
          setSelectedFile(file);
          setPreview(URL.createObjectURL(file));
          setError("");
        } catch (err) {
          setSelectedFile(null);
          setPreview(null);
          setError("Failed to preview image. Please try again.");
        }
      } else {
        setSelectedFile(null);
        setPreview(null);
        setError("Invalid file type. Please select an image.");
      }
    } else {
      setSelectedFile(null);
      setPreview(null);
      setError("No file selected.");
    }
  };

  const handleUpload = () => {
    if (!seleactedFile) {
      alert("Please select a file first");
      return;
    } else {
      fetchUpload();
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
            border: "1px solid black",
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            paddingLeft: "5px",
          }}
        >
          <input
            style={{ width: "100%" }}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <Button variant="contained" onClick={handleUpload}>
            upload
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={handleBackHome}>
            back home
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "1rem" }}>
        {preview && (
          <img src={preview} alt="preview" style={{ width: "100px" }} />
        )}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}

export default UploadImagePage;
