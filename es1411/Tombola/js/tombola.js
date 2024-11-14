const tombola = document.getElementById("tombola");
const btnEstrai = document.getElementById("estrai");
const numbers = [];
console.log(numbers);
document.addEventListener("load", init());

function init() {
    createCells();
    clickBtn();
}

function createCells() {
    for (let i = 0; i < 90; i++) {
        const grigliaDiv = document.createElement("div");
        grigliaDiv.innerText = i + 1;
        tombola.appendChild(grigliaDiv);
    }
}
function clickBtn() {
    btnEstrai.addEventListener("click", btnExtract);
}

function btnExtract() {
    let casualNumbers = Math.floor(Math.random() * 90) + 1;
    const cells = document.querySelectorAll("tombola div");
    if (numbers.includes(casualNumbers)) {
        btnExtract();
        return;
    }
    numbers.push(casualNumbers);

    for (let i = 0; i < cells.length; i++);
    if (cells[i].innerText == casualNumbers) {
        cells[i].classList.add("già estratto!");
    }
};
