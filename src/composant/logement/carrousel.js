import React, { useRef, useState, useEffect } from "react";
import image from "../../image/Vector_left.png";

function Carrousel(props) {
  const carrouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    // Increment the picture counter
    const max = document.querySelector("#max_increment");
    const nb = document.querySelector("#nb_increment");
    const max_nb = parseInt(max.innerHTML);
    let nb1 = parseInt(nb.innerHTML);

    if (nb1 >= max_nb) {
      nb.innerHTML = "1";
    } else {
      nb1 += 1;
      nb.innerHTML = nb1.toString();
    }

    // Update the current index
    setCurrentIndex((prevIndex) =>
      prevIndex === props.person.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevClick = () => {
    // Decrement the picture counter
    const max = document.querySelector("#max_increment");
    const nb = document.querySelector("#nb_increment");
    const max_nb = parseInt(max.innerHTML);
    let nb1 = parseInt(nb.innerHTML);

    if (nb1 === 1) {
      nb.innerHTML = max_nb.toString();
    } else {
      nb1 -= 1;
      nb.innerHTML = nb1.toString();
    }

    // Update the current index
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? props.person.pictures.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    // Access the carrousel element us8%ing the ref
    
    const element = document.getElementById("carrousel");

    // Manipulate the element as needed
    // For example, change the background color
    
    if(props.person.pictures.length == 1 ){

    element.style.left = "2%";

    }

  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div id = "div_carrousel" className="div_carrousel">
      {props.person.pictures.length > 1 && (
        <div id="carrousel_left" className="carrousel_left carrousel-button">
          <img
            onClick={handlePrevClick}
            className="fleche_left_carrousel"
            src={image}
          />
        </div>
      )}

      <div id="carrousel" className="carrousel" ref={carrouselRef}>
        <div className="carrousel">
          <div className="nb_picture">
            <div id="nb_increment">1</div>
            <div>/</div>{" "}
            <div id="max_increment">{props.person.pictures.length}</div>
          </div>

          {props.person.pictures.map((item, index) => (
            <img
              key={index}
              src={item}
              className="img_carrousel"
              style={{ display: index === currentIndex ? "block" : "none" }}
            />
          ))}
        </div>
      </div>

      {props.person.pictures.length > 1 && (
        <div id="carrousel_right" className="carrousel_right carrousel-button">
          <img
            onClick={handleNextClick}
            className="fleche_right_carrousel"
            src={image}
          />
        </div>
      )}
    </div>
  );
}

export default Carrousel;
