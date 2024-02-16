import Slider from "react-slick";
import main1 from "../../assets/images/official-pics/bradv/3.jpg";
import main2 from "../../assets/images/official-pics/bradv/4.jpg";
import main3 from "../../assets/images/official-pics/bradv/5.jpg";
import main4 from "../../assets/images/official-pics/bradv/6.jpg";
import Image from "next/image";
import styles from "./styles.module.css";

const images = [main1, main2, main3, main4];

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    arrows: false,
    fade: true,
  };

  return (
    <Slider {...settings} className={styles.carousel}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`${image}`}
          width={500}
          height={500}
        />
      ))}
    </Slider>
  );
}
