import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this is correct
import { BrowserRouter } from "react-router-dom";
import "antd/dist/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
