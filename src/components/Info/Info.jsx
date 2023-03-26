import { Container } from '../../styles/Components.style';
import { Paragraph, TextGroup, H1, H2 } from '../../styles/Typography.style';
import OnlineBankingImg from './icon-online.svg';
import SimpleBudgetingImg from './icon-budgeting.svg';
import FastOnboardingImg from './icon-onboarding.svg';
import OpenApiImg from './icon-api.svg';
import { InfoItems } from './Info.style';

function Info() {
  const infoDb = [
    {
      img: OnlineBankingImg,
      title: `Online Banking`,
      description: `Our modern web and mobile applications allow you to keep track of your finances 
      wherever you are in the world.`
    },
    {
      img: SimpleBudgetingImg,
      title: `Simple Budgeting`,
      description: `See exactly where your money goes each month. Receive notifications when you’re 
      close to hitting your limits.`
    },
    {
      img: FastOnboardingImg,
      title: `Fast Onboarding`,
      description: `We don’t do branches. Open your account in minutes online and start taking control 
      of your finances right away.`
    },
    {
      img: OpenApiImg,
      title: `Open API`,
      description: `Manage your savings, investments, pension, and much more from one account. Tracking 
      your money has never been easier.`
    }
  ]

  return (
    <Container className='infoContainer'>
      <TextGroup className='infoTextGroup'>
        <H1>Why choose Easybank?</H1>
        <Paragraph>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</Paragraph>
      </TextGroup>
      <InfoItems>
        {infoDb.map((item, index) => {
          return (
            <TextGroup className='infoItemTextGroup' key={index}>
              <img src={item.img} alt={item.title} />
              <H2>{item.title}</H2>
              <Paragraph>{item.description}</Paragraph>
            </TextGroup>
          )
        })}
      </InfoItems>
    </Container>
  )
}

export default Info;