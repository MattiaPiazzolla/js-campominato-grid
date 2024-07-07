// RECUPERO IL PULSANTE PER INIZIARE IL GIOCO
const playBtn = document.getElementById('playBtn');

// DEFINISCO LA FUNZIONE PER LA CREAZIONE DELL'ELEMENTO DELLA GRIGLIA
function createGridElement() {
    // DEFINISCO CHE TIPO DI ELEMENTO CREARE
    let currentElement = document.createElement('div');
    // AGGIUNGO UNA CLASSE ALL'ELEMENTO CREATO, PER DEFINIRE IL SUO STILE
    currentElement.classList.add('square');
    // ESCO DALLA FUNZIONE RESTITUENDO LA VARIABILE currentElement
    return currentElement;
}
// DEFINISCO LA DESTINAZIONE DEGLI ELEMENTI CREATI
const gridDestination = document.getElementById('gridContainer');
// DEFINISCO L'EVENTO CLICK DEL PULSANTE playBtn
playBtn.addEventListener('click', function(){
    // SVUOTO LA GRIGLIA PRIMA DI GENERARNE UNA NUOVA
    gridDestination.innerHTML = '';
    // CAMBIO IL NOME DEL PULSANTE 
    playBtn.innerText = 'Reset'
    // RESETTO LA CONSOLE
    console.clear();
    // ESEGUO UN CICLO DI 100 ITERAZIONI PER CREARE UNA GRIGLIA 
    for(let i = 0 ; i < 100; i++){
        // CREO IL SINGOLO ELEMENTO CHIAMANDO LA FUNZIONE 
        currentSquare = createGridElement();
        // AGGIUNGO UN eventListener PER OGNI DELEMENTO DELLA GRIGLIA
        currentSquare.addEventListener('click', function(){
            // AGGIUNGO UNA CLASSE CON LA FUNZIONE TOGGLE PER ACCENDERE E SPEGNERE AD OGNI CLICK
            this.classList.toggle('clicked');
            // MOSTRO IL NUMERO DELLA CELLA NELLA CONSOLE
            console.log(`Hai cliccato sulla cella numero ${i + 1}`);
        })
        // AGGIUNGO IL NUMERO ALL'INTERNO DEGLI ELEMENTI
        currentSquare.innerText = i + 1;
        // APPENDO L'ELEMENTO CREATO ALL'INTERNO DI gridDestination
        gridDestination.append(currentSquare)
    }
})

