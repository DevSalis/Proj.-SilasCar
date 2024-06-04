


const minhaUl = document.querySelector('ul')
const meuBotao = document.querySelector('#buttonShowAll')
const desconto = document.querySelector('#buttonOf')
let minhaLi = ''

function mostrarTudo() {
    menuOptions.forEach(element => {
        minhaLi += `
           <li>
               <img class="cars" src="${element.src}">
                <p>${element.name}</p>
                <p class="valor">R$ ${element.price}</p>
           </li>`

           minhaUl.innerHTML = minhaLi
    });
}
function catalogoOf(){

    console.log("tem desconto?")
}


meuBotao.addEventListener('click', mostrarTudo)
desconto.addEventListener('click', catalogoOf)


