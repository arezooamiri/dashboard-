import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/login" element={<Layout />}></Route>
    </Routes>
  );
}

export default App;
