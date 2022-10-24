import { Details } from "./pages/Details";
import { Home } from "./pages/Home";
import { NoteCreate } from "./pages/NoteCreate";
import { Perfil } from "./pages/Perfil";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/notecreate" element={<NoteCreate />} />
    </Routes>
  );
};
