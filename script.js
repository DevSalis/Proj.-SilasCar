
const minhaUl = document.querySelector('ul')
const meuCatalogo = document.querySelector('#buttonShowAll')
const meuDesconto = document.querySelector('#buttonOf')
const minhaSoma = document.querySelector('#buttonTotal')
const maisBarato = document.querySelector('#button-populares')


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

function total() {
     

    const buyAll =  menuOptions.reduce((acc, soma) =>{
        return acc + soma.price
    },0)

    const of10 = menuOptions.map((of) => ({
        ...of,
        price: of.price * 0.9, 
     }))

     const ofTotal = of10.reduce((acc, curr) => acc + curr.price, 0)


    minhaUl.innerHTML = `
    <li class="valor-total">
         <p class="valor-total-1">Total  ${buyAll}</p>
         <p class="valor-total-1">Total com desconto ${ofTotal}</p>
    </li>`

    console.log(buyAll, ofTotal)
   
}

function barato() {
    
const popularCar = menuOptions.filter((maisBarato) => maisBarato.popular)
mostrarTudo(popularCar)
}

meuCatalogo.addEventListener('click', ()=> mostrarTudo(menuOptions))
meuDesconto.addEventListener('click', blackFriday)
minhaSoma.addEventListener('click', total)
maisBarato.addEventListener('click', barato)



