function getRandomNumber(){
    return Math.floor(Math.random() * 256);
}

function getRandomColor(){
    const r = getRandomNumber();
    const g = getRandomNumber();
    const b = getRandomNumber();
    return `rgb(${r}, ${g}, ${b})`;
}

function createRandomGradient(){
    const color_1 = getRandomColor();
    const color_2 = getRandomColor();
    const gradient = `linear-gradient(135deg, ${color_1}, ${color_2})`
    
    const currentBackground = document.querySelector('.background-layer:not(.overlay)');
    const overlayBackground = document.querySelector('.background-layer.overlay');

    overlayBackground.style.background = gradient;
 
    overlayBackground.style.opacity = 1;

    setTimeout(() => {
        currentBackground.style.background = gradient;
        overlayBackground.style.opacity = 0; 
    }, 300);
}
document.getElementById('center-button').addEventListener('click', createRandomGradient);