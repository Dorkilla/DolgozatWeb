import { htmlOsszeallit, divMegjelenitese, valaszKattintas } from "./fuggvenyek.js";
import { TESZTLISTA } from "./adat.js";

const divElem=$(".teszkerdesek");
const valaszElem=$(".valaszok")

divElem.html(htmlOsszeallit(TESZTLISTA));


const valaszok=[];
init(TESZTLISTA);
valaszInit(valaszok,TESZTLISTA);

export function init(vLista){
    divMegjelenitese(htmlOsszeallit(vLista, divElem));
}

export function valaszInit(valaszok, lista){
   // valaszEsemeny(lista);
    divMegjelenitese(htmlOsszeallit(valaszok),valaszElem);
}

/*function valaszEsemeny(lista){
const GOMB=$(".gomb");
GOMB.ON("click",function(event){
    valaszElem.show();
    let aktualisId= event.target.id.replace("t","");
    console.log(lista[aktualisId]);
})
}*/


