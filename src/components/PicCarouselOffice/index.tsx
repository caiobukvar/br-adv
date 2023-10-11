import Slider from "react-slick";
import main1 from "../../assets/images/official-pics/bradv/1.jpg";
import main2 from "../../assets/images/official-pics/bradv/2.jpg";
import main3 from "../../assets/images/official-pics/bradv/3.jpg";
import main4 from "../../assets/images/official-pics/bradv/4.jpg";
import main5 from "../../assets/images/official-pics/bradv/5.jpg";
import main6 from "../../assets/images/official-pics/bradv/6.jpg";
import main7 from "../../assets/images/official-pics/bradv/7.jpg";
import main8 from "../../assets/images/official-pics/bradv/b5.jpeg";
import Image from "next/image";
import styles from "./styles.module.css";

const images = [main8, main7, main6, main5, main4, main3, main2, main1];

export default function CarouselOffice() {
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
          alt={`${index}`}
          style={{ objectFit: "cover" }}
        />
      ))}
    </Slider>
  );
}
