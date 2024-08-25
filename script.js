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
        // Ajusta o valor, multiplicando por 1000 se o valor for menor que 1000
        const adjustedPrice = soma.price < 1000 ? soma.price * 1000 : soma.price;
        return acc + adjustedPrice;
    }, 0);

    const of10 = menuOptions.map((of) => ({
        ...of,
        price: of.price * 0.9,
    }));

    const ofTotal = of10.reduce((acc, curr) => {
        // Ajusta o valor, multiplicando por 1000 se o valor for menor que 1000
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

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const acceptButton = document.getElementById('accept-button');
    const acceptTerms = document.getElementById('accept-terms');
    const playPauseButton = document.getElementById('play-pause-button');

    let isPlaying = false;
    const somEntrada = new Audio("assets/top-gear-xote.mp3");
    somEntrada.volume = 0.07;
    somEntrada.loop = true;

    // Habilita o botão de aceitar termos quando o checkbox é marcado
    acceptTerms.addEventListener('change', function () {
        acceptButton.disabled = !this.checked;
    });

    // Ao clicar no botão de aceitar termos
    acceptButton.addEventListener('click', function () {
        modal.style.display = 'none'; // Esconde o modal
        playPauseButton.style.display = 'block'; // Exibe os controles de áudio

        somEntrada.play().then(() => {
            playPauseButton.innerHTML = '<span>&#x1F507;</span>'; // Atualiza o texto do botão
            isPlaying = true; // Atualiza o estado de reprodução
        }).catch((error) => {
            console.error('Error playing audio:', error);
        });
    });

    // Controle de play/pause
    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            somEntrada.pause();
            playPauseButton.innerHTML = '<span>&#x1F50A;</span>'; // Atualiza o texto do botão para o emoji de "Play"
        } else {
            somEntrada.play().then(() => {
                playPauseButton.innerHTML = '<span>&#x1F507;</span>'; // Atualiza o texto do botão para o emoji de "Pause"
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

// Script para lidar com a abertura e fechamento do menu
document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.querySelector('.menu-responsivo');
    const boxLinks = document.getElementById('box-links');

    menu.classList.toggle('active');
    boxLinks.classList.toggle('active');
});

// Fechar o menu ao clicar em um link
document.querySelectorAll('#box-links a').forEach(link => {
    link.addEventListener('click', function() {
        const menu = document.querySelector('.menu-responsivo');
        const boxLinks = document.getElementById('box-links');
        
        menu.classList.remove('active');
        boxLinks.classList.remove('active');
    });
});
