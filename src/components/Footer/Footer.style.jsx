import styled from "styled-components";

export const ListLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 1024px) {
    align-items: start;
    min-width: 120px;
  }

  &.col {
    padding: 0;
    flex-direction: column;
  }

  a {
    color: var(--White);
  }

  .socialMediaImg {
    svg path {
      transition: fill 0.5s ease-in-out;
    }

    &:hover svg path {
      fill: var(--LimeGreen);
    }
  }
`