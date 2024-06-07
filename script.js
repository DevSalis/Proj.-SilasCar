
const minhaUl = document.querySelector('ul')
const meuBotao = document.querySelector('#buttonShowAll')
const desconto = document.querySelector('#buttonOf')


function mostrarTudo(teste) {

    let minhaLi = ''

    teste.forEach(element => {
        minhaLi += `
           <li>
               <img class="cars" src="${element.src}">
                <p>${element.name}</p>
                <p class="valor">R$ ${element.price}</p>
           </li>`

        minhaUl.innerHTML = minhaLi
    });
}
function descontoOf() {
    const blackfriday = menuOptions.map((of) => ({
        ...of,
        price: of.price * 0.9,
    }))

    mostrarTudo(blackfriday)
}



meuBotao.addEventListener('click', () => mostrarTudo (menuOptions))
desconto.addEventListener('click', descontoOf)


