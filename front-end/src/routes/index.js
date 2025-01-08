import ImagePage from "../pages/DisplayImage";
import HomePage from "../pages/Home";
import UploadImagePage from "../pages/UploadImage";

const publicRoutes = [
  { path: "/", page: HomePage },
  { path: "/upload", page: UploadImagePage },
  { path: "/image", page: ImagePage },
];

export { publicRoutes };
