export function Planillas()
{
   const $divplanillas = document.createElement("div");
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
   <button class="button"  id="btnOpenNewPlanilla" >Nueva</button>
   <button class="button"  id="btnOpenSearchPlanilla" >Buscar</button>

<!-- The Modal -->
<div id="wnewplanilla" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" id="closeA">&times;</span>
      <h4>Nueva planilla</h4>
    </div>
    <div class="modal-body" style="text-align:center">
      <p><label for="txtDateFrom" >Elaboracion: </label>
        <input type="date" id="txtDateCreate"  size="10">
      </p>
    
    </div>
    <div class="modal-footer"   style="text-align:center">
       <button class="button" id = "btnCreatePlanilla">Aceptar</button>
    </div>
  </div>

</div>

<div id="wsearchplanilla" class="modal">
  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span class="close" id="closeB">&times;</span>
      <h4>Buscar planilla</h4>
    </div>
    <div class="modal-body" style="text-align:center">
      <p>
        <label for="txtDateFrom" >Desde: </label>
        <input type="date" name="" id="txtDateFrom"  size="10">
        <label for="txtDateTo"  >Hasta: </label>
        <input type="date" name="" id="txtDateTo"   size="10">
        </p>
    
    </div>
    <div class="modal-footer"   style="text-align:right">
       <button class="button" id ="btnSearchPlanilla">Aceptar</button>
    </div>
  </div>

</div>
<div id="tblplanillas"></div>
    `;
   
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
     
      Http.open("GET", getQuery);
            Http.send();
      
      
       Http.onreadystatechange = (e) => {
            if (Http.readyState == 4 && Http.status == 200) {
              console.log(Http.status );
              console.log(Http.responseText);
              let json = JSON.parse(Http.responseText);
              const $table=document.createElement("table");
              generateTableHead(table, Object.keys(json[0]));
              generateTable(table, json);
              document.getElementById("tblplanillas").innerHTML = none;
              document.getElementById("tblplanillas").appendChild(table);
              //document.getElementById("tblplanillas").innerHTML = Http.responseText;
              }
            };
      
    //  Http.onreadystatechange = function() {
    //    if (Http.readyState == 4 && Http.status == 200) {
    //      document.getElementById("divtable").innerHTML =
    //      Http.responseText;
    //      };
    // };
     };
    
    
    document.addEventListener('click' ,function(e) {
      switch(e.target.id) {
        case 'btnOpenNewPlanilla':
          wnewplanilla.style.display = "block"; // Or whatever
          txtDateCreate.value=dateToString(valDateCreate);
          break;
        case 'btnOpenSearchPlanilla':
          wsearchplanilla.style.display = "block";
          txtDateTo.value=dateToString(valDateTo);
          txtDateFrom.value=dateToString(valDateFrom);
          break;
        case 'closeA':
            wnewplanilla.style.display = "none";
          break;
        case 'closeB':
              wsearchplanilla.style.display = "none";
          break;
        case 'btnCreatePlanilla':
              console.log ("crear planillas");
              //document.getElementById("tblplanillas").innerHTML = none;
              createTable();
              //getQuery("queryplanillas?fecCreacion="+txtDateCreate.value);
          break;
          case 'btnSearchPlanilla':
            getQuery("queryplanillas?fecinicio="+txtDateFrom.value+"&fecfinal="+txtDateTo.value);
            console.log ("consultar planillas");
        break;  
      }
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
          break;
     
      }

      

    });

    var valDateTo = new Date();
    var valDateFrom = new Date();
    var valDateCreate = new Date();
    
   
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
  
    /*
    document.addEventListener('click' ,(e) =>{
      if (e.target.matches("btnCreatePlanilla"))
    console.log ("consultar planillas");
    });
    */
   

return $divplanillas;
} 