import logo from './logo.svg';
import { Container, Nav, Ul, Li} from './Header.style';
import hamburguer from './icon-hamburger.svg';
import close from './icon-close.svg';
import { useEffect, useState } from 'react';

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
    <Container>
      <Nav>
        <img src={logo} alt="Easybank Logo" />
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
    </Container>
  ) 
}