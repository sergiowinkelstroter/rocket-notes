import * as C from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

export const NoteCreate = () => {
  return (
    <C.Container>
      <Header />
      <C.Content>
        <C.Header>
          <C.Title>Criar Conta</C.Title>
          <C.ButtonBack>Voltar</C.ButtonBack>
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
