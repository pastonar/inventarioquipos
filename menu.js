export function menu()
{
   const $nav = document.createElement("nav");
   //const $styles ;
   //const $styles = document.getElementById("dinamic-style");
   $nav.innerHTML= `
   <div class="navbar">
  <a href="#/home">Home</a>
  <div class="subnav">
    <button class="subnavbtn">Planillas <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#/createPlanilla">Crear planilla</a>
      <a href="#/searchPlanilla">Buscar planilla</a>
      <a href="#/deletePlanilla">Borrar planilla</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Personas <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
        <a href="#/createPersona">Agregar persona</a>
        <a href="#/searchPersona">Buscar persona</a>
        <a href="#/deletePersona">Borrar persona</a>
    </div>
  </div> 
  <div class="subnav">
    <button class="subnavbtn">Tags <i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
      <a href="#/createTag">Agregar tag</a>
        <a href="#/searchTag">Buscar tag</a>
        <a href="#/deleteTag">Borrar tag</a>
    </div>
    <div class="subnav">
    <button class="subnavbtn">Equipos<i class="fa fa-caret-down"></i></button>
    <div class="subnav-content">
        <a href="#/createEquipos">Agregar equipos</a>
        <a href="#/searchEqupos">Buscar equipos</a>
        <a href="#/deleteEquipos">Borrar equipos</a>
    </div>
` 
/*
$styles.innerHTML = `
body {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
}

.navbar {
  overflow: hidden;
  background-color: #333; 
}

.navbar a {
  float: left;
  font-size: 16px;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
}

.subnav {
  float: left;
  overflow: hidden;
}

.subnav .subnavbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  font-weight: bold;
}

.navbar a:hover, .subnav:hover .subnavbtn {
  background-color: rgb(38, 0, 255);
}

.subnav-content {
  display: none;
  position: absolute;
  left: 0;
  background-color: rgb(38, 0, 255);
  width: 100%;
  z-index: 1;
  
}

.subnav-content a {
  float: left;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.subnav-content a:hover {
  background-color: #eee;
  color: black;
}

.subnav:hover .subnav-content {
  display: block;
}
 
`
*/
/* 
var tabcontent ;
tabcontent = document.getElementsByClassName("optionMenu");


document.addEventListener('click' ,function(e) {
  console.log(e.target.id); 
  //console.log(tabcontent.length);
  var i;
  
  for (i = 0; i < tabcontent.length; i++) 
     tabcontent[i].style.background = "#111";
     e.target.style.background = "#04aa04";
  
});
*/

// <a  href="#/planillas">Planillas</a> <span> | </span><a href="#/usuarios">Usuarios</a><span> | </span><a href="#/tags">Tags</a>';
return $nav;
}