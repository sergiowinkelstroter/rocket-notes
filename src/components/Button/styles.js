import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.button`
  width: 100%;
  background-color: ${theme.COLORS.ORANGE};
  color: ${theme.COLORS.BACKGROUND_800};

  height: 56px;
  border: none;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  text-align: center;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;
