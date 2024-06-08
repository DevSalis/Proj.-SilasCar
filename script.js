
const minhaUl = document.querySelector('ul')
const meuCatalogo = document.querySelector('#buttonShowAll')
const meuDesconto = document.querySelector("#buttonOf")


function mostrarTudo(newarray) {

    let minhaLi = ''

    newarray.forEach(element => {
        minhaLi += `
           <li>
               <img class="cars" src="${element.src}">
                <p>${element.name}</p>
                <p class="valor">R$ ${element.price}</p>
           </li>`

        minhaUl.innerHTML = minhaLi
    });
}

function blackFriday(){
    const of10 = menuOptions.map((of) => ({
       ...of,
       price: of.price * 0.9, 
    }))

    mostrarTudo(of10)
}



meuCatalogo.addEventListener('click', ()=> mostrarTudo(menuOptions))
meuDesconto.addEventListener('click', blackFriday)



