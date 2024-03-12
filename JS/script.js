// Selecione todos os elementos de uma página HTML por sua 
// classe e altere o texto desses elementos.
let texto = document.querySelectorAll('.texto');
// console.log(texto)
texto.forEach(texto => {
            texto.textContent = 'Texto alterado';
        });
// Crie um novo elemento e adicione-o como filho de outro elemento na página HTML.

let paragrafoNovo = document.createElement('p');
let container = document.getElementById('container');
paragrafoNovo.textContent = 'Filho da DIV';
container.appendChild(paragrafoNovo);