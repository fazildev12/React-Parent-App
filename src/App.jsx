import React from "react";
import ReactDOM from "react-dom/client";

import Counter from "remote/Counter";

const App = () => (
  <div>
    <div>React Parent App</div>
    <p>The bellow content is from other app</p>
    <Counter />
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)