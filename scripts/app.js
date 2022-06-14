"use strict";

const switcher = document.querySelector(".button");

switcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    var className = document.body.className;

    if (className == "light-theme") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }

    console.log("Nome da classe atual: " + className);
});