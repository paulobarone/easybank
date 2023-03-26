import CurrencyImg from './image-currency.jpg';
import RestaurantImg from './image-restaurant.jpg';
import PlaceImg from './image-plane.jpg';
import ConfettiImg from './image-confetti.jpg';
import { Container } from '../../styles/Components.style';
import { H1, H2, Paragraph } from '../../styles/Typography.style';
import { Card, CardsContainer } from './LatestArticles.style';

function LatestArticles() {
  const articlesDb = [
    {
      img: CurrencyImg,
      author: `Claire Robinson`,
      title: `Receive money in any currency with no fees`,
      description: `The world is getting smaller and we’re becoming more mobile. So why should you be 
      forced to only receive money in a single …`
    },
    {
      img: RestaurantImg,
      author: `Wilson Hutton`,
      title: `Treat yourself without worrying about money`,
      description: `Our simple budgeting feature allows you to separate out your spending and set 
      realistic limits each month. That means you …`
    },
    {
      img: PlaceImg,
      author: `Wilson Hutton`,
      title: `Take your Easybank card wherever you go`,
      description: `We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
      while you’re abroad. We’ll even show you …`
    },
    {
      img: ConfettiImg,
      author: `Claire Robinson`,
      title: `Our invite-only Beta accounts are now live!`,
      description: `After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
      It’s easy to request an invite through the site ...`
    }
  ]

  return (
    <Container className='latestArticlesContainer'>
      <H1 className='latestArticlesTitle'>Latest Articles</H1>
      <CardsContainer>
        {articlesDb.map((item, index) => {
          return (
            <Card key={index}>
              <img src={item.img} alt={item.title} className='articleImg' />
              <div className="textGroup">
                <span className='authorName'>By {item.author}</span>
                <H2 className='titleArticle'>{item.title}</H2>
                <Paragraph className='descriptionArticle'>{item.description}</Paragraph>
              </div>
            </Card>
          )
        })}
      </CardsContainer>
    </Container>
  )
}

export default LatestArticles;