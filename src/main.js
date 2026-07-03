import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import * as pixabay from './js/pixabay-api';
import * as render from './js/render-functions';

let searchText;
const perPage = 15;
let currentPage = 1;

const formEl = document.querySelector('.form');
formEl.addEventListener('submit', e => {
  e.preventDefault();
  searchText = e.currentTarget.elements['search-text'].value.trim();
  searchHeandler();
});

const loadMoreBtnEl = document.querySelector('.load-more-btn');
loadMoreBtnEl.addEventListener('click', () => {
  currentPage += 1;
  loadImages(searchText, currentPage);
});

const searchHeandler = () => {
  render.clearGallery();
  render.hideLoadMoreButton();

  if (!validate(searchText)) {
    showErrorMessage('Please enter a valid query.');
    return;
  }

  loadImages(searchText, currentPage);
};

const loadImages = (searchText, page) => {
  render.showLoader();

  pixabay
    .getImagesByQuery(searchText, page)
    .then(data => {
      const images = data.hits;

      if (images.length === 0) {
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        return;
      } else {
        render.createGallery(images);

        if (currentPage !== 1) {
          scroll();
        }

        if (perPage * currentPage >= data.totalHits) {
          showErrorMessage(
            `We're sorry, but you've reached the end of search results.`
          );
          render.hideLoadMoreButton();
        } else {
          render.showLoadMoreButton();
        }
      }
    })
    .catch(error => {
      console.error(error);
      showErrorMessage('Error while executing request');
    })
    .finally(() => {
      render.hideLoader();
    });
};

function validate(searchText) {
  return searchText;
}

function showErrorMessage(message) {
  iziToast.error({
    message: message,
    position: 'topRight',
    theme: 'dark',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    animateInside: false,
  });
}

function scroll() {
  const galleryItemEl = document.querySelector('.gallery-item');

  window.scrollBy({
    top: galleryItemEl.getBoundingClientRect().height * 2,
    behavior: 'smooth',
  });
}
