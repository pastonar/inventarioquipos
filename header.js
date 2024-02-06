
import { Title } from "/Title.js";
import { menu } from "/menu.js";
export function header() {

    const $header = document.createElement("header");
    //$header.appendChild(Title());
    $header.appendChild(menu());
return $header;
}