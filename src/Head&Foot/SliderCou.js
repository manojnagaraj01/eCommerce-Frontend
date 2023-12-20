import image1 from "../Image/2_corousel.png";
import image2 from "../Image/Apple Ipad.png";
import image3 from "../Image/Apple iPhone 11.png";
import image4 from "../Image/Laptop/Dell/Dell1.png";
import Mobile from "../Image/Mobile/Samsung/samsung galaxy2.png";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SliderCou.css";

const SliderCou = () => {
  const data = [
    {
      id: 1,
      title: "Offer Dhamaka",
      cuisine: "0% EMI",
      days: "jan 01 - Jan 10",
      imageUrl: image1,
    },
    {
      id: 2,
      title: "What’s new ?",
      cuisine:
        "We're thrilled to introduce new features ",
      days: "jan 01 - Jan 10",

      imageUrl: image2,
    },
    {
      id: 3,
      title: "What’s new ?",
      cuisine:
        "Discover what's in store for you.",
      days: "jan 01 - Jan 10",
      imageUrl: image3,
    },
    {
      id: 4,
      title: "What’s new ?",
      cuisine:
        "enhancements to elevate your shopping experience.",
      days: "jan 01 - Jan 10",
      imageUrl: image4,
    },
    {
      id: 4,
      title: "What’s new ?",
      cuisine:
        "Discover what's in store for you.",
      days: "jan 01 - Jan 10",
      imageUrl: Mobile,
    },
  ];

  const [rotateDots, setRotateDots] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Adjust the speed as needed
    autoplay: true,
    autoplaySpeed: 3000, // Set the autoplay speed to 5 seconds
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    beforeChange: (current, next) => {
      // Check if the next slide will be the first one
      if (next === 0) {
        setRotateDots(false);
      }
    },
    afterChange: (current) => {
      // Check if the current slide is the first one after completing one round
      if (current === 3) {
        setRotateDots(true);
      }
    },
  };

  return (
    <div className="slider-div">
      <div className={`slider-container ${rotateDots ? "rotate-dots" : ""}`}>
        <Slider {...settings}>
          {data.map((slide) => (
            <div key={slide.id}>
              <div className="slider-parent">
                <div className="slider-content">
                  <h1>{slide.title}</h1>
                  <h3>{slide.cuisine}</h3>
                  <h3>{slide.days}</h3>
                </div>
                <div className="slider-image">
                  <img src={slide.imageUrl} alt={slide.title} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderCou;
