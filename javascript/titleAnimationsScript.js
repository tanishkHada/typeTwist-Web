const capsLock = document.querySelector('.caps-lock');

const title = document.getElementById('mainTitle');
const anims = ['lePeek', 'leKickOutFront', 'leHangAndDropLeft', 'leDanceTop', 'leBounceFromTop', 'leMovingBackFromRight'];

let curr = 0;
let prev = 0;

let animInterval = null;

function applyAnimation() {
    removeClass(title, [anims[prev]]);
    addClass(title, [anims[curr]]);

    prev = curr;
    curr = (curr + 1) % anims.length;

    animate();
}

function animate() {
    title.innerHTML = 'typeTwist';

    var a = [title];
    for (var i = 0; i < a.length; i++) {
        var $this = a[i];
        var letter = $this.innerHTML;
        letter = letter.trim();
        var str = '';
        var delay = 100;
        for (l = 0; l < letter.length; l++) {
            if (letter[l] != ' ') {
                str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
                delay += 150;
            } else
                str += letter[l];
        }
        $this.innerHTML = str;
    }
}

function toggleAnimation(isTyping) {
    if (isTyping) {
        clearInterval(animInterval);
        animInterval = null;
    } else if (!isTyping) {
        if (animInterval === null) {
            animInterval = setInterval(applyAnimation, 5000);
        }
    }
}

window.onload = function () {
    applyAnimation();
    toggleAnimation(false);
};


// caps lock handling
document.addEventListener('DOMContentLoaded', () => {
    const warningDiv = capsLock;

    function isCapsLockOn(event) {
        return event.getModifierState && event.getModifierState('CapsLock');
    }

    function updateCapsLockWarning(event) {
        if (isCapsLockOn(event)) {
            warningDiv.classList.remove('hide');
            warningDiv.classList.add('show');
        } else {
            warningDiv.classList.remove('show');
            warningDiv.classList.add('hide');
        }
    }

    // Detect Caps Lock when any key is pressed or released
    document.addEventListener('keydown', updateCapsLockWarning);
    document.addEventListener('keyup', updateCapsLockWarning);
});
