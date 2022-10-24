import * as C from "./styles";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export const Home = () => {
  return (
    <C.Container>
      <C.Headers>
        <C.Nav>
          <C.Title>Rocketnotes</C.Title>
          <nav>
            <ul>
              <li>Todos</li>
              <li>Frontend</li>
              <li>Node</li>
              <li>React</li>
            </ul>
          </nav>
          <div>
            <Link to="/notecreate">
              <AiOutlinePlus size={24} /> <span>Criar nota</span>
            </Link>
          </div>
        </C.Nav>
        <Header />
      </C.Headers>
      <C.Content>
        <input type="text" placeholder="Pesquisar pelo título" />
        <C.Section>
          <h4>Minhas notas</h4>
        </C.Section>
      </C.Content>
    </C.Container>
  );
};
