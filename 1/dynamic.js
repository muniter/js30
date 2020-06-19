"use strict"

function playSound (event) {
    if (keyCodes.indexOf(event.keyCode)) {
        const instrument = document.querySelector(`div[data-code="${event.keyCode}"]`);
        const audio = document.querySelector(`audio[data-code="${event.keyCode}"]`);
        if (!audio) return;

        
        // In case of repeated press, move the audio to 0 seconds
        // And play again
        instrument.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }

};

document.addEventListener('keydown', playSound);
document.addEventListener('transitionend', e => e.target.classList.remove('playing'));
let keys = document.querySelectorAll('div[data-code]');
let keyCodes = new Array();
// Get an array of the Key Codes
keys.forEach(e => keyCodes.push(parseInt(e.dataset['data-code'])));
