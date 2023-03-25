import ShowcaseImg from './image-mockups.png';
import { Bg, Img, ImgContainer } from './Showcase.style';
import { H1, Paragraph, TextGroup } from '../../styles/Typography.style';
import { Button, Container } from '../../styles/Components.style';

function Showcase() {
  return (
    <>
      <Bg />
      <ImgContainer>
        <Img src={ShowcaseImg} alt="Showcase Image" />
      </ImgContainer>
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