import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  background-color: var(--White);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 20px;

  .containerHamburguer {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }

  ul.active {
    display: flex;
  }
`

export const Ul = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;

  display: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  height: 100%;

  background: rgb(0,0,0);
  background: linear-gradient(45deg, var(--LimeGreen) 0%, rgba(0,0,0,0.95) 100%);
  backdrop-filter: blur(3px);
`

export const Li = styled.li`
  list-style: none;
  color: white;
`