import React from "react";

function Title(props) {

  return (
  
  <div className = "main_div_logement">

  <div className = "div_logement">

<div className = "title_logement_page">

  {props.person.title}

</div>


<div className = "sous_title_logement_page">

  {props.person.location}

</div>


<div className = "div_tag">

{props.person.tags.map((item, index) => (

<div className = "div_text_tag">

<p className = "text_tag">

{item}

</p>

</div>


))}

</div>



</div>

<div> 

<div className = "div_host">    

<div className = "name_host">{props.person.host.name} </div> 


<div>
<img  className = "img_host" src = {props.person.host.picture}/>
</div>

</div>

<div>

etoile
</div>


</div>

</div>

)

}

export default Title;
