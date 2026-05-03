import React from "react";
// Polyfill for Array.at used by some dependencies (like web-vitals) 
// to support older browsers/crawlers used by react-snap
if (!Array.prototype.at) {
  Array.prototype.at = function (index) {
    index = Math.trunc(index) || 0;
    if (index < 0) index += this.length;
    if (index < 0 || index >= this.length) return undefined;
    return this[index];
  };
}
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import App from "@/App";

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, <App />);
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
