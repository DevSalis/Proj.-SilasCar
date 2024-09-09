// logica do formulario, entrada e saida

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.to-form');
    const openButton = document.querySelector('.button-form-open');
    const closeButton = document.querySelector('.button-form');

    // Mostrar o formulário quando o botão 'Abrir Formulário' for clicado
    openButton.addEventListener('click', function() {
        form.style.display = 'flex';
        console.log("esta funcionando?")
    });

    // Ocultar o formulário quando o botão 'Fechar Formulário' for clicado
    closeButton.addEventListener('click', function() {
        form.style.display = 'none';
    });
});

//logica dos links do menu

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
                <p class="valor">R$ ${element.price.toLocaleString('pt-BR')}</p>
           </li>`;

        minhaUl.innerHTML = minhaLi
    });
}

function blackFriday() {
    const of10 = menuOptions.map((of) => ({
        ...of,
        price: of.price * 0.9,
    }))

    mostrarTudo(of10)
}

function total() {
    const buyAll = menuOptions.reduce((acc, soma) => {

        const adjustedPrice = soma.price < 1000 ? soma.price * 1000 : soma.price;
        return acc + adjustedPrice;
    }, 0);

    const of10 = menuOptions.map((of) => ({
        ...of,
        price: of.price * 0.9,
    }));

    const ofTotal = of10.reduce((acc, curr) => {
       
        const adjustedPrice = curr.price < 1000 ? curr.price * 1000 : curr.price;
        return acc + adjustedPrice;
    }, 0);

    minhaUl.innerHTML = `
    <li class="valor-total">
        <p class="valor-total-1">Total R$ ${buyAll.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
        <p class="valor-total-1">Total com desconto R$ ${ofTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
    </li>`;
}

function barato() {

    const popularCar = menuOptions.filter((maisBarato) => maisBarato.popular)
    mostrarTudo(popularCar)
}

//logica do popap e botão play e mudo

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const acceptButton = document.getElementById('accept-button');
    const acceptTerms = document.getElementById('accept-terms');
    const playPauseButton = document.getElementById('play-pause-button');

    let isPlaying = false;
    const somEntrada = new Audio("assets/top-gear-xote.mp3");
    somEntrada.volume = 0.07;
    somEntrada.loop = true;

    
    acceptTerms.addEventListener('change', function () {
        acceptButton.disabled = !this.checked;
    });

    
    acceptButton.addEventListener('click', function () {
        modal.style.display = 'none';
        playPauseButton.style.display = 'block';

        somEntrada.play().then(() => {
            playPauseButton.innerHTML = '<span>&#x1F507;</span>';
            isPlaying = true;
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });
    });

    // Controle de play/pause

    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            somEntrada.pause();
            playPauseButton.innerHTML = '<span>&#x1F50A;</span>'; 
        } else {
            somEntrada.play().then(() => {
                playPauseButton.innerHTML = '<span>&#x1F507;</span>';
            }).catch((error) => {
                console.error('Error resuming audio:', error);
            });
        }
        isPlaying = !isPlaying;
    });
});

meuCatalogo.addEventListener('click', () => mostrarTudo(menuOptions))
meuDesconto.addEventListener('click', blackFriday)
minhaSoma.addEventListener('click', total)
maisBarato.addEventListener('click', barato)

//logica carrossel

let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let boxCarrossel = document.querySelector('.carrossel')
let items = document.querySelectorAll('.list .item')
let list = boxCarrossel.querySelector(".list")

let active = 0
let firstPosition = 0
let lastPosition = items.length - 1

function setSlider() {

    let itemOld = boxCarrossel.querySelector(".list .item.active")
    itemOld.classList.remove("active")

}

prevButton.onclick = () => {

    list.style.setProperty("--calculation", -1)
    active = active + 1 > lastPosition ? 0 : active + 1
    setSlider()
    items[active].classList.add("active")

}

nextButton.onclick = () => {

    list.style.setProperty("--calculation", 1)
    active = active - 1 < firstPosition ? lastPosition : active - 1
    setSlider()
    items[active].classList.add("active")

}





