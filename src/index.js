import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";

// const apm = require('elastic-apm-node').start({
//   serviceName: 'Backend-node-test',
//   secretToken: 'hfiyrudflwaude0wy4ekdwy93u0u',
//   serverUrl: 'https://apm.vishalaws.tech',
//   logLevel: 'debug',
//   //logLevel: 'trace',
//   environment: 'Dev'
// })

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
