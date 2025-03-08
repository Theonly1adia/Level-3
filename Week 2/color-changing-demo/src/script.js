import soundFile from './sound.wav';

export default function changeBackground() {
    const gradients = [
        'linear-gradient(to right, #ff7e5f, #feb47b)',
        'linear-gradient(to right, #6a11cb, #2575fc)',
        'linear-gradient(to right, #ff6a00, #ee0979)',
        'linear-gradient(to right, #00c9ff, #feb47b)',
        'linear-gradient(to right, #fc00ff, #00dbde)',

    ];

    document.body.style.background = gradients[Math.floor(Math.random() * gradients.length)]
    playSound();
    
}

function playSound(){
    const sound = new Audio(soundFile);
    sound.play();
    }