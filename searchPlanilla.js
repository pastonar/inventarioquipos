export function searchPlanilla()
{
   const $divplanillas = document.createElement("div");
   const $tblplanillas = document.createElement("div");
   $tblplanillas.id="tblplanillas";
   $tblplanillas.className="content";
   $divplanillas.appendChild($tblplanillas );
   const $styles = document.getElementById("dinamic-style");
    
   $divplanillas.id = "divplanilla";
   $styles.innerHTML = `
   body {font-family: Arial, Helvetica, sans-serif;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 80%; /* Full width */
  height: 90%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(255, 248, 248, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  width: auto;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
 
}

/* Add Animation */
@-webkit-keyframes animatetop {
  from {top:-300px; opacity:0} 
  to {top:0; opacity:1}
}

@keyframes animatetop {
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}

/* The Close Button */
.close {
  color: rgb(10, 0, 0);
  float: right;
  font-size: 30px;
  font-weight: bold;
  width: auto;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 2px rgb(211, 209, 209);
  transform: translateY(4px);
   `;
   $divplanillas.innerHTML=
   `
   <div class="content">
  
   <p>parametros de busqueda</p>
 </div>
   <div class="modal-body" style="text-align:center">
   <p> 
   <input type="radio" id="rangedata" name="param" value="30">
   <label for="txtDateFrom" >Desde: </label>
   <input type="date" name="" id="txtDateFrom"  size="10" disabled="true">
   <label for="txtDateTo"  >Hasta: </label>
   <input type="date" name="" id="txtDateTo"   size="10" disabled="true">
   </p>
   <p> 
   <input type="radio" id="idplanilla" name="param" value="30">
   <label  >id planilla: </label>
   <input type="number"  id="txtidplanilla"  size="10">
  
   
   </p>
   </div>
   <div class="content"   style="text-align:right">
    <button class="button" id = "btnCreatePlanilla">Aceptar</button>
    </div>
   
   
<!-- The Modal -->
<div id="wnewplanilla" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" id="closeA">&times;</span>
      <h4>Atencion</h4>
    </div>
    <div class="modal-body" style="text-align:center">
    
    <p> 
   
    <label for="txtDateFrom" >Desde: </label>
    <input type="date"  id="txtDateFrom"  size="10">
      <label for="txtDateTo"  >Hasta: </label>
      <input type="date"  id="txtDateTo"   size="10">
      </p>
    
    </div>
    <div class="modal-footer"   style="text-align:center">
       <button class="button" id = "btnCreatePlanilla">Aceptar</button>
    </div>
  </div>

</div>


<div id="tblplanillas"></div>
    `;
    var valDateFrom = new Date();
    var valDateTo = new Date();
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

    function createTable() {
      var data='[{"idUsuario":"1","idTag":"1","numId":"1","nomCompleto":"jose","tipoNumId":"1"},{"idUsuario":"2","idTag":"2","numId":"2","nomCompleto":"pedro","tipoNumId":"1"}]';
      let json = JSON.parse(data);
     
      const $table=document.createElement("table");
      generateTableHead($table, Object.keys(json[0]));
      generateTable($table, json);
      
      document.getElementById("tblplanillas").appendChild($table);
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
    
          function Validate()
          {
            if ((document.getElementById("idplanilla").checked  == false)
            &&(document.getElementById("rangedata").checked  == false))
            {
              alert("Seleccione el modo de busqueda ya sea por RANGO DE FECHA O No. PLANILLA A BUSCAR");
             
              return false; 
            }
            else
            if (document.getElementById("rangedata").checked  == true)
            {
              if ((document.getElementById("txtDateFrom").value==""
              || document.getElementById("txtDateFrom").value== null)
              )
              {
              alert("Seleccione  la FECHA DE ELABORACION  para crear la planilla");
              document.getElementById("txtDateFrom").focus()
              return false; 
            }
            else
            if ((document.getElementById("txtDateTo").value==""
              || document.getElementById("txtDateTo").value== null)
              )
              {
              alert("Seleccione  la FECHA DE ELABORACION  para crear la planilla");
              document.getElementById("txtDateTo").focus()
              return false; 
            }
           
            }
            if (document.getElementById("idplanilla").checked  == true)
            {
              if ((document.getElementById("txtidplanilla").value==""
              || document.getElementById("txtidplanilla").value== null)
              )
              {
              alert("Introduzca  el No. PLANILLA para realizar la busqueda");
              document.getElementById("txtidplanilla").focus()
              return false; 
            }
            }
              else return true;   
           }
          

    document.addEventListener('click' ,function(e) {
      switch(e.target.id) {
     
        case 'btnCreatePlanilla':
          if (Validate()==true)
          {
          if (document.getElementById("idplanilla").checked  == true)
          {
        console.log ("detallePlanilla?idplanilla="+txtidplanilla.value);
             
              getQuery("detallePlanilla?idplanilla="+txtidplanilla.value);
          }
          if (document.getElementById("rangedata").checked  == true)
          {
            
            console.log ("searchPlanillas?fecDateFrom="+txtDateFrom.value+"&fecDateTo="+txtDateTo.value);
             
              getQuery("searchPlanillas?fecDateFrom="+txtDateFrom.value+"&fecDateTo="+txtDateTo.value);
          }
        }
          break;
          case 'rangedata':
            console.log("range");
            document.getElementById("tblplanillas").innerHTML = "";
            document.getElementById("txtidplanilla").disabled=true;
            document.getElementById("txtDateFrom").disabled=false;
            document.getElementById("txtDateTo").disabled=false;
            txtDateTo.value=dateToString(valDateTo);
            txtDateFrom.value=dateToString(valDateFrom);
            console.log(dateToString(valDateTo))
        break;
        case 'idplanilla':
          document.getElementById("tblplanillas").innerHTML = "";
        document.getElementById("txtidplanilla").disabled=false;
          document.getElementById("txtDateFrom").disabled=true;
          document.getElementById("txtDateTo").disabled=true;
        break;
      }
    });

    window.addEventListener('hashchange', (event) => {
      console.log (window.location.hash);
      if (event.target.hash=="#/searchPlanilla")
      {
      txtDateTo.value=dateToString(valDateTo);
      txtDateFrom.value=dateToString(valDateFrom);
      }
    });
   

  
   
    window.addEventListener('load', (event) => {
     
      txtDateTo.value=dateToString(valDateTo);
        txtDateFrom.value=dateToString(valDateFrom);
        
  });

  
  
  document.addEventListener('change' ,function(e) {
      switch(e.target.id) {
        case 'txtDateFrom':
          if (txtDateFrom.value!= "")
        {
          valDateFrom = new Date(txtDateFrom.value);
          
          if (valDateFrom.valueOf() > valDateTo.valueOf())
          {
          valDateTo = new Date(txtDateFrom.value);
          txtDateTo.value = txtDateFrom.value;
          }
          }
          else
          valDateFrom = new Date(txtDateFrom.value);
          break;
        case 'txtDateTo':
          if (txtDateTo.value!= "")
          {
          valDateTo = new Date(txtDateTo.value);
          if (valDateFrom.valueOf() > valDateTo.valueOf())
           {
           valDateTo = new Date(txtDateFrom.value);
           txtDateTo.value = txtDateFrom.value;
           }
           }
           else
           valDateTo = new Date(txtDateTo.value);
          break;
     
      }
    });

   
    
    function dateToString(date)
    {
     var dayI = date.getDate();
     var monthI = date.getMonth()+1;
     var yearI = date.getFullYear();
     var dayS = dayI < 10? "0"+dayI:""+dayI;
     var monthS = monthI < 10? "0"+monthI:""+monthI;
    var d =yearI+"-"+monthS+"-"+dayS;
     return d ;
       } 
  
    function getDate()
    {
     dayI = valDateFrom.getDate();
     monthI = valDateFrom.getMonth()+1;
     yearI = valDateFrom.getFullYear();
     dayS = dayI < 10? "0"+dayI:""+dayI;
     monthS = monthI < 10? "0"+monthI:""+monthI;
     txtDateTo.value = yearI+"-"+monthS+"-"+dayS;
     txtDateFrom.value = yearI+"-"+monthS+"-"+dayS;
    } 
  
return $divplanillas;
} 