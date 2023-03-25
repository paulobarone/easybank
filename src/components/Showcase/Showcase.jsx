import { Bg, Img } from './Showcase.style';
import ShowcaseImg from './image-mockups.png';
import { H1, Paragraph, TextGroup } from '../../styles/Typography.style';
import { Button, Container } from '../../styles/Components.style';

function Showcase() {
  return (
    <>
      <Bg>
        <Img src={ShowcaseImg} alt="Smartphones with Easybank App" />
      </Bg>
      <Container className='showcase'>
        <TextGroup>
          <H1>Next generation digital banking</H1>
          <Paragraph>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</Paragraph>
          <Button>Request Invite</Button>
        </TextGroup>
      </Container>
    </>
  )
}

export default Showcase;