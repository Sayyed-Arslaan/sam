
const gallery = document.getElementById("gallery");

for (let i = 10002; i <= 10051; i++) {
  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;
  img.alt = `Photo ${i}`;
  img.addEventListener('click', () => openLightbox(img.src));
  gallery.appendChild(img);
}
