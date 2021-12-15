import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

ReactDOM.render(
  <AppProvider i18n={enTranslations}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById("root")
);
