let indice = 1;
muestraSlide(indice);

function avanzaSlide(n) {
  muestraSlide((indice += n));
}
function posicionSlide(n) {
  muestraSlide((indice = n));
}

setInterval(function timer() {
  muestraSlide((indice += 1));
}, 3300);

function muestraSlide(n) {
  let i;
  let slides;
  let barras;
  slides = document
    .getElementById("slider_contenedor")
    .getElementsByClassName("miSlider_fade");
  barras = document.getElementById("barras").getElementsByClassName("barra");

  if (n > slides.length) {
    indice = 1;
  }
  if (n < 1) {
    indice = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides.length; i++) {
    barras[i].ClassName = barras[i].className.replace("activated", "");
  }
  slides[indice - 1].style.display = "block";
  barras[indice - 1].className += "  activated";
}
