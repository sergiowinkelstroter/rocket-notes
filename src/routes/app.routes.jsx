import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { NoteCreate } from "../pages/NoteCreate";
import { Perfil } from "../pages/Perfil";
import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/notecreate" element={<NoteCreate />} />
    </Routes>
  );
};
