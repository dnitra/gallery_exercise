const gallery = document.querySelector(".gallery");

const images = [
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/london.jpg",
    "London",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/paris.jpg", "Paris"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/new-york.jpg",
    "New York",
  ],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/nova-scotia.jpg",
    "Nova Scotia",
  ],
  ["https://classes.codingbootcamp.cz/assets/classes/1428/tokio.jpg", "Tokio"],
  [
    "https://classes.codingbootcamp.cz/assets/classes/1428/venice.jpg",
    "Venice",
  ],
];

images.forEach((img) => {
  gallery.innerHTML += `
    <div class="gallery__container">
  <img
  class= "gallery__image image__${img[1].replace(/\s/g, "-")}" alt = "${
    img[1]
  }" src = "${img[0]}">
  </img>
  <div class= "image__description">
  <h2>${img[1]}</h2>
  </div>
        </div>`;
});
