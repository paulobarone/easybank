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
  font-size: 1.0625rem;
  font-weight: 400;
  transition: 0.5s ease-in-out;

  &.titleArticle:hover {
    color: var(--LimeGreen);
  }
`

export const Paragraph = styled.p`
  font-size: 0.825rem;
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

  a {
    &:hover {
      transition: 0.5s ease-in-out;
      color: var(--LimeGreen);
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

    @media (min-width: 1024px) {
      max-width: 450px;
    }
  }

  &.infoItemTextGroup {
    max-width: 350px;
  }

  &.showcaseTextGroup {
    margin-bottom: 50px;
    padding: 40px 10%;
    justify-content: center;
    max-width: 600px;

    @media (min-width: 1024px) {
      max-width: 400px;
      align-items: start;
      text-align: left;
      padding: 0;
      margin: 0;
    }
  }
`