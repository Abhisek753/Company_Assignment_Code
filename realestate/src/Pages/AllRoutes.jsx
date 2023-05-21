import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";
import SinglePage from "./SinglePage";
import Savedpage from "./Savedpage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/save" element={<Savedpage/>}></Route>
      <Route path="/:id" element={<SinglePage />}></Route>
    </Routes>
  );
}