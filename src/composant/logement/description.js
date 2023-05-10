import React from 'react';
import image from "../../image/Vector.png";

function Description(props) {
 
  var liste = props.person.equipments;

  const handleClick = () => {
    alert("Barre description clicked")
  }

  return (
    <div className="composant_description">
      <div className="div_description">
        <div className='barre_description' >
          <div>description</div>
          <div> <img src={image} alt="fleche" /> </div>
        </div>
        <div className='text_description'>
          {props.person.description}
        </div>
      </div>
      <div className="div_description">
        <div className='barre_description'>
          <div>equipement </div>
          <div> <img src={image} alt="fleche" /> </div>
        </div>
        <div className='text_description'>
          {liste.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
