
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

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const acceptButton = document.getElementById('accept-button');
    const acceptTerms = document.getElementById('accept-terms');
    const playPauseButton = document.getElementById('play-pause-button');
    
    let isPlaying = false;
    const somEntrada = new Audio("assets/top-gear-xote.mp3");
    somEntrada.volume = 0.07;
    somEntrada.loop = true;

    // Habilita o botão de aceitar termos quando o checkbox é marcado
    acceptTerms.addEventListener('change', function() {
        acceptButton.disabled = !this.checked;
    });

    // Ao clicar no botão de aceitar termos
    acceptButton.addEventListener('click', function() {
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
    playPauseButton.addEventListener('click', function() {
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





meuCatalogo.addEventListener('click', ()=> mostrarTudo(menuOptions))
meuDesconto.addEventListener('click', blackFriday)
minhaSoma.addEventListener('click', total)
maisBarato.addEventListener('click', barato)