import styled from 'styled-components';

export const NavContainer = styled.div`
  padding: 16px 32px;
  background-color: var(--White);
  z-index: 2;
  position: sticky;
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 20px;

  ul.active {
    display: flex;
    transition: 1s;
  }
`

export const Ul = styled.ul`
  display: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
`

export const Menu = styled.img`
  z-index: 5;
  width: 24px;

  &.close {
    width: 24px;
    height: 24px;
  }
`