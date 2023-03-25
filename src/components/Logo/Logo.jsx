import logoBlack from './logo-black.svg';
import logoWhite from './logo-white.svg'

function Logo(props) {
  return <img src={props.white ? logoWhite : logoBlack} alt="Easybank Logo" />
}

export default Logo;