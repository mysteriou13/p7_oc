import React from 'react';
import image from "../../image/Vector.png";

/*function affichage/cachage des element au click*/

function display(id1,id2,id3){
var div = document.querySelector(id1);

var div1 = document.querySelector(id2);

var div2 = document.querySelector(id3);



if(div.style.display  == "block"){

  div.style.display = "none";

  div2.style.transform = 'rotate(180deg)';

}else{



  div.style.display = "block";


  div2.style.transform = 'rotate(0deg)';

}


}

function Description(props) {
 
  var liste = props.person.equipments;

  

  return (
    <div className="composant_description" id = "composant_description">
      <div id = "div_description" className="div_description">
      <div className='barre_description' onClick={() => display("#text_description","#div_description", "#fleche")}>

          <div className = "el_barre" >description</div>
          <div> <img className = "el_barre" id = "fleche" src={image} alt="fleche" /> </div>
        </div>
        <div id = "text_description" className='text_description'>
          {props.person.description}
        </div>
      </div>


      <div  id = "div_description1" className="div_description">
        <div className='barre_description' onClick={() => display("#text_description1","#div_description1", "#fleche1")}>
          <div className ="el_barre">equipement </div>
          <div> <img  className = "el_barre" id = "fleche1" src={image} alt="fleche" /> </div>
        </div>
        <div id = "text_description1" className='text_description'>
          {liste.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Description;
