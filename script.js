
menuOptions.forEach(element => {
 `
 <li>
        <img class="cars" src=${element.src}>
            <p>${element.name}</p>
            <p class="valor">R$ ${element.price}</p>
    </li>
 `
});