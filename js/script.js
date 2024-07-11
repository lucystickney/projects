
const greenSquare = document.getElementById('greenColor');
const whiteSquare = document.getElementById('whiteColor');


function switchToGreen() {
    const whiteElements = document.querySelectorAll('a, p, h1, h2, h3, div, nav, body, span');
    whiteElements.forEach(element => {
        element.classList.remove('whiteColor');
        element.classList.add('greenColor');
    });

    localStorage.setItem('isGreen', 'true');
}

function switchToWhite() {
    const whiteElements = document.querySelectorAll('a, p, h1, h2, h3, div, nav, body, span');
    whiteElements.forEach(element => {
        element.classList.remove('greenColor');
        element.classList.add('whiteColor');
    });

    localStorage.setItem('isGreen', 'false');
}

if (greenSquare){
    greenSquare.addEventListener('click', switchToGreen);
}

if (whiteSquare){
    whiteSquare.addEventListener('click', switchToWhite);
}




const isGreen = localStorage.getItem('isGreen');
console.log(isGreen);
if (isGreen === 'true') {
    console.log("isGreen");
    switchToGreen();
} else {
    switchToWhite();
}