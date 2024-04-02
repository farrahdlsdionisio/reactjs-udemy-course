// Main entrypoint of the react app - it boots up the react project 
import ReactDOM from "react-dom/client"; //library responsible to output components to the screen

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); // create root takes an existing html code from the index.html then will inject the component (<App />) to it (in this case the html element with the root id)
