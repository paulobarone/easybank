import styled from "styled-components"

export const H1 = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: 500;

  &.latestArticlesTitle {
    margin-bottom: 48px;
  }

  &.showcaseTitle {
    @media (min-width: 1024px) {
      font-size: 48px;
      text-align: start;
    }
  }
`

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
`

export const Paragraph = styled.p`
  font-size: 14px;
  color: var(--GrayishBlue);
  line-height: 1.5em;

  &.footer {
    text-align: center;

    a {
      color: var(--White);
    }
  }

  &.showcaseDescription {
    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
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

  &.showcaseTextGroup {
    margin-bottom: 50px;
    padding: 40px 10%;
    justify-content: center;
    max-width: 600px;

    @media (min-width: 1024px) {
      max-width: 450px;
      align-items: start;
      text-align: left;
      padding: 0;
      margin: 0;
    }
  }
`