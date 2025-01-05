function createConfetti() {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 200; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti-piece');
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiPiece.style.backgroundColor =
            '#' + ((Math.random() * 0xffffff) << 0).toString(16);
        confettiContainer.appendChild(confettiPiece);
    }
}

createConfetti();
