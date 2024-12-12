import React from "react";
import ReactDOM from "react-dom/client"; // Importando corretamente o ReactDOM para React 18
import Button from "./Button";  // Componente de exemplo que pode ser usado no remote
// Encontra o elemento root no HTML onde o React vai ser renderizado
const root = ReactDOM.createRoot(document.getElementById("root"));  // Usando createRoot
root.render(<Button />);  // Renderiza o componente Button dentro do root