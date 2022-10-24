import * as C from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export const NoteCreate = () => {
  return (
    <C.Container>
      <Header />
      <C.Content>
        <C.Header>
          <C.Title>Criar Nota</C.Title>
          <Link to="/home">
            <C.ButtonBack>Voltar</C.ButtonBack>
          </Link>
        </C.Header>
        <C.Form>
          <C.Input placeholder="Título" />
          <C.TexteArea placeholder="Observações" rows="6" />
        </C.Form>
        <C.Section>
          <h4>Links úteis</h4>
        </C.Section>
        <C.Section>
          <h4>Marcadores</h4>
        </C.Section>
        <Button title="Salvar" />
      </C.Content>
    </C.Container>
  );
};
