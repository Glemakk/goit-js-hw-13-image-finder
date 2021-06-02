import './sass/main.scss';

import './js/api';
import './js/fetchImgCards';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// const instance = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// instance.show();

const galleryContainer = document.querySelector('.js-gallery-container');
galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(event) {
  const imgEl = event.target.classList.contains('img-element');
  if (!imgEl) {
    return;
  }
  //   console.log(event.target.dataset.largesize);
  const largeImg = event.target.dataset.largesize;
  const instance = basicLightbox.create(`
    <img src=${largeImg}>
`);

  instance.show();
}
