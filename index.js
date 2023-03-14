// let countEl = document.getElementById("count-el")
// let saveEl = document.getElementById("save-el")
// let resetEl = document.getElementById("reset-el")


// let count = 0;

// function increment() {
//     count = count + 1
//     countEl.innerText = count
// }

// function save() {
//     let countStr = count + " - "

//     saveEl.textContent += countStr;
// }

// function reset() {

//     count = 0;
//     countEl.innerText = 0;
//     count.innerText += count;
// }
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}