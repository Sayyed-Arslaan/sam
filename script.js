const gallery = document.getElementById("gallery");

// 📝 Custom Captions — change as you like!
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
  // Add more as needed
};

for (let i = 10002; i <= 10051; i++) {
  // Skip if image is missing — optional
  if ([10021, 10026, 10028, 10031, 10033, 10035, 10038, 10041, 10044, 10047, 10048, 10051].includes(i)) {
    // continue; // Uncomment if you want to skip certain images
  }

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
