import React, { useRef, useState } from "react";

import image from "../../image/Vector_left.png";

function Carrousel(props) {
  const carrouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex === props.person.pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(props.person.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="div_carrousel">
      <div
        className=" carrousel_left carrousel-button"
       
      >
        <img   onClick={handlePrevClick}  className = "fleche_left_carrousel" src = {image} />
      </div>

      <div className="carrousel" ref={carrouselRef}>
        {props.person.pictures.map((item, index) => (
          <img
            key={index}
            src={item}
            className="img_carrousel"
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
      </div>

      <div
        className="carrousel_right carrousel-button"
       
      >
         <img onClick={handleNextClick}  className = "fleche_right_carrousel" src = {image} />
      </div>
    </div>
  );
}

export default Carrousel;
