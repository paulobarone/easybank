import logoBlack from './logo-black.svg';
import logoWhite from './logo-white.svg'
import { LogoLink } from './Logo.style';

function Logo(props) {
  return (
    <LogoLink href="/">
      <img src={props.white ? logoWhite : logoBlack} alt="Easybank Logo" />
    </LogoLink>
  )
}

export default Logo;