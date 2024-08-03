import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";
import Navbar from "./components/Navbar";
//import customer from "./pages/Customer";
import Orders from "./pages/Orders";
import Home from "./pages/Home";
import Warehouse from "./pages/Warehouse";
import Package from "./pages/Package";
import Erdiag from "./pages/Erdiag";
import OurTeam from "./pages/OurTeam";
import RelationalSchema from "./pages/RelationalSchema";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      
      <div>
        
        <App />
        <Routes>
        
        <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/relationalSchema"
            element={<RelationalSchema />}
          />
          <Route
            exact
            path="/ER"
            element={<Erdiag />}
          />
          <Route
            exact
            path="/Customer"
            element={<Viewdata table={"Customer"} />}
          />
          
          <Route
            exact
            path="/Truck"
            element={<Viewdata table={"Truck"} />}
          />
          <Route
            exact
            path="/CreditCard"
            element={<Viewdata table={"CreditCard"} />}
          />
          <Route
            exact
            path="/Employee"
            element={<Viewdata table={"Employee"} />}
          />
          
          <Route
            exact
            path="/Package"
            element={<Package/>}
          />
          <Route
            exact
            path="/Orders"
            element={<Orders/>}
          />
          <Route
            exact
            path="/Warehouse"
            element={<Warehouse/>}
          />

          <Route
            exact
            path="/Account"
            element={<Viewdata table={"Account"} />}
          />
          <Route
            exact
            path="/Warehouse"
            element={<Viewdata table={"Warehouse"} />}
          />
          <Route
            exact
            path="/Plane"
            element={<Viewdata table={"Plane"} />}
          />
          <Route
            exact
            path="/Package"
            element={<Viewdata table={"Package"} />}
          />
          <Route
            exact
            path="/Orders"
            element={<Viewdata table={"Orders"} />}
          />
          <Route
            exact
            path="/loc_of_pkg"
            element={<Viewdata table={"loc_of_pkg"} />}
          />
          
      
          <Route
            exact
            path="/ourteam"
            element={<OurTeam />}
          />
        </Routes>
      </div>
      
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




{/* <ul className=' w-[40%] py-4 0 flex justify-center flex-col items-center border-[4px] border-green-700 rounded-xl'>
  
  <hr class='w-[90%] h-[2px] rounded-full bg-green-900'/>
</ul> */}
