import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 10%;
  
  &.showcase {
    margin-bottom: 50px;
  }

  &.latestArticlesContainer {
    padding: 70px 10%;
  }

  &.infoContainer {
    padding: 70px 10%;
    background-color: var(--LightGrayishBlue);
  }

  &.footer {
    background-color: var(--DarkBlue);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
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
`

export const Li = styled.li`
  text-align: center;
  color: white;
`