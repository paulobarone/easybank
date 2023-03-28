import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: var(--White);
  padding: 16px 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;


  @media (min-width: 1024px) {
    .hamburguer {
      display: none;
    }

    .headerButton {
      display: block;
    }
  }
`

export const Ul = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 24px;
    font-size: 16px;

    Li {
      color: var(--GrayishBlue);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: -28px;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, var(--LimeGreen), var(--BrightCyan));
        display: block;
        opacity: 0;
        transition: 0.5s;
      }
      
      &:hover::after {
        opacity: 1;
      }
    }
  }
`

export const NavItemsContainer = styled.div`
  display: none;

  &.NavItemsContainerActive {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;

    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(3px); 
    opacity: 0.9;
    background: rgb(0,0,0);
    background: linear-gradient(45deg, var(--LimeGreen) 0%, rgba(0,0,0,0.95) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`

export const Menu = styled.img`
  z-index: 5;
  width: 24px;
  cursor: pointer;

  &.close {
    width: 24px;
    height: 24px;
  }
`