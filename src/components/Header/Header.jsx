import { NavContainer, Nav, Ul } from './Header.style';
import hamburguer from './icon-hamburger.svg';
import close from './icon-close.svg';
import { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import { Li } from '../../styles/Components.style';

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
    <NavContainer>
      <Nav>
        <Logo white={false} />
        <div className='containerHamburguer'>
          <img src={menuActive ? close : hamburguer} alt="Menu" onClick={toggleMenuActive} className='hamburguer' />
        </div>
        <Ul className={menuActive ? 'active' : ''}>
          {navBarItems.map((item, key) => {
            return (
              <a href="/" key={key} onClick={toggleMenuActive}>
                <Li>{item}</Li>
              </a>
            )
          })}
        </Ul>
      </Nav>
    </NavContainer>
  ) 
}