import { Button, Container, Li } from "../../styles/Components.style";
import { List } from './Footer.style';
import Logo from "../Logo/Logo";
import FacebookImg from './icon-facebook.svg';
import YoutubeImg from './icon-youtube.svg';
import TwitterImg from './icon-twitter.svg';
import PinterestImg from './icon-pinterest.svg';
import InstagramImg from './icon-instagram.svg';
import { Paragraph } from "../../styles/Typography.style";

function Footer() {
  const socialMediaItems = [
    {
      img: FacebookImg,
      name: `Facebook`
    },
    {
      img: YoutubeImg,
      name: `Youtube`
    },
    {
      img: TwitterImg,
      name: `Twitter`
    },
    {
      img: PinterestImg,
      name: `Pinterest`
    },
    {
      img: InstagramImg,
      name: `Instagram`
    }
  ]
  const linkItems = ['About Us', 'Contact', 'Blog', 'Careers', 'Support', 'Privacy Policy'];

  return (
    <Container className="footer">
      <Logo white={true} />
      <List>
        {socialMediaItems.map((item, index) => {
          return (
            <a href='/' key={index}>
              <li>
                <img src={item.img} alt={item.name} />
              </li>
            </a>
          )
        })}
      </List>
      <List className="column">
        {linkItems.map((item, index) => {
          return (
            <a href='/' key={index}>
              <Li>{item}</Li>
            </a>
          )
        })}
      </List>
      <Button>Request Invite</Button>
      <Paragraph className="footer">Easybank. All Rights Reserved</Paragraph>
      <div>
        <Paragraph className="footer">Front-end Mentor Challenge</Paragraph>
        <Paragraph className="footer">Developed by <a href="https://github.com/paulobarone">Paulo Barone</a>.</Paragraph>
      </div>
    </Container>
  )
}

export default Footer;