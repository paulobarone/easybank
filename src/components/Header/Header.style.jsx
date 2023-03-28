import styled from 'styled-components';

export const Overlay = styled.div`
  &.active {
    position: absolute;
    top: 52px;
    bottom: 0;
    left: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: rgb(0,0,0);
    background: linear-gradient(180deg, var(--DarkBlue) 0%, transparent 100%);
    transition: 1s;
  }
`

export const Nav = styled.nav`
  background-color: var(--White);
  padding: 16px 12%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 30;

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
  padding: 30px 0;
  margin: 0;
  border-radius: 5px;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: var(--White);
  width: 80vw;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);

  &.active {
    display: flex;
  }

  @media (min-width: 1024px) {
    width: auto;
    padding: 0;
    position: static;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    gap: 24px;
    transform: none;

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

export const Menu = styled.img`
  z-index: 5;
  width: 24px;
  cursor: pointer;

  &.close {
    width: 20px;
    height: 20px;
  }
`