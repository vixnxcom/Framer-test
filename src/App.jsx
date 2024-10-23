import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EgNav from "./components/EgNav";
import Homepage from "./components/Homepage"; // Your homepage with all sections
import RandomHearts from "./components/Heart";
import styles from "./style";

const App = () => {
  return (
    <Router>
      <div className=" w-full top-0">
        {/* Navigation Component */}
        <EgNav />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Homepage />  // Your homepage that includes all sections
            }
          />
        </Routes>

       <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
        <RandomHearts />
       </div>
        </div>


      </div>


    </Router>
  );
};

export default App;
