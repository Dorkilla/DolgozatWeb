import { TESZTLISTA } from "./adat.js";

export function htmlOsszeallit(lista) {
    let txt = " "
    for (let index = 0; index < lista.length; index++) {
        txt += `
        <div class="tesztkerdesek">
        <div class="kerdes">
        <h6 class="nev">${lista[index].nev}</h6>
        <div class="valaszok">
            <div class="valasz">
            <p class="leiras">${lista[index].helyes_valasz}</p>
            </div>
            <div class="valasz">
            <p class="leiras">${lista[index].valasz1}</p>
            </div>
            <div class="valasz">
            <p class="leiras">${lista[index].valasz2}</p>
            </div>
            <div class="valasz">
            <p class="leiras">${lista[index].valasz3}</p>
            </div>
            </div>
            </div>`;
    }
    console.log(txt);
    txt+="</div>";
    return txt;

}

export function divMegjelenitese(txt){
    const divElem = $(".lista");
    divElem.html(txt);
}

export function valaszKattintas(){
    $(".gomb").click(function(){
        const index=$(this).data("index");
        const listaa=TESZTLISTA[index];
    })

    

}

