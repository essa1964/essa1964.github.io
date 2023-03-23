const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const gallery = ['ate.jpg', 'mario.jpg', 'normal.jpg', 'patrick.jpg', 'roblox.png'];

/* Declaring the alternative text for each image file */
const altGallery = ['a sousa eating an innocent person', 'mario', 'just a man standing', 'yassified patrick', 'scary yellow roblox man']

/* Looping through images */
for (let i = 0; i < gallery.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', "images/" + gallery[i]);
    newImage.setAttribute('alt', altGallery[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', changeImage);
    newImage.addEventListener('click', changeImage);
}

function changeImage(e) {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
}

/* Wiring up the Darken/Lighten button */
function changeOverlay() {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}

btn.addEventListener('click', changeOverlay)
