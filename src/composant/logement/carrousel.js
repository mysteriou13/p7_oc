import React, { useRef, useState } from "react";

function Carrousel(props) {
  const carrouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <button className="carrousel-button" onClick={handlePrevClick} disabled={currentIndex === 0}>
        Image précédente
      </button>
      <button className="carrousel-button" onClick={handleNextClick} disabled={currentIndex === props.person.pictures.length - 1}>
        Image suivante
      </button>

      <div className="carrousel" ref={carrouselRef}>
        {props.person.pictures.map((item, index) => (
          <img key={index} src={item} style={{ display: index === currentIndex ? "block" : "none" }} />
        ))}
      </div>
    </div>
  );
}



export default Carrousel;
