// Image numbers (10002 to 10050 with missing numbers handled)
const validImageNumbers = [
  10002, 10003, 10004, 10005, 10006, 10007, 10008, 10009, 10010,
  10011, 10012, 10013, 10014, 10015, 10016, 10017, 10018, 10019, 10020,
  10021, 10022, 10023, 10024, 10025, 10026, 10027, 10028, 10029, 10030,
  10031, 10032, 10033, 10034, 10035, 10036, 10037, 10038, 10039, 10040,
  10041, 10042, 10043, 10044, 10045, 10046, 10049, 10050
];

// Optional: Custom captions for each image (you can edit these)
const captions = {
  10002: "First memory 💫",
  10003: "Smile that shines 🌟",
  10004: "Always joyful 😄",
  10005: "Forever besties ❤️",
  // Add more custom captions as needed...
};

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let lightboxCaption = document.getElementById("lightbox-caption");

// If caption div doesn't exist, create and append
if (!lightboxCaption) {
  lightboxCaption = document.createElement("div");
  lightboxCaption.id = "lightbox-caption";
  lightbox.appendChild(lightboxCaption);
}

// Load images dynamically
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

  // Add click event for full view
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxCaption.textContent = img.dataset.caption;
    lightbox.classList.remove("hidden");
    document.body.classList.add("no-scroll");
  });
});

// Close lightbox on click
lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden");
  document.body.classList.remove("no-scroll");
});
