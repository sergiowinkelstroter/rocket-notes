import { useNavigate } from "react-router-dom";
import { Tag } from "../Tag";
import * as C from "./styles";

export const Note = ({ data, ...rest }) => {
  const navigate = useNavigate();

  const handleNote = () => {
    navigate("/details/23");
  };
  console.log(data);
  return (
    <C.Container {...rest} onClick={handleNote}>
      <h1>{data.title}</h1>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </C.Container>
  );
};
