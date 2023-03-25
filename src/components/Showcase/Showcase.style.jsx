import styled from "styled-components";
import backgroundImageMobile from './bg-intro-mobile.svg'

export const Bg = styled.div`
  width: 100%;
  height: 80vw;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  background-image: url(${backgroundImageMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 640px) {
    height: 60vw;
    background-position: center 80%;
  }
`

export const Img = styled.img`
  max-width: 90vw;
  min-height: 10vw;

  position: absolute;
  top: -100px;

  @media (min-width: 480px) {
    top: -150px;
  }

  @media (min-width: 640px) {
    max-height: 80vw;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`