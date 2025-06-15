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
  10020: " click 💕",
  10050: "Best forever 💖",
  10003: "My person, always 💫",
10004: "Soft hearts and loud laughs 💕",
10006: "Smiles that feel like home 🏡",
10007: "Pure joy in one frame 🥹",
10008: "You, me, and everything in between ✨",
10009: "This moment is forever 🤍",
10011: "Can’t stop looking at this one 😍",
10012: "The day felt perfect — because of you ☀️",
10013: "Softness lives here 🧸",
10014: "One of my favorites, always 📸",
10015: "You’re literally the main character 🎬",
10016: "Just you being you — and that’s everything 🫶",
10017: "A hug, without touching 🤍",
10018: "I could stare at this forever 🌈",
10019: "A memory wrapped in light ✨",
10021: "You shine without trying 🌟",
10022: "If smiles were safe spaces 🧡",
10023: "You don’t even know how loved you are 💗",
10024: "Feels like you paused time here ⏳",
10025: "My soft corner in one picture 🎀",
10026: "Forever my favorite face 🥰",
10027: "You make memories magical ✨",
10028: "Captured love, unspoken ❤️",
10029: "Proof that angels exist 😇",
10030: "Some pictures feel like hugs 🤗",
10031: "Real ones, real smiles 😊",
10032: "I still remember how I felt here 🫂",
10033: "A small moment, a big feeling 💭",
10034: "Cutest chaos together 😄",
10035: "That glow is pure you 🌷",
10036: "How can someone be this perfect? 😍",
10037: "The laugh that saves me every time 💞",
10038: "You just… fit into my life 🤍",
10039: "Sweetest memory frozen in time 🍬",
10040: "Captured comfort ✨",
10041: "One look, all the feels 💫",
10042: "You’re the reason this photo is special 📷",
10043: "Little things, big memories 🌸",
10044: "Soft edges, warm hearts ❤️‍🔥",
10045: "Not just a photo, it’s a feeling 🖼️",
10046: "You glow different, pookie 🌟",
10047: "Best parts of life look like this 🧁",
10048: "Forever my safe person 🛡️",
10049: "You’re the beauty in this frame 💖",
10051: "The calm in all my storms 🌧️☀️",
10052: "You and me — always a vibe 🫶"

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
  img.dataset.caption = captions[num] || "A beautiful Pookie (chomu) ✨";

  const caption = document.createElement("div");
  caption.classList.add("caption");
  caption.textContent = img.dataset.caption;

  imgWrapper.appendChild(img);
  imgWrapper.appendChild(caption);
  gallery.appendChild(imgWrapper);
// Ensure music plays on first user interaction
document.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music && music.paused) {
    music.play().catch(e => console.log("Music play blocked:", e));
  }
}, { once: true });

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
