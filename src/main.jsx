import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // BrowserRouter जोड़ा गया
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/Sudo1-project">
      {" "}
      {/* basename सेट किया */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
