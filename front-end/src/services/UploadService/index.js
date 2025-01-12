import * as request from "../../utils/UploadRequest";

export const postFile = async (file) => {
  try {
    const response = await request.post("Upload", file, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
