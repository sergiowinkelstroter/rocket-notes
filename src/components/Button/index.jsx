import * as C from "./styles";

export const Button = ({ title, loading = false, ...rest }) => {
  return (
    <C.Container disabled={loading} {...rest}>
      {loading ? "Carregando..." : title}
    </C.Container>
  );
};
