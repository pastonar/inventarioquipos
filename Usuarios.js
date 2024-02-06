export function Usuarios()

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
     width: 90%; /* Full width */
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
     width: 55%;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
     -webkit-animation-name: animatetop;
     -webkit-animation-duration: 0.4s;
     animation-name: animatetop;
     animation-duration: 0.1s
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
     height: 30%;
   }
   
   .modal-body {padding: 2px 16px;}
   
   .modal-footer {
     padding: 2px 16px;
     background-color: #969c96;
     color: white;
   }
   
   .button {
     background-color: #6f13e7; /* Green */
     border: none;
     color: white;
     padding: 10px;
     text-align: center;
     text-decoration: none;
     display: inline-block;
     font-size: 14px;
     margin: 4px 2px;
     cursor: pointer;
     width: 60px;
     border-radius: 4px;
   }
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
           <input type="date" name="" id="txtDatecreated"  format="mm-dd-yyyy",value = "now()"changeDate(0)" size="10">
         </p>
       
       </div>
       <div class="modal-footer"   style="text-align:right">
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
           <input type="date" name="" id="txtDateFrom" onchange = "changeDate(0)" size="10">
           <label for="txtDateTo"  >Hasta: </label>
           <input type="date" name="" id="txtDateTo"  onchange = "changeDate(1)" size="10">
           </p>
       
       </div>
       <div class="modal-footer"   style="text-align:right">
          <button class="button" id ="btnSearchPlanilla">Aceptar</button>
       </div>
     </div>
   
   </div>
   <div id="tblplanillas"></div>
       `;
      
       document.addEventListener('click' ,function(e) {
         switch(e.target.id) {
           case 'btnOpenNewPlanilla':
             wnewplanilla.style.display = "block"; // Or whatever
             break;
           case 'btnOpenSearchPlanilla':
             wsearchplanilla.style.display = "block";
             break;
           case 'closeA':
               wnewplanilla.style.display = "none";
             break;
           case 'closeB':
                 wsearchplanilla.style.display = "none";
             break;
           case 'btnCreatePlanilla':
                 console.log ("crear planillas");
             break;
             case 'btnSearchPlanilla':
               console.log ("consultar planillas");
           break;  
         }
       });
      /*
       document.addEventListener('click' ,(e) =>{
         if (e.target.matches("btnCreatePlanilla"))
       console.log ("consultar planillas");
       });
       */
       
   
   return $divplanillas;
}