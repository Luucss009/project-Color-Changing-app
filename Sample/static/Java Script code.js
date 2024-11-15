
document.addEventListener('DOMContentLoaded', function () {
    
    const button = document.getElementById('changeColorButton');
    const secretButton1 = document.getElementById('secretButton1');
    const secretButton2 = document.getElementById('secretButton2');
    const heading = document.querySelector('h1');
    const body = document.body;
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closeBtn = document.getElementById('closeBtn');

    
    function randomColor() {
        return Math.floor(Math.random() * 256); 
    }

    
    function changeColors() {
        
        const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        const textColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

        
        body.style.transition = 'background-color 1s ease, color 1s ease'; 
        body.style.backgroundColor = bgColor;
        heading.style.color = textColor;

        popup.classList.add('show');
        popupMessage.textContent = "Colors Changed!"; 

        
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000); 
    }


    function secretColor1() {
 
        const bgColor = 'rgb(255, 0, 255)'; 
        const textColor = 'rgb(0, 255, 255)'; 
        body.style.transition = 'background-color 1s ease, color 1s ease'; 
        body.style.backgroundColor = bgColor;
        heading.style.color = textColor;

    
        popup.classList.add('show');
        popupMessage.textContent = "Secret Color 1 Activated!";

        // Hide the popup after 2 seconds
        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }

    
    function secretColor2() {
        
        const bgColor = 'rgb(255, 165, 0)'; 
        const textColor = 'rgb(255, 255, 255)'; 
        body.style.transition = 'background-color 1s ease, color 1s ease'; 
        body.style.backgroundColor = bgColor;
        heading.style.color = textColor;

        
        popup.classList.add('show');
        popupMessage.textContent = "Secret Color 2 Activated!";

        setTimeout(() => {
            popup.classList.remove('show');
        }, 3000);
    }

  
    button.addEventListener('click', changeColors);


    secretButton1.addEventListener('click', secretColor1);
    secretButton2.addEventListener('click', secretColor2);


    closeBtn.addEventListener('click', function () {
        popup.classList.remove('show');
    });
});
