import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader-wraper');
const loadMoreBtnEl = document.querySelector('.load-more-btn');

const gallery = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      img =>
        `<li class="gallery-item">
            <a href="${img.largeImageURL}">
                <img class="gallery-image" src="${img.webformatURL}" alt="${img.tags}">
            </a>
            <div class="gallery-item-legend">
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Likes</h2>
                <p class="gallery-legend-block-value">${img.likes}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Views</h2>
                <p class="gallery-legend-block-value">${img.views}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Comments</h2>
                <p class="gallery-legend-block-value">${img.comments}</p>
              </div>
              <div class="gallery-legend-values-block">
                <h2 class="gallery-legend-block-title">Downloads</h2>
                <p class="gallery-legend-block-value">${img.downloads}</p>
              </div>
            </div>
        </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);

  gallery.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.add('active');
}

export function hideLoader() {
  loaderEl.classList.remove('active');
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.remove('sr-only');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.add('sr-only');
}
