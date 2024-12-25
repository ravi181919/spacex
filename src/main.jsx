import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Falcon from "./component/Falcon/Falcon.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/falcon-9", element: <Falcon /> },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
