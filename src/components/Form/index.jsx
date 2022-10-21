import { Button } from "../Button";
import { BiEnvelope, BiLockAlt, BiUser } from "react-icons/bi";
import * as C from "./styles";

export const Form = ({ subtitle, footer, titleButton }) => {
  return (
    <C.Container>
      <C.Title>Rocket Notes</C.Title>
      <p>Aplicação para salvar e gerenciar seus links úteis.</p>
      <C.Form>
        <C.SubTitle>{subtitle}</C.SubTitle>
        {titleButton === "Cadastrar" && (
          <C.Input>
            <BiUser size={24} />
            <input type="text" placeholder="Nome" />
          </C.Input>
        )}
        <C.Input>
          <BiEnvelope size={24} />
          <input type="email" placeholder="E-mail" />
        </C.Input>
        <C.Input>
          <BiLockAlt size={24} />
          <input type="password" placeholder="Senha" />
        </C.Input>
        <Button title={titleButton} />
      </C.Form>
      <C.SignUpButton>{footer}</C.SignUpButton>
    </C.Container>
  );
};
