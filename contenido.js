export function contenido() {

    const $content = document.createElement("div");
    $content.id = "contenido";
    $content.className="contenido"
     const $styles = document.getElementById("dinamic-style");
     
     
     //const $styles;
   
     $styles.innerHTML = `
    div contenido{
        background-color: white;
        width: 100%;
        border: none;
        padding: 20px;
        margin: 10px;
      }
    `;

return  $content;
}