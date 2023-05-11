import React, { useRef, useState } from "react";

import image from "../../image/Vector_left.png";

function Carrousel(props) {
  const carrouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNextClick() {

    const max = document.querySelector("#max_increment");


    var nb = document.querySelector("#nb_increment");
    
    var max_nb = parseInt(max.innerHTML);
    var nb1 = parseInt(nb.innerHTML);

    /*incremente du compteur d'image*/
    
    if(nb1 >= max_nb){

      nb.innerHTML = "1";


  }else{

    let nbincrement = nb1+1;

    let chaineCaracteres = nbincrement.toString();

    nb.innerHTML = chaineCaracteres;

  }

    if (currentIndex === props.person.pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }


  }

  function handlePrevClick() {

    const max = document.querySelector("#max_increment");


    var nb = document.querySelector("#nb_increment");
    
    var max_nb = parseInt(max.innerHTML);
    var nb1 = parseInt(nb.innerHTML);
  
    /*incremente du compteur d'image*/

    if(nb1 == 1){

      nb.innerHTML = max_nb.toString();


  }else{

    let nbincrement = nb1-1;

    let chaineCaracteres = nbincrement.toString();

    nb.innerHTML = chaineCaracteres;

  }


    if (currentIndex === 0) {
      setCurrentIndex(props.person.pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <div className="div_carrousel">
      <div className=" carrousel_left carrousel-button">
        <img onClick={() => handlePrevClick()} className="fleche_left_carrousel" src={image} />
      </div>

      <div className="carrousel" ref={carrouselRef}>
        <div className="carrousel">
          <div className="nb_picture">
            <div id = "nb_increment" >1</div><div>/</div> <div id = "max_increment"> {props.person.pictures.length} </div>
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

      <div className="carrousel_right carrousel-button">
        <img onClick={() => handleNextClick()} className="fleche_right_carrousel" src={image} />
      </div>
    </div>
  );
}

export default Carrousel;
