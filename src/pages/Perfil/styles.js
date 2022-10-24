import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  height: 124px;
  background-color: ${theme.COLORS.BACKGROUND_900};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const ImgPerfil = styled.div`
  position: relative;
  margin-bottom: 60px;
  > img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > button {
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    background-color: ${theme.COLORS.ORANGE};
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: -90px;
`;

export const Input = styled.div`
  width: 100%;
  background-color: ${theme.COLORS.BACKGROUND_900};
  padding: 12px;

  display: flex;
  justify-content: justify-self;
  align-items: center;
  gap: 18px;
  border-radius: 10px;

  > input {
    background: none;
    border: none;
    color: ${theme.COLORS.WHITE};
  }

  > svg {
    color: ${theme.COLORS.GRAY_100};
  }
`;
