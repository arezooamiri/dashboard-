import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout";
import BannerTravel from "./components/Bannertravel";
import ReportTravel from "./components/ReportTravel";

function App() {
  return (
   
      <Layout>
         <div className="grid grid-cols-4 gap-1 h-2/6 pt-8  ">
               <BannerTravel/>
               <ReportTravel/>
         </div>
         <div>
             some thing
         </div>

      </Layout>
    
  );
}

export default App;
