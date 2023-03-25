import Header from '../components/Header/Header';
import Info from '../components/Info/Info';
import Showcase from '../components/Showcase/Showcase';
import LatestArticles from '../components/LatestArticles/LatestArticles';
import Footer from '../components/Footer/Footer';

function Home () {
  return (
    <>
      <Header />
      <Showcase />
      <Info />
      <LatestArticles />
      <Footer />
    </>
  )
}

export default Home;