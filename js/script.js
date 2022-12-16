// console.log('OK JS');

/*
    ? CONSEGNA
    L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
    ? MILESTONE 1
    Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
    ? MILESTONE 2
    Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
    ? MILESTONE 3
    In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
    ? MILESTONE 4
    Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

// Prendo gli elementi dal DOM 
const btnPlay = document.getElementById('play');
const grid = document.getElementById('grid');
const select = document.getElementById('userChoice')
// Aggiungo le impostazioni affinchè possa creare la griglia 
let totalCells = 100;

// # Creo una funzione che mi permetta di creare le celle all'interno della grid
function createCell (content) {
    const cell = document.createElement('div');
    if (userChoice === 'normal') {
        cell.classList.add('normal-cell');
    } else if (userChoice === 'hard') {
        cell.classList.add('hard-cell');
    } else {
        cell.classList.add('cell');
    }
    cell.append(content)
    grid.appendChild(cell);
    return cell;
}

// Aggiungo l'even listener al bottone 
btnPlay.addEventListener ('click', function(){
    // Aggiungo la classe al grid così da creare il container per il campo minato
    grid.classList.add('grid');
    
    // Prendo il value della select 
    userChoice = select.value;
    
    // Creo la condizione per cambiare la modalità di gioco
    if (userChoice === 'normal') {
        totalCells = 81;
    } else if (userChoice === 'hard') {
        totalCells = 49;
    }

    for (let i = 1; i <= totalCells; i++) {
        // Aggiungo la funzione che crei le celle e le appena nella griglia 
        const cell = createCell (i);
        
        cell.addEventListener ('click', function(){
            cell.classList.toggle('bg-sky-blue');
            console.log(i);
        });
    };
});

