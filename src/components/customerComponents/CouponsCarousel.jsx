import { useState } from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const CouponsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SampleNextArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: currentSlide === 4 ? "none" : "flex",
        right: "-1rem",
        zIndex: 10,
        height: "36px",
        width: "36px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: "2px solid #e5e7ebb3",
        backgroundColor: "rgba(255, 255, 255)",
        color: "#000",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        transition: "all 0.2s",
      }}
      onClick={onClick}
    >
      <FaChevronRight size={16} />
    </div>
  );

  const SamplePrevArrow = ({ className, style, onClick }) => (
    <div
      className={className}
      style={{
        ...style,
        display: currentSlide === 0 ? "none" : "flex",
        left: "-1rem",
        zIndex: 10,
        height: "36px",
        width: "36px",
        cursor: "pointer",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: "2px solid #e5e7ebb3",
        backgroundColor: "rgba(255, 255, 255)",
        color: "#000",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
        transition: "all 0.2s",
      }}
      onClick={onClick}
    >
      <FaChevronLeft size={16} />
    </div>
  );

  SampleNextArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  SamplePrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };
  const styles = `
  .slick-prev:hover,.slick-next:hover{
    border-color: #009f7f !important;
    background-color: #009f7f !important;
    color: #fff !important;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 0;
  }
`;

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
    dots: false,
    infinite: false,
    autoscroll: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
  };
  return (
    <Box className="border-t border-border-200 bg-[#fff] px-5 py-5 md:p-8 lg:px-6">
      <style>{styles}</style>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-3">
            <img src={image.src} alt={image.alt} style={imageStyle} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default CouponsCarousel;
