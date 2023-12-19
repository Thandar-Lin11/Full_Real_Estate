import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fbcwvs2317sl8nkr.us.auth0.com"
      clientId="IHuWZ2kfdzGc25OD7pOSeFC6j9ia2Nbd"
      authorizationParams={{
        redirect_uri: "http://localhost:5173/",
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
