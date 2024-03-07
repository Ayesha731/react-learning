import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createContext } from "react";
import { Provider } from "react-redux";
import store from "./states/store.js";
const Context = createContext();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Context.Provider value="Ayesha">
    
    
    </Context.Provider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export { Context };
