const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21790462-d81f7d941fc30814a1e9b910b';

export default class ApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    console.log(this);
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.incrementPage();
        return data.hits;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
