// RECUPERO IL PULSANTE PER INIZIARE IL GIOCO
const playBtn = document.getElementById('playBtn');

// DEFINISCO LA FUNZIONE PER LA CREAZIONE DELL'ELEMENTO DELLA GRIGLIA
function createGridElement() {
    // DEFINISCO CHE TIPO DI ELEMENTO CREARE
    let currentElement = document.createElement('div');
    // AGGIUNGO UNA CLASSE AL ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
    currentElement.classList.add('square');
    // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElemet
    return currentElement;
}
// DEFINISCO LA DESTINAZIONE DEGLI ELEMENTI CREATI
const gridDestination = document.getElementById('gridContainer');
// DEFINISCO L'EVENTO CLICK DEL PULSANTE playBtn
playBtn.addEventListener('click', function(){
    // ESEGUO UN CICLO DI 100 ITERAZIONI PER CREARE UNA GRIGLIA 
    for(let i = 0 ; i < 100; i++){
        // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE 
        currentSquare = createGridElement();
        // AGGIUNGO UN eventListener PER OGNI DELEMENTO DELLA GRIGLIA
        currentSquare.addEventListener('click', function(){
            
        })
        // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
        currentSquare.innerText = i + 1;
        // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
        gridDestination.append(currentSquare)
    }
})
