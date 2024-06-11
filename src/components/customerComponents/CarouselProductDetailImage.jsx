import { Swiper, SwiperSlide } from "swiper/react";
import propTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper-carousel.css";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function CarouselProductDetailImage({ imagesData }) {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} h-20 w-20"><img src="${imagesData[
        index
      ].toString()}" class="h-20 w-20"/></span>`;
    },
  };

  return (
    <Swiper
      rewind={true}
      navigation={true}
      pagination={pagination}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {imagesData?.slice(0, 4)?.map((item) => (
        <SwiperSlide key={item?.toString()}>
          <img src={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
CarouselProductDetailImage.propTypes = {
  imagesData: propTypes.array,
};
