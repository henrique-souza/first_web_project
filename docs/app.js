'use strict'

const switcher = document.querySelector('.button');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var nomeDaClasse = document.body.nomeDaClasse;
    if (nomeDaClasse == "light-theme") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
    console.log('Nome da classe atual: ' + nomeDaClasse);
});
