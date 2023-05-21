import { Routes, Route } from "react-router-dom";
import MainPage from "./mainpage";
import SinglePage from "./SinglePage";

export default function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/:id" element={<SinglePage />}></Route>
    </Routes>
  );
}