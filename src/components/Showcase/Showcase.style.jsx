import styled from "styled-components";
import backgroundImageMobile from './bg-intro-mobile.svg';
import backgroundImageDesktop from './bg-intro-desktop.svg';

export const Bg = styled.div`
  width: 100%;
  height: 60vw;
  max-height: 900px;
  z-index: -1;
  background-position: 0% 80%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-image: url(${backgroundImageMobile});
  background-size: cover;
  background-repeat: no-repeat;

  @media (min-width: 1024px) {
    background-image: url(${backgroundImageDesktop});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: 1200px;
    background-position: 0% 80%;
    margin-top: -150px;
    width: 900px;
    height: 900px;
  }
`

export const Img = styled.img`
  min-height: 10vw;
  position: absolute;
  top: -30vw;
  height: 90vw;
  max-height: 90vw;

  @media (min-width: 1024px) {
    width: 600px;
    height: auto;
    top: -20px;
    max-height: 80vw;
  }
`