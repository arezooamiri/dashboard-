import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Singup from "./components/Singup";
import AllTrip from "./components/Alltrips";
import Travels from "./components/Travels";
import Rooms from "./components/Rooms";
import Transport from "./components/Transport";
import Attraction from "./components/Attraction";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="" element={<Layout />}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
      <Route path="/all-trips" element={<AllTrip/>}></Route>
      <Route path="/travels" element={<Travels/>}></Route>
      <Route path="/rooms" element={<Rooms/>}></Route>
      <Route path="/transport" element={<Transport/>}></Route>
      <Route path="/attractions" element={<Attraction/>}></Route>
    </Routes>
  );
}

export default App;
