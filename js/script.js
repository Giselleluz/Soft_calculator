function clearDisplay() {
    document.getElementById('resultado').innerText = '';
}

function appendToDisplay(value) {
    document.getElementById('resultado').innerText += value;
}

function calculateResult() {
    const display = document.getElementById('resultado');
    try {
        display.innerText = eval(display.innerText); //o eval esta transformando em conta
    } catch (error) {
        display.innerText = 'Erro';
    }
}

function calculateSquareRoot() {
    const display = document.getElementById('resultado');
    try {
        display.innerText = Math.sqrt(parseFloat(display.innerText));
    } catch (error) {
        display.innerText = 'Erro';
    }
}

function calculatePower() {
    const display = document.getElementById('resultado');
    display.innerText += '**';
}

function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}