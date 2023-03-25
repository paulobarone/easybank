import { Bg, Img } from './Showcase.style';
import ShowcaseImg from './image-mockups.png';

function Showcase() {
  return (
    <>
      <Bg>
        <Img src={ShowcaseImg} alt="" />
      </Bg>
    </>
  )
}

export default Showcase;