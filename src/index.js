import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toggle/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "./themeContext/themeContext";
import { ApiProvider } from "./context/apiContext";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <ThemeProvider>
        <ApiProvider>
          <App />
          {/* <ToastContainer /> */}
        </ApiProvider>
      </ThemeProvider>
    </SkeletonTheme>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
