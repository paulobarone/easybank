import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Card = styled.div`
  width: 100%;
  background-color: var(--White);
  border-radius: 10px;

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