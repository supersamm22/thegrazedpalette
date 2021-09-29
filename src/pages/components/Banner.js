import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Banner() {
  return (
    <div className="relative ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img
            src="http://pearlstudio.com.au/wp-content/uploads/slider3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="http://pearlstudio.com.au/wp-content/uploads/slider2.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
