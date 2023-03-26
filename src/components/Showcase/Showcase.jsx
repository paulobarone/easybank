import ShowcaseImg from './image-mockups.png';
import { Bg, Img } from './Showcase.style';
import { H1, Paragraph, TextGroup } from '../../styles/Typography.style';
import { Button, Container } from '../../styles/Components.style';

function Showcase() {
  return (
    <Container className='showcaseContainer'>
      <Bg>
        <Img src={ShowcaseImg} alt="Smartphones with EasyBank App" />
      </Bg>
      <TextGroup className='showcaseTextGroup'>
        <H1 className='showcaseTitle'>Next generation digital banking</H1>
        <Paragraph className='showcaseDescription'>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Paragraph>
        <Button className='showcaseButton'>Request Invite</Button>
      </TextGroup>
    </Container>
  )
}

export default Showcase;