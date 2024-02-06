export function Title()
{
  const $divplanillas = document.createElement("div");
   const $styles = document.getElementById("dinamic-style");
   $divplanillas.id = "divplanilla";
 
   $divplanillas.innerHTML=
   `
   <div id="tblplanillas"></div>
   <div class="modal-body" style="text-align:center">
   <p><label for="txtDateFrom" >Fecha del sistema: </label>
     <input type="text" id="txtDateCreate"  size="40">
     <button class="button" id ="btnSearchPlanilla">Actualizar</button>
   </p>
   <p><label for="txtDateFrom" >Id planilla nueva: </label>
     <input type="text" id="txtDateCreate"  size="40">
     <button class="button" id ="btnSearchPlanilla">Crear</button>
   </p>
    `;


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
       
          case 'btnSearchPlanilla':
            getQuery("queryplanillas?fecinicio="+txtDateFrom.value+"&fecfinal="+txtDateTo.value);
            console.log ("consultar planillas");
        break;  
      }
    });    
    return $divplanillas;
}