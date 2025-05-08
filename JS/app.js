//iniziamo a vedere come fare per creare le due variabili

const eta= parseInt(prompt("Inserisci la tua età"));
const prezzobase = 0.21;
const km= parseInt(prompt("Inserisci il numero dei km"));
let finalprice; //uso let perchè può cambiare e non assegniamo niente per ora

//adesso iniziamo con le condizioni
if (eta < 18) {
    finalprice = prezzobase * km * 0.2;
    console.log (`${finalprice.toFixed(2)}`)
} else if (eta > 65) {
    finalprice = prezzobase * km * 0.6;
    console.log (`${finalprice.toFixed(2)}`)
} else {
    finalprice = prezzobase * km;
    console.log (`${finalprice.toFixed(2)}`)
}

