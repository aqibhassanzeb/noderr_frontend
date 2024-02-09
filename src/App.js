import React from "react";
import "./App.css";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";

const Home = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <Suspense>
      <Header />
      {/* <div className="container"> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      {/* </div> */}
    </Suspense>
  );
}

export default App;
