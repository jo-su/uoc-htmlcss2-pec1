/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import 'keen-slider/keen-slider.min.css';
import KeenSlider from 'keen-slider';

/**
 * Write any other JavaScript below
 */

+( function() {
  feather.replace();

  var sliderRecetas = new KeenSlider("#mis-recetas-slider", {
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: { perView: 1 },
  });

  document.getElementById("recetasPrev").addEventListener("click", sliderRecetas.prev);
  document.getElementById("recetasNext").addEventListener("click", sliderRecetas.next);

  var sliderExperiencias = new KeenSlider("#experiencias-gastronomicas-slider", {
    breakpoints: {
      "(min-width: 300px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 700px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 15 },
      },
    },
    slides: { perView: 1 },
  });

  document.getElementById("experienciasPrev").addEventListener("click", sliderExperiencias.prev);
  document.getElementById("experienciasNext").addEventListener("click", sliderExperiencias.next);

  
} )();
