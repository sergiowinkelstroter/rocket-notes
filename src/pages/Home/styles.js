import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Headers = styled.div`
  display: flex;
`;

export const Nav = styled.div`
  width: 250px;
  height: 100vh;

  background-color: ${theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > nav ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  > nav ul li {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${theme.COLORS.GRAY_100};
    &:hover {
      cursor: pointer;
      color: ${theme.COLORS.ORANGE};
      transition: all 0.5s;
    }
  }

  > div {
    width: 100%;
    height: 80px;
    background-color: ${theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      color: ${theme.COLORS.BACKGROUND_900};
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const Title = styled.h3`
  color: ${theme.COLORS.ORANGE};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.COLORS.BACKGROUND_700};
  padding-block: 30px;
`;

export const Content = styled.main`
  width: 900px;
  position: absolute;
  left: 20%;
  top: 20%;

  > input {
    width: 100%;
    border: none;
    background-color: ${theme.COLORS.BACKGROUND_900};
    border-radius: 10px;
    padding: 10px;
    color: ${theme.COLORS.WHITE};
  }
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
