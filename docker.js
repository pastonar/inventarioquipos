
import { menu } from "/menu.js";
import { createPlanilla } from "/createPlanilla.js";
import { searchPlanilla } from "/searchPlanilla.js";
import { deletePlanilla } from "/deletePlanilla.js";


import { header } from "/header.js";
import { Title } from "/Title.js";
import { contenido } from "/contenido.js";
import { createPersonas } from "/createPersonas.js";
import {searchPersonas} from "/searchPersonas.js";
import {deletePersonas} from "/deletePersonas.js";
import { searchTags } from "/searchTags.js";
import { createTag } from "/createTag.js";
import { createEquipos } from "/createEquipos.js";

export function docker() {
       
    const $root = document.getElementById("root");
    // const $content = document.createElement("div");
    // $content.id = "content";
    const $content = contenido();
    const $t = document.createElement("h1");
   
     $root.innerHTML =null;
     $root.appendChild(header());  
     $root.appendChild(contenido());
   //console.log (window.location.hash);
      switch(window.location.hash) {
    
    case "#/home":
      $t.innerHTML ="Control de asistencia por RFID";
      document.getElementById("contenido").appendChild($t);
       document.getElementById("contenido").appendChild(Title());
      break;
    case "#/createPlanilla":
      $t.innerHTML ="Crear nueva planilla";
      document.getElementById("contenido").appendChild($t); 
    document.getElementById("contenido").appendChild(createPlanilla());
          break;
          case "#/searchPlanilla":
            $t.innerHTML ="Buscar planilla";
            document.getElementById("contenido").appendChild($t); 
          document.getElementById("contenido").appendChild(searchPlanilla()); 
          break;    
          case "#/deletePlanilla":
            $t.innerHTML ="Borrar planilla";
            document.getElementById("contenido").appendChild($t); 
          document.getElementById("contenido").appendChild(deletePlanilla()); 
          break;    
          case "#/usuarios":
      $t.innerHTML ="los usuarios";
      document.getElementById("contenido").appendChild($t);
      break;
      case "#/createPersona":
      $t.innerHTML ="Crear nuevo usuario";
      document.getElementById("contenido").appendChild($t);
      document.getElementById("contenido").appendChild(createPersonas());
      break;
      case "#/searchPersona":
        $t.innerHTML ="Buscar usuario";
        document.getElementById("contenido").appendChild($t);
        document.getElementById("contenido").appendChild(searchPersonas());
        break;
        case "#/deletePersona":
          $t.innerHTML ="Borrar usuario";
          document.getElementById("contenido").appendChild($t);
          document.getElementById("contenido").appendChild(deletePersonas());
          break;
          case "#/searchTag":
            $t.innerHTML ="Buscar Tag";
            document.getElementById("contenido").appendChild($t);
           document.getElementById("contenido").appendChild(searchTags());
            break;
            case "#/createTag":
              $t.innerHTML ="Crear Tag";
              document.getElementById("contenido").appendChild($t);
             document.getElementById("contenido").appendChild(createTag());
              break;      
              case "#/createEquipos":
                $t.innerHTML ="Crear nuevo equipo";
                document.getElementById("contenido").appendChild($t);
                document.getElementById("contenido").appendChild(createEquipos());
                break;
            } 
 

}
