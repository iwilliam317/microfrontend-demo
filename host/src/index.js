import React from "react";
import ReactDOM from "react-dom/client"; // Importando corretamente o ReactDOM para React 18
import App from "./App";
// Encontra o elemento root no HTML onde o React vai ser renderizado
const root = ReactDOM.createRoot(document.getElementById("root"));  // Usando createRoot
root.render(<App />);  // Renderiza o componente App dentro do root