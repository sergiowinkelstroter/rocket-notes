import { Form } from "../../components/Form";
import * as C from "./styles";
import Image from "../../assets/img-signIn.png";

export const SignIn = () => {
  return (
    <C.Container>
      <Form
        subtitle="Faça seu login"
        footer="Criar conta"
        titleButton="Entrar"
      />
      <img src={Image} alt="" />
    </C.Container>
  );
};
