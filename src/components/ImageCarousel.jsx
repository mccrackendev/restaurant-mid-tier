import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import image1 from "../assests/brooke-lark-HlNcigvUi4Q-unsplash.jpg";
import image2 from "../assests/jimmy-dean-Yn0l7uwBrpw-unsplash.jpg";
import image3 from "../assests/lily-banse--YHSwy6uqvk-unsplash.jpg";

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay="true"
      infiniteLoop="true"
      showArrows="true"
      interval={5000}
    >
      <div>
        <img src={image1} alt="food"></img>
      </div>
      <div>
        <img src={image2} alt="food" loading="lazy"></img>
      </div>
      <div>
        <img src={image3} alt="food" loading="lazy"></img>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
