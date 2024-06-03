
const myUl = document.querySelector("ul")
let myLi = ""

function showAll() {
    menuOptions.forEach(element => {

        myLi += `
        <li>
        <img class="cars" src="${element.src}">
            <p>${element.name}</p>
            <p class="valor">R$ ${element.price}</p>
    </li>`
       
        
       
    });

    myUl.innerHTML = myLi

}

const myButton = document.querySelector("#buttonShowAll")

myButton.addEventListener("click", showAll)


