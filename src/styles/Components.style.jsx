import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  
  &.showcase {
    margin-bottom: 50px;
  }

  &.latestArticlesContainer {
    padding: 70px 40px;
  }

  &.infoContainer {
    padding: 60px 40px;
    background-color: var(--LightGrayishBlue);
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
`