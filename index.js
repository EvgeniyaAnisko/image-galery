const key = 'CYMU9jipkTugjzS6h4eiy9VgL1JKlCFIFYfjq-8aahE'
let query = 'batman'
let url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&tag_mode=all&orientation=landscape&client_id=${key}`;

function updateURL() {
  url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&tag_mode=all&orientation=landscape&client_id=${key}`
}

document.getElementById("input").focus();

async function getData() {
  updateURL()
  const res = await fetch(url);
  const data = await res.json();
  gallery.innerHTML = '';
  for (let i = 0; i < 30; i++) {
    const img = `<img class="gallery-img" src="${data.results[i].urls.regular}" alt="image">`;
    gallery.insertAdjacentHTML('beforeend', img);
  }
}
getData();

const input = document.querySelector('.input')
input.addEventListener('keydown', function (e) {
  if (e.keyCode === 13) {
    if (query != this.value) {
      query = this.value
      getData();
    }
  }
});
