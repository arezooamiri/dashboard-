import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Singup from "./components/Singup";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/dashboard" element={<Layout />}></Route>
      <Route path="/singup" element={<Singup/>}></Route>
    </Routes>
  );
}

export default App;
