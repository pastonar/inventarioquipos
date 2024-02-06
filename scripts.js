export function scripts()
{
    
    // Get the modal
    var wnewplanilla = document.getElementById("wnewplanilla");
    var wsearchplanilla = document.getElementById("wsearchplanilla");
    
    // Get the button that opens the modal
    var btnNewPlanilla = document.getElementById("BtnNewPlanilla");
    var btnSearchPlanilla = document.getElementById("BtnSearchPlanilla");
    
    // Get the <span> element that closes the modal
    var spanA = document.getElementsByClassName("close")[0];
    var spanB = document.getElementsByClassName("close")[1];
    // When the user clicks the button, open the modal 
    function btnNewPlanilla() {
      wnewplanilla.style.display = "block";
    }
    
    function btnSearchPlanilla() {
      wsearchplanilla.style.display = "block";
    }
    
    
    // When the user clicks on <span> (x), close the modal
    spanA.onclick = function() {
     wnewplanilla.style.display = "none";
    
    }
    
    spanB.onclick = function() {
     wsearchplanilla.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
      //  modal.style.display = "none";
      }
    }
  
}