import * as C from "./styles";

import { AiOutlinePoweroff } from "react-icons/ai";

export const Header = () => {
  return (
    <C.Container>
      <C.Profile>
        <img
          src="https://github.com/sergiowinkelstroter.png"
          alt="Foto do usuario"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Sergio Winkelstroter</strong>
        </div>
      </C.Profile>

      <C.Logout>
        <AiOutlinePoweroff size={28} />
      </C.Logout>
    </C.Container>
  );
};
