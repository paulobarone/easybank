import styled from "styled-components";
import backgroundImageMobile from './bg-intro-mobile.svg'

export const Bg = styled.div`
  width: 100%;
  height: 300px;
  z-index: -1;

  position: relative;
  background-image: url(${backgroundImageMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const Img = styled.img`
  width: 100%;
  top: -150px;
  z-index: -1;
  position: absolute;
`