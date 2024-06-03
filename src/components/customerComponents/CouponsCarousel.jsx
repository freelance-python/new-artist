import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CouponsCarousel = () => {
  const images = [
    {
      alt: "Slide 1",
      src: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/902/offer-5.png",
    },
    {
      alt: "Slide 2",
      src: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/903/offer-4.png",
    },
    {
      alt: "Slide 3",
      src: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/904/offer-3.png",
    },
    {
      alt: "Slide 4",
      src: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/905/offer-2.png",
    },
    {
      alt: "Slide 5",
      src: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/906/offer-1.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autpScroll: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    // objectFit: "cover",
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} style={imageStyle} />
        </div>
      ))}
    </Slider>
  );
};

export default CouponsCarousel;
