
const slider = document.getElementById('slider');
let direccion = 1; 

function moverLibro() {
   
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    

    if (slider.scrollLeft >= maxScrollLeft - 1) {
        direccion = -1;
    } 

    else if (slider.scrollLeft <= 0) {
        direccion = 1;
    }

  
    slider.scrollBy({
        left: window.innerWidth * direccion,
        behavior: 'smooth'
    });
}


setInterval(moverLibro, 5000);