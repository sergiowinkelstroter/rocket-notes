import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.main`
  width: 600px;

  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 38px;
  padding-bottom: 40px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  color: ${theme.COLORS.WHITE};
`;

export const ButtonBack = styled.button`
  background: none;
  border: none;
  color: ${theme.COLORS.GRAY_300};
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
`;

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 26px;
  margin-top: 56px;
`;

export const Input = styled.input`
  width: 100%;

  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 10px;
  padding: 12px;
`;

export const TexteArea = styled.textarea`
  width: 100%;

  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.BACKGROUND_900};
  border: none;
  border-radius: 10px;
  padding: 12px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  > h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
    color: ${theme.COLORS.GRAY_100};
    margin-top: 54px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${theme.COLORS.BACKGROUND_700};
  }
`;
