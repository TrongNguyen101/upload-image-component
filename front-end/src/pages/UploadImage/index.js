import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as UploadService from "../../services/UploadService";

function UploadImagePage() {
  const navigate = useNavigate();
  const [seleactedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const formData = new FormData();
  formData.append("image", seleactedFile);

  const fetchUpload = async () => {
    const data = await UploadService.postFile(formData);
    return data;
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
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
      </div>
    </div>
  );
}

export default UploadImagePage;
