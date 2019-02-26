let prvaRataPlacenoElementi = document.querySelectorAll('.installment-1.placeno');
let drugaRataPlacenoElementi = document.querySelectorAll('.installment-2.placeno');
let trecaRataPlacenoElementi = document.querySelector('.installment-3.placeno');
let prvaPlacenaDrugaNijeElementi = document.querySelectorAll('.installment-1.placeno + .installment-2.neplaceno');
let drugaPlacenaTrecaNijeElementi = document.querySelectorAll('.installment-2.placeno + .installment-3.neplaceno');
let zbirPlacenoPrvaRata = 0;
let zbirPlacenoDrugaRata = 0;
let zbirPlacenoTrecaRata = 0;
let zbirPlacenoPrvaDrugaNije = 0;
let zbirPlacenoDrugaTrecaNije = 0;

if(prvaRataPlacenoElementi) {

    prvaRataPlacenoElementi.forEach(element => {
        zbirPlacenoPrvaRata += Number(element.innerText)
    });
}

if(drugaRataPlacenoElementi) {

    drugaRataPlacenoElementi.forEach(element => {
        zbirPlacenoDrugaRata += Number(element.innerText)
    });
}

if(trecaRataPlacenoElementi) {

    trecaRataPlacenoElementi.forEach(element => {
        zbirPlacenoTrecaRata += Number(element.innerText)
    });
}

if(prvaPlacenaDrugaNijeElementi) {

    prvaPlacenaDrugaNijeElementi.forEach(element => {
        zbirPlacenoPrvaDrugaNije += Number(element.innerText)
    });
}

if(drugaPlacenaTrecaNijeElementi) {

    drugaPlacenaTrecaNijeElementi.forEach(element => {
        zbirPlacenoDrugaTrecaNije += Number(element.innerText)
    });
}

document.querySelector('.ukm-1').innerText = zbirPlacenoPrvaRata;
document.querySelector('.ukm-2').innerText = zbirPlacenoDrugaRata + " (" + zbirPlacenoPrvaDrugaNije + ")";
document.querySelector('.ukm-3').innerText = zbirPlacenoTrecaRata + " (" + zbirPlacenoDrugaTrecaNije + ")";