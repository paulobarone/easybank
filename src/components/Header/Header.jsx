import { Nav, Ul, Menu, Overlay } from './Header.style';
import hamburguer from './icon-hamburger.svg';
import close from './icon-close.svg';
import { useState } from 'react';
import Logo from '../Logo/Logo';
import { Button, Li } from '../../styles/Components.style';

export default function Header() {
  const navBarItems = ['Home', 'About', 'Contact', 'Blog', 'Careers'];
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenuActive = () => {
    setMenuActive(!menuActive);
    window.scrollTo(0, 0);
  }

  return (
    <>
    <Overlay className={menuActive ? 'active' : ''} />
      <Nav>
        <Logo white={false} />
          <Ul className={menuActive ? 'active' : 'list'}>
            {navBarItems.map((item, key) => {
              return (
                <Li key={key} className='navBarItem'>{item}</Li>
              )
            })}
          </Ul>
        <Menu src={menuActive ? close : hamburguer} alt="Menu" onClick={toggleMenuActive} className={menuActive ? 'close hamburguer' : 'hamburguer'} />
        <Button className='headerButton'>Request Invite</Button>
      </Nav>
    </>
  ) 
}