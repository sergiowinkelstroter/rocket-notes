import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 45%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: ${theme.COLORS.GRAY_100};
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 63px;
  text-align: center;
  color: ${theme.COLORS.ORANGE};
`;

export const SubTitle = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  margin-block: 38px;
`;

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

export const SignUpButton = styled.button`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  text-align: right;
  color: ${theme.COLORS.ORANGE};
  background: none;
  border: none;
  margin-top: 20px;
`;
