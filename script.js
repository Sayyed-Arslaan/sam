const gallery = document.getElementById("gallery");

// 📝 Custom Captions
const captions = {
  10002: "Her Smile is Magic 💫",
  10003: "Best Day Ever!",
  10004: "Pure Happiness 😄",
  10005: "Golden Hour Glow",
  10006: "Unforgettable Day 💕",
  10007: "Cuteness Overload!",
  10008: "This moment 😍",
  10009: "Elegant & Strong",
  10010: "Sunset Vibes 🌅",
  10011: "Unfiltered Joy!",
  10051: "Forever Grateful 🫶"
  // More captions as needed
};

for (let i = 10002; i <= 10051; i++) {
  const wrapper = document.createElement("div");
  wrapper.className = "img-wrapper";

  const img = document.createElement("img");
  img.src = `images/${i}.jpg`;
  img.alt = `Photo ${i}`;
  img.addEventListener('click', () => openLightbox(img.src));

  const caption = document.createElement("p");
  caption.className = "caption";
  caption.innerText = captions[i] || `Photo ${i}`;

  wrapper.appendChild(img);
  wrapper.appendChild(caption);
  gallery.appendChild(wrapper);
}

// 💡 Open Lightbox
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = src;
  lightbox.classList.remove("hidden");
  document.body.classList.add("no-scroll");
}

// 🛑 Close on Click
document.getElementById("lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
  document.getElementById("lightbox-img").src = "";
  document.body.classList.remove("no-scroll");
});
