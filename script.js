


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
const descontoof =  menuOptions.map( (of) => ({
name: of.name,
price: of.price * 0.9,
popular: of.popular,
src: of.src
}))
   
}


meuBotao.addEventListener('click', mostrarTudo)
desconto.addEventListener('click', catalogoOf)


