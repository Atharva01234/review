import React, { useState } from "react";
import "./clients-carouesl.css";

const ClientsCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const speed = 40000;
  const images = [
    require("../../../assets/accenture-icon.png"),
    require("../../../assets/deloitte.png"),
    require("../../../assets/honeywell.png"),
    require("../../../assets/microsoft-icon.png"),
    require("../../../assets/hanwah-icon.png"),
    require("../../../assets/sony-icon.png"),
    require("../../../assets/mckinseyandcompany-icon.png"),
    require("../../../assets/larsenandtoubro-icon.png"),
    require("../../../assets/schulmburger-icon.png"),
  ];

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="clients-carousel-root">
      <h3>Our Clients</h3>
      <div
        className="inner"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="wrapper">
          <section
            style={{
              ["--speed" as any]: `${speed}ms`,
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {images.map((image, index) => (
              <div className="image-container" key={Math.random()}>
                <img src={image} alt="" className="image" />
              </div>
            ))}
          </section>
          <section
            style={{
              ["--speed" as any]: `${speed}ms`,
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {images.map((image, index) => (
              <div className="image-container" key={Math.random()}>
                <img src={image} alt="" className="image" />
              </div>
            ))}
          </section>
          <section
            style={{
              ["--speed" as any]: `${speed}ms`,
              animationPlayState: isHovered ? "paused" : "running",
            }}
          >
            {images.map((image, index) => (
              <div className="image-container" key={Math.random()}>
                <img src={image} alt="" className="image" />
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClientsCarousel;
