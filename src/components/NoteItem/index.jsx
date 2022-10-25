import { FiPlus, FiX } from "react-icons/fi";
import theme from "../../styles/theme";

import * as C from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <C.Container isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button onClick={onClick} type="button">
        {isNew ? (
          <FiPlus size={24} color={theme.COLORS.ORANGE} />
        ) : (
          <FiX size={24} color={theme.COLORS.RED} />
        )}
      </button>
    </C.Container>
  );
}
