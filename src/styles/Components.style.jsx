import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 10%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.latestArticlesContainer {
    padding: 70px 10%;
  }

  &.infoContainer {
    padding: 70px 10%;
    background-color: var(--LightGrayishBlue);
  }

  &.footerContainer {
    background-color: var(--DarkBlue);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
  }

  &.showcaseContainer {
    padding: 0;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      padding: 0 0 0 8%;
    }

    @media (min-width: 1280px) {
      padding: 0 4% 0 8%;
    }
  }
`

export const Button = styled.button`
  padding: 12px 32px;
  border-radius: 32px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, var(--LimeGreen), var(--BrightCyan));
  color: var(--White);
  font-weight: 500;
  cursor: pointer;
  display: none;

  &.showcaseButton {
    display: block;
  }
`

export const Li = styled.li`
  text-align: center;
  color: white;
`