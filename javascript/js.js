
/* Variables */

/* Plus variables -*/
const firstButton = document.querySelector('#first__plus');
const secondButton = document.querySelector('#second__plus');
const thirdButton = document.querySelector('#third__plus');
const fourthButton = document.querySelector('#four__plus');

/* minus variables */




/* Listener */

clickButton();

function clickButton() {
        /* plus button */
     
    firstButton.addEventListener('click', changeIcon);
    secondButton.addEventListener('click', changeIcon);
    thirdButton.addEventListener('click', changeIcon);
    fourthButton.addEventListener('click', changeIcon); 

}

function changeIcon(e) {

    const buttonAttribute = e.target;
    if (buttonAttribute.src.endsWith('icon-plus.svg')) {
        buttonAttribute.src = 'assets/images/icon-minus.svg';

    } else {
        buttonAttribute.src = 'assets/images/icon-plus.svg';
    }

 paragraphActive(buttonAttribute);

 }

 function paragraphActive(buttonAttribute) {
    
    paragraphId = buttonAttribute.id.replace('plus', 'text')
    const paragraphElement = document.getElementById(paragraphId);    
    paragraphElement.classList.toggle('paragraph__inactive');

}
 
    