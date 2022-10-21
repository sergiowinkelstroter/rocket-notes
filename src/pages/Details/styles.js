import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 90px auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.main`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 150px;
  padding-bottom: 50px;

  > h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
    margin-bottom: 16px;
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
`;

export const DeleteButton = styled.button`
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-align: right;
  color: ${theme.COLORS.ORANGE};
  background: none;
  border: none;
  margin-bottom: 50px;
`;

export const Links = styled.div`
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

  > a {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${theme.COLORS.WHITE};
  }
`;

export const Marcadores = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
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
  > div {
    display: flex;
    gap: 6px;
    width: 20%;
  }
`;
