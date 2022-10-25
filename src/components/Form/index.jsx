import { Button } from "../Button";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Form = ({ subtitle, footer, titleButton }) => {
  const [name, setName] = useState("");
  const [github, setGithub] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSign(e) {
    e.preventDefault();
    if (titleButton === "Cadastrar") {
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("github", github);
      navigate("/home");
    } else if (titleButton === "Entrar") {
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        navigate("/home");
      } else {
        alert("Ocorreu um erro! Tente novamente!");
      }
    } else {
      alert("Ocorreu um erro! Tente novamente!");
    }
  }

  return (
    <C.Container>
      <C.Title>Rocket Notes</C.Title>
      <p>Aplicação para salvar e gerenciar seus links úteis.</p>
      <C.Form onSubmit={(e) => handleSign(e)}>
        <C.SubTitle>{subtitle}</C.SubTitle>
        {titleButton === "Cadastrar" && (
          <>
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
              <FiGithub size={24} />
              <input
                type="text"
                placeholder="Github username"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </C.Input>
          </>
        )}
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
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </C.Input>
        <Button title={titleButton} />
      </C.Form>
      {footer === "Criar conta" ? (
        <Link to="/signup">
          <C.SignUpButton>{footer}</C.SignUpButton>
        </Link>
      ) : (
        <Link to="/">
          <C.SignUpButton>{footer}</C.SignUpButton>
        </Link>
      )}
    </C.Container>
  );
};
