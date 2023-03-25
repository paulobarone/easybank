import Header from '../components/Header/Header';
import Info from '../components/Info/Info';
import Showcase from '../components/Showcase/Showcase';
import LatestArticles from '../components/LatestArticles/LatestArticles';

function Home () {
  return (
    <>
      <Header />
      <Showcase />
      <Info />
      <LatestArticles />
    </>
  )
}

export default Home;