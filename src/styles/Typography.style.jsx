import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 500;
`

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
`

export const Paragraph = styled.p`
  font-size: 14px;
  color: var(--GrayishBlue);
  line-height: 1.5em;
`

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  gap: 24px;

  &.infoTextGroup {
    margin-bottom: 50px;
  }
`