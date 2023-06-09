import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5vw;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 3vw;
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

  img.articleImg {
    width: 100%;
    min-height: 175px;
    max-height: 250px;
    height: 40vw;
    border-radius: 10px 10px 0 0;
  }

  div.textGroup {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;

    span.authorName {
      font-size: 14px;
      color: var(--GrayishBlue);
    }
  }
`