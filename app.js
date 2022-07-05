// Player 1

let randomNumber = Math.ceil(Math.random() * 6)



//console.log\\\\\(randomNumber)

let randomDiceImage = 'dice-' + randomNumber + '.jpeg';

let randomImageSource = 'Assets/' + randomDiceImage;


let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource)

//Player 2

let randomNumber2 = Math.ceil(Math.random() * 6)

let randomDiceImage2 = 'dice-' + randomNumber2 + '.jpeg';

let randomImageSource2 = 'Assets/' + randomDiceImage2;


let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)


if (randomNumber > randomNumber2) {
    document.querySelector('h3').innerHTML = 'Player 1 Wins'
} else if
    (randomNumber2 > randomNumber) {
    document.querySelector('h3').innerHTML = 'Player 2 Wins'
} else {
    document.querySelector('h3').innerText = ' It`s a Draw'
}

let Refresh = document.querySelector('.refresh')

function refresh() {
    return window.location.reload();
}

Refresh.addEventListener('click', refresh)

