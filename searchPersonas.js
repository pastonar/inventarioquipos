export function searchPersonas()
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
   <div class="content" style="text-align:center">
  Parametros de parametros
   </div>
   <div class="modal-body" style="text-align:center">
   <p>
   <label for="noId">No.identificacion</label><br>
   <input type="number" id="txtnumId" size="20" />
   <input type="checkbox" id="comodin" value="0"/>
<label > (*)</label>
   <p>
   </div>
   <div class="content""   style="text-align:right">
    <button class="button" id = "btnCreatePlanilla">Aceptar</button>
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
     
      Http.open("GET", query);
            Http.send();
           
            
        Http.onreadystatechange = (e) => {
            if (Http.readyState == 4 && Http.status == 200) {
            
              console.log(Http.responseText);
               let json = JSON.parse(Http.responseText);
              document.getElementById("tblplanillas").innerHTML = "";
              const $table=document.createElement("table");
              generateTableHead($table, Object.keys(json[0]));
              generateTable($table, json);
              document.getElementById("tblplanillas").appendChild($table);
              //document.getElementById("tblplanillas").innerHTML = Http.responseText;
              }
            };
      
          };
    
          function isNumberKey(evt) {
            var charCode = (evt.which) ? evt.which : evt.keyCode
            
             return charCode > 31 && (charCode < 48 || charCode > 57)
            
          } 
         
          function onlyNumberKey(evt) {
              
            // Only ASCII character in that range allowed
            var ASCIICode = (evt.which) ? evt.which : evt.keyCode
            if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
                return false;
            return true;
        }
        var text = "";
        var car="";
           document.addEventListener('keypress' ,function(e) {
            if (e.target.id=='txtnumId')
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

    
          function Validate()
          {
           if ((document.getElementById("txtnumId").value==""
               || document.getElementById("txtnumId").value== null)
               && (document.getElementById("comodin").value==0))
               {
               alert("Introduzca  el No. identificacion y/o COMODIN (*)"+document.getElementById("comodin").value);
             
               return false; 
             }
              else return true;   
           }
    
    
          document.addEventListener('click' ,function(e) {
      switch(e.target.id) {
        case 'btnOpenNewPlanilla':
          wnewplanilla.style.display = "block"; // Or whatever
          txtDateCreate.value=dateToString(valDateCreate);
          break;
        case 'closeA':
            wnewplanilla.style.display = "none";
          break;
        case 'btnCreatePlanilla':
          if (Validate(e)==true)
          {
        console.log ("crear planillas");
              document.getElementById("tblplanillas").innerHTML = "";
              //if (txtnumId.value=="") txtnumId.value="%";
              console.log("queryPersonas?numId="+txtnumId.value+"&comodin="+comodin.value);
              getQuery("queryPersonas?numId="+txtnumId.value+"&comodin="+comodin.value);
            }
              break;
          case 'comodin':
            if (e.target.checked == true){
              e.target.value="1";
              }
              else
              e.target.value="0";
              console.log(e.target.value);
          break;
         
      }
    });

    document.addEventListener('load' ,function(e) {
     
     console.log (e.target);
      switch(e.target.id) {
        case 'txtDateCreate':
          
          txtDateCreate.value=dateToString(valDateCreate);
          break;
        
      }
    });
    
 

    window.addEventListener('hashchange', (event) => {
      
      console.log("al CREAR Planilla");
      if (window.location.hash=="#/createPlanilla")
      {
      
      txtDateCreate.value=dateToString(valDateCreate);
      }
      else if (window.location.hash=="#/deletePlanilla")
  {
  txtDateCreate.value=dateToString(valDateCreate);
    console.log("delete");
}

    });

   
    
   
   
  
     
   
    

return $divplanillas;
} 