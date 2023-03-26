import styled from "styled-components";

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`