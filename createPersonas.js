export function createPersonas()

   {
      const $divpersonas = document.createElement("div");
      const $styles = document.getElementById("dinamic-style");
      $divpersonas.id = "divpersonas";
      $styles.innerHTML = `
      body {
        background: white !important;
      }
     
      .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 90%; /* Full width */
        height: auto; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(255, 248, 248, 0.4); /* Black w/ opacity */
      }
      
      .modal-content {
        position: relative;
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        border: 1px solid #888;
        width: auto;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
       
      }
      .modal-header {
        padding: 2px 16px;
        background-color: #969c96;
        color: white;
        height: auto;
        width: auto;
      }
      
      .modal-body {
        padding: 2px 16px;
        width: auto;
      }
      
      .modal-footer {
        padding: 8px 16px;
        background-color: #969c96;
        color: white;
        width: auto;
        height: 40%;
      }
      
      .button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 12px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #4CAF50;
        border: none;
        border-radius: 15px;
        box-shadow: 0 5px #999;
        font-weight: bold;
        height: 30px;
      }
     
      `;
      $divpersonas.innerHTML=
      `
      
      
      
      <div class="modal-content">
       <div class="modal-header" style="text-align:center">
      
       </div>
      <div class="modal-body" style="text-align:left">
      <p>
            <label for="estado">Estado</label><br>
            <select  id="estado">
            <option value="0" label="Suspendido">Volvo</option>
            <option value="1" label="Activo">Saab</option>
            
          </select>
          <p>
    
                <label for="tipoId">Tipo identificacion.</label>
                <br>
                  <select  id="tipoId">
                  <option value="0" label="Cedula ciudadnia">Volvo</option>
                  <option value="1" label="Cedula extranjeria">Saab</option>
                  <option value="2" label="Tarjeta identidad">Opel</option>
                  <option value="3" label="Otro">Audi</option>
                </select>
                <p>
                <label for="numId">No.identificacion</label><br>
                <input type="text" id="numId" size="20" />
                <p>
                <label for="nomCompleto">Nombre completo</label><br>
                <input type="text" id="nomCompleto" size="40" maxlength="40">
                <p>
                <label for="idTag">No. tag</label>
                <br>
                <input type="text" id="idTag" size="24" pattern="[0-9]{10}" maxlength="16">  </p>
                    </p>
                    <div class="modal-footer"   style="text-align:right">
                      <button id="btncreatepersona" class="button" >Aceptar</button>
                   </div>
    

    
    </div>
    </div>
    <div id = "tblplanillas" class="content"></div>
       `;
      
       function Validate(e)
       {
        if (document.getElementById("numId").value==""
            || document.getElementById("numId").value== null)
            {
            alert("complete el campo identificacion");
            document.getElementById("numId").focus();
            return false; 
          }
          else
          if (document.getElementById("nomCompleto").value==""
            || document.getElementById("nomCompleto").value== null)
            {
            alert("complete el campo NOMBRE COMPLETO");
            document.getElementById("nomCompleto").focus();
            return false; 
          }
          else
          if (document.getElementById("idTag").value==""
          || document.getElementById("idTag").value== null)
          {
          alert("complete el campo TAG");
          document.getElementById("idTag").focus();
          return false;    
        }
         else return true;   
        }
       document.addEventListener('click' ,function(e) {
        
        switch(e.target.id) {
           case 'btncreatepersona':
            
            if (Validate(e)==true)
           {
           let stm ="createPersona?estado="+estado.value;
            stm=stm+"&tipoNumId="+tipoId.value+"&numId="+numId.value;
            stm=stm+"&nomCompleto="+nomCompleto.value+"&idTag="+idTag.value;
            console.log (stm);
            getQuery(stm);
            console.log (tipoId.value);
            console.log (tipoId.value);
             break;
            }
         }
       });

    /*    document.addEventListener('change' ,function(e) {
        switch(e.target.id) {
          case 'btncreatepersona':
           let stm ="createPersona?tipoNumId="+tipoId.value+"&numId="+numId.value;
           stm=stm+"&nomCompleto="+nomCompleto.value+"&idTag="+idTag.value;
           console.log (stm);
           getQuery(stm);
          
            break;
         
        }
      }); */

      function generateTableHead(table, data) {
        let thead = table.createTHead();
        let row = thead.insertRow();
        for (let key of data) {
          let th = document.createElement("th");
          let text = document.createTextNode(key);
          th.appendChild(text);
          row.appendChild(th);
        }
      }
      
      function generateTable(table, data) {
        for (let element of data) {
          let row = table.insertRow();
          for (let key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
          }
        }
      }
      
      
      function getQuery(query) {
     
        var Http = new XMLHttpRequest();
       
        Http.open("GET", query);
        Http.send();
        Http.onreadystatechange = (e) => {
              if (Http.readyState == 4 && Http.status == 200) {
                
                console.log(Http.responseText);
                document.getElementById("tblplanillas").innerHTML = "";
                let json = JSON.parse(Http.responseText);
                const $table=document.createElement("table");
                generateTableHead($table, Object.keys(json[0]));
                generateTable($table, json);
                document.getElementById("tblplanillas").appendChild($table);
                }
              };
        
            };
       
            var text = "";
            var car="";
               document.addEventListener('keypress' ,function(e) {
                if (e.target.id=='numId')
                {
                  text = text+e.key;
                  car = e.key;
                  //console.log("keyCode "+e.key);
                  console.log("textA "+text);
                  console.log("chcode "+e.key.charCodeAt());
                  if (e.key.charCodeAt() <48 || e.key.charCodeAt() > 57)
                  { 
                  e.target.value="";
                   var subtext= "";
                  subtext=text.replace(e.key,"");
                  text=subtext;
                  console.log("textD "+text); 
                  e.target.value=text;
                  } 
                }
             
              } );
   
   return $divpersonas;
}