import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/JWTContext";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </AuthProvider>
  </React.StrictMode>
);
