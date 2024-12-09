
import React from "react";
import ReactDOM from "react-dom/client";
import SecondsCounter from "./component/SecondsCounter.jsx";

import "../styles/index.css";

const root = ReactDOM.createRoot(document.getElementById('app'));

// Inicializa el contador en 0
let seconds = 0;

// Actualiza el contador cada segundo
setInterval(() => {
    root.render(<SecondsCounter seconds={seconds} />);
    seconds++;
}, 1000);