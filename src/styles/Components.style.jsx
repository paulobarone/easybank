import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 6%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.latestArticlesContainer {
    padding: 70px 6%;
  }

  &.infoContainer {
    padding: 70px 6%;
    background-color: var(--LightGrayishBlue);
  }

  &.footerContainer {
    background-color: var(--DarkBlue);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;

    @media (min-width: 1024px) {
      justify-content: space-between;
      flex-direction: row;
      gap: 150px;
    }

    .firstPart {
      display: flex;
      flex-direction: column;
      gap: 36px;

      @media (min-width: 1024px) {
        .columnContainer {
          justify-content: center;
        }

        display: flex;
        flex-direction: row;
        gap: 10vw;
      }
    }

    .columnContainer {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  &.showcaseContainer {
    padding: 0;

    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      flex-direction: row-reverse;
      padding: 0 0 0 6%;
    }

    @media (min-width: 1280px) {
      padding: 0 6% 0 6%;
    }
  }
`

export const Button = styled.button`
  min-width: 200px;
  padding: 12px 32px;
  border-radius: 32px;
  outline: none;
  border: none;
  background: linear-gradient(90deg, var(--LimeGreen), var(--BrightCyan));
  color: var(--White);
  font-weight: 500;
  cursor: pointer;
  display: none;
  transition-timing-function: linear;
  transition: 0.5s;


  &:hover {
    opacity: 0.8;
  }

  &.showcaseButton {
    display: block;
  }

  &.footerButton {
    @media (min-width: 1024px) {
      display: block;
    }
  }
`

export const Li = styled.li`
  text-align: center;
  color: white;
  cursor: pointer;
`

export const Link = styled.a`
  transition: 0.5s ease-in-out;
  &:hover {
    color: var(--LimeGreen);
  }
`