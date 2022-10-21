import * as C from "./styles";
import { Form } from "../../components/Form";
import Image from "../../assets/img-signIn.png";

export const SignUp = () => {
  return (
    <C.Container>
      <img src={Image} alt="" />
      <Form
        subtitle="Criar sua conta"
        footer="Voltar para o login"
        titleButton="Cadastrar"
      />
    </C.Container>
  );
};
