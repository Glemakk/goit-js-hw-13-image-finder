// const options = {
//   headers: {
//     Autorization: 21790462 - 'd81f7d941fc30814a1e9b910b',
//   },
// };
// import { BASE_URL, API_KEY } from './constants';
// const basicLightbox = require('basiclightbox');

import cardMarkupTpl from '../templates/card-markup.hbs';

import ApiService from './apiService';

const apiService = new ApiService();

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '21790462-d81f7d941fc30814a1e9b910b';

const refs = {
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  cardsMarkup: document.querySelector('.gallery'),
  img: document.querySelector('.imgCard'),
};

refs.searchForm.addEventListener('submit', onSearchForm);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearchForm(e) {
  e.preventDefault();
  //   clearPictureContainer();

  apiService.query = e.currentTarget.elements.query.value;

  if (apiService.query === '') {
    return alert('Write some word.');
  }
  apiService.resetPage();

  apiService.fetchImages().then(hits => {
    clearPictureContainer();
    renderCardMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');
  });
  //   const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${API_KEY}`;

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(console.log);
}

function onLoadMore() {
  apiService
    .fetchImages()
    .then(renderCardMarkup)
    .then(data => {
      refs.loadMoreBtn.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    });
}

// fetch(
//   `${BASE_URL}?image_type=photo&orientation=horizontal&q=cats&page=1&per_page=12&key=${API_KEY}`,
// )
//   .then(response => response.json())
//   .then(console.log);

function renderCardMarkup(hits) {
  refs.cardsMarkup.insertAdjacentHTML('beforeend', cardMarkupTpl(hits));
}

function clearPictureContainer() {
  refs.cardsMarkup.innerHTML = '';
}
