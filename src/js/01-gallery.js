// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

const lstIimg = document.querySelector('.gallery');


const li = galleryItems.map(img=>`
<li class="gallery__item">
   <a class="gallery__link" href=${img.original}>
      <img class="gallery__image" src=${img.preview} alt=${img.description} />
   </a>
</li>
`).join("");

lstIimg.innerHTML=li;
const imgScroll= new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay:250});
imgScroll.on('show.simplelightbox');

