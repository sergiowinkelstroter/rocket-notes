import * as C from "./styles";

import { AiOutlinePoweroff } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Header = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    setName(localStorage.getItem("name"));
    setImage(localStorage.getItem("github"));
  }, []);

  return (
    <C.Container>
      <Link to="/perfil">
        <C.Profile>
          <img src={`https://github.com/${image}.png`} alt="Foto do usuario" />
          <div>
            <span>Bem-vindo</span>
            <strong>{name}</strong>
          </div>
        </C.Profile>
      </Link>

      <Link to="/">
        <C.Logout>
          <AiOutlinePoweroff size={28} />
        </C.Logout>
      </Link>
    </C.Container>
  );
};
