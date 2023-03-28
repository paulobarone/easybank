import { Nav, Ul, NavItemsContainer, Menu } from './Header.style';
import hamburguer from './icon-hamburger.svg';
import close from './icon-close.svg';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Button, Li } from '../../styles/Components.style';

export default function Header() {
  const navBarItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    document.body.style.overflowY = menuActive ? 'hidden' : 'auto';
  }, [menuActive]);

  return (
    <Nav>
      <Logo white={false} />
      <NavItemsContainer className={menuActive ? 'NavItemsContainerActive' : 'NavItemsContainer'}>
        <Ul className={menuActive ? 'active' : 'list'}>
          {navBarItems.map((item, key) => {
            return (
              <Li key={key} className='navBarItem'>{item}</Li>
            )
          })}
        </Ul>
      </NavItemsContainer>
      <Menu src={menuActive ? close : hamburguer} alt="Menu" onClick={toggleMenuActive} className={menuActive ? 'close hamburguer' : 'hamburguer'} />
      <Button className='headerButton'>Request Invite</Button>
    </Nav>
  ) 
}