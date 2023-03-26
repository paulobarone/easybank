import styled from "styled-components";

export const ListLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 150px;
  }
`

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (min-width: 1024px) {
    align-items: start;
  }

  &.col {
    padding: 0;
    flex-direction: column;
  }

  a {
    color: var(--White);
  }

  a:hover {
    transition: 0.5s ease-in-out;
    color: var(--LimeGreen);
  }
  
  .socialMediaImg:hover svg path {
    transition: 0.5s ease-in-out;
    fill: var(--LimeGreen);
  }
`