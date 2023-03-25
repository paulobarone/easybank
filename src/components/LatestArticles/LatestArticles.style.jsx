import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }
`

export const Card = styled.div`
  width: 100%;
  background-color: var(--White);
  border-radius: 10px;
  -webkit-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 4px 9px 0px rgba(0,0,0,0.25);
  cursor: pointer;
  transition-timing-function: linear;
  transition: 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  img.articleImg {
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  div.textGroup {
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    span.authorName {
      font-size: 14px;
      color: var(--GrayishBlue);
    }
  }
`