// ✅ Image filenames (updated)
const missing = [10021,10026,10028,10031,10033,10035,10038,10041,10044,10047,10048,10051];
const gallery = document.getElementById('gallery');

// ✅ Captions — add more if needed
const captions = {
  10002: "First Smile 😄",
  10003: "Sunshine in Saree ☀️",
  10004: "Classic Pose ❤️",
  10005: "Elegance overload 💫",
  // Add as many as needed...
};

// ✅ Load all images
for (let i = 10002; i <= 10050; i++) {
  if (missing.includes(i)) continue;

  const wrapper = document.createElement('div');
  wrapper.classList.add('img-wrapper');

  const img = document.createElement('img');
  img.src = `images/${i}.jpg`;
  img.alt = `Photo ${i}`;
  img.setAttribute('data-id', i);

  const caption = document.createElement('div');
  caption.className = 'caption';
  caption.innerText = captions[i] || `Photo ${i}`;

  wrapper.appendChild(img);
  wrapper.appendChild(caption);
  gallery.appendChild(wrapper);
}

// ✅ Lightbox logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

document.querySelectorAll('#gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const imgId = img.getAttribute('data-id');
    lightboxImg.src = img.src;
    lightboxCaption.innerText = captions[imgId] || `Photo ${imgId}`;
    lightbox.classList.remove('hidden');
    document.body.classList.add('no-scroll');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  lightboxCaption.innerText = '';
  document.body.classList.remove('no-scroll');
});
