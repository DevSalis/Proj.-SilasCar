



const catalogo = document.querySelector("ul")
const mostrarTudo = document.querySelector("#buttonShowAll")

let myLi = ''

function primeiroDesafio() {
    menuOptions.forEach((element) => {
        myLi += `
           <li>
               <img class="cars" src="${element.src}">
                   <p>${element.name}</p>
                   <p class="valor">R$ ${element.price}</p>
           </li>
        `
        });
        catalogo.innerHTML = myLi
}



mostrarTudo.addEventListener("click", primeiroDesafio)

