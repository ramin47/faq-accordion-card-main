

let divF = document.getElementById("parag-f")
let divS = document.getElementById("parag-s")
let divT = document.getElementById("parag-t")
let divFo = document.getElementById("parag-fo")
let divFi = document.getElementById("parag-fi")
let main = document.getElementById("div-main")

function addF() {
    divF.innerHTML = `<div id="div-main"><h5>How many team members can I invite?</h5>
    <img class="one-arrow" src="/images/icon-arrow-down.svg" alt="Arrow image">
    <p class="parag-f">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p><br><hr></div>`
}

function addS() {
    divS.innerHTML = `<div id="div-main"><h5>How many team members can I invite?</h5>
    <img class="one-arrow" src="/images/icon-arrow-down.svg" alt="Arrow image">
    <p class="parag-f">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p><br><hr></div>`
}

function addT() {
    divT.innerHTML = `<div id="div-main"><h5>How many team members can I invite?</h5>
    <img class="one-arrow" src="/images/icon-arrow-down.svg" alt="Arrow image">
    <p class="parag-f">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p><br><hr></div>`
}

function addFO() {
    divFo.innerHTML = `<div id="div-main"><h5>How many team members can I invite?</h5>
    <img class="one-arrow" src="/images/icon-arrow-down.svg" alt="Arrow image">
    <p class="parag-f">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p><br><hr></div>`
}

function addFI() {
    divFi.innerHTML = `<div id="div-main"><h5>How many team members can I invite?</h5>
    <img class="one-arrow" src="/images/icon-arrow-down.svg" alt="Arrow image">
    <p class="parag-f">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p><br><hr></div>`
}




divFi.addEventListener('click', addFI)

divFo.addEventListener('click', addFO)

divF.addEventListener('click', addF)

divS.addEventListener('click', addS)


divT.addEventListener('click', addT)
