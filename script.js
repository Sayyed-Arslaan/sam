const validImageNumbers = [];
for (let i = 10002; i <= 10050; i++) {
  if (![10048, 10047, 10044, 10041, 10038, 10035, 10033, 10031, 10028, 10026, 10021].includes(i)) {
    validImageNumbers.push(i);
  }
}

// Optional captions
const captions = {
  10002: "The beginning of memories 🌸",
  10005: "Unforgettable laugh 😂",
  10010: "Shining bright 🌟",
  10020: "Our favorite click 💕",
  10050: "Best forever 💖"
};

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");

validImageNumbers.forEach(num => {
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("img-wrapper");

  const img = document.createElement("img");
  img.src = `images/${num}.jpg`;
  img.alt = `Photo ${num}`;
  img.dataset.caption = captions[num] || "A beautiful memory ✨";

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = img.dataset.caption;

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(caption);
  gallery.appendChild(imgWrapper);

  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption;
    lightbox.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  });
});

lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});

