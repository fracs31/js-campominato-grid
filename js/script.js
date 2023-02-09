let row = 10; //numero di righe
let cells = row ** 2 ; //numero di celle
let gridElement = document.getElementById("grid"); //griglia nel DOM

//Ciclo per la creazione delle celle della griglia
for (let i = 0; i < cells; i++) {
    let cellElement = document.createElement("div"); //creazione della cella
    let value = i + 1; //valore della cella
    cellElement.classList.add("cell"); //assegno alla cella una classe
    cellElement.style.width = "calc(100% / " + " " + row + ")"; //assegno la larghezza alla cella
    cellElement.innerHTML = value; //assegno alla cella il valore
    gridElement.appendChild(cellElement); //aggiungo la cella alla griglia
}