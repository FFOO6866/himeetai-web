import { createRoot } from "react-dom/client";
import { loadConfig } from "./config";
import App from "./App.tsx";
import "./index.css";

loadConfig().then(() => {
  createRoot(document.getElementById("root")!).render(<App />);
});
