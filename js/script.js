// RECUPERO IL PULSANTE PER INIZIARE IL GIOCO
const playBtn = document.getElementById('playBtn');
// DEFINISCO IL CONTENITORE DELLA GRIGLIA
const gridContainer = document.getElementById('gridContainer');
// DEFINISCO LA FUNZIONE PER LA CREAZIONE DEGLI ELEMENTI DELLA GRIGLIA
function createGridElements(){
    // DEFINISCO CHE TIPO DI ELEMENTO CREARE
    let currentElement = document.createElement('div');
    // AGGIUNGO UNA CLASSE AGLI ELEMENTI CREATI, PER DEFINIRE IL LORO STILE
    currentElement.classList.add('square');
    // ESCO DALLA VARIABILE RESTITUENDO LA VARIABILE currentElemet
    return currentElement;
}