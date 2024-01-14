

import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import ReactDOM from 'react-dom';

import { AuthContextProvider } from "context";
import { UserContextProvider } from "context/UserContext";

// Material Dashboard 2 React Context  Provider
import { MaterialUIControllerProvider } from "context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
    <UserContextProvider>
      <MaterialUIControllerProvider>
        <App />
      </MaterialUIControllerProvider>
    </UserContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
