import * as request from "../..//utils/TestRequest";

export const loadImage = async (fileName) => {
  try {
    const response = await request.get(`LoadImage/${fileName}`, {
      responseType: "blob",
    });
    return response;
  } catch (error) {
    return console.log(error);
  }
};
