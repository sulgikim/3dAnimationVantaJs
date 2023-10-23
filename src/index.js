import { createRoot } from "react-dom/client";
// import VantaAnimation from "./VantaAnimation";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
