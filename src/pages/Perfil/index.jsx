import * as C from "./styles";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineCamera } from "react-icons/ai";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const Perfil = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordLocal, setPasswordLocal] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setPasswordLocal(localStorage.getItem("password"));
  }, []);

  const navigate = useNavigate();

  function handleEditPerfil() {
    if (password === passwordLocal) {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", newPassword);
    } else {
      alert("Senha atual errada");
    }
  }

  return (
    <C.Container>
      <C.Header>
        <Link to="/home">
          <BsArrowLeft size={28} color="white" />
        </Link>

        <div></div>
      </C.Header>
      <C.Form onSubmit={(event) => handleEditPerfil(event)}>
        <C.ImgPerfil>
          <img
            src="https://github.com/sergiowinkelstroter.png"
            alt="Foto do usuario"
          />
          <button>
            <AiOutlineCamera size={28} />
          </button>
        </C.ImgPerfil>
        <C.Input>
          <BiUser size={24} />
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </C.Input>
        <C.Input>
          <BiEnvelope size={24} />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </C.Input>
        <C.Input>
          <BiLockAlt size={24} />
          <input
            type="password"
            placeholder="Senha atual"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </C.Input>
        <C.Input>
          <BiLockAlt size={24} />
          <input
            type="password"
            placeholder="Nova senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </C.Input>
        <Button title="Salvar" />
      </C.Form>
    </C.Container>
  );
};
