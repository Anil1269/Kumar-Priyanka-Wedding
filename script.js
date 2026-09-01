function openInvitation() {
    const invitation = document.getElementById("invitation");

    if (invitation) {
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================
   COUPLE PHOTO SLIDESHOW
   ========================= */

const photos = [
    "images/couple1.jpg",
    "images/couple2.jpg",
    "images/couple3.jpg",
    "images/couple4.jpg",
    "images/couple5.jpg"
];

let currentPhoto = 0;


/* =========================
   ELEMENTS
   ========================= */

const photoContainer = document.querySelector(".story-photo");
const photoNumber = document.getElementById("photoNumber");
const totalPhotos = document.getElementById("totalPhotos");


/* =========================
   TOTAL PHOTOS
   ========================= */

if (totalPhotos) {
    totalPhotos.textContent = photos.length;
}


/* =========================
   CHANGE PHOTO
   ========================= */

function changePhoto(direction) {

    currentPhoto += direction;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();
}


/* =========================
   SHOW PHOTO
   ========================= */

function showPhoto() {

    if (!photoContainer) {
        return;
    }

    photoContainer.innerHTML = `
        <img
            src="${photos[currentPhoto]}"
            alt="Kumar & Priyanka"
            class="story-photo-image"
        >
    `;

    const image = photoContainer.querySelector("img");

    if (image) {
        image.addEventListener("error", handleImageError);
    }

    if (photoNumber) {
        photoNumber.textContent = currentPhoto + 1;
    }
}


/* =========================
   MISSING PHOTO
   ========================= */

function handleImageError() {

    if (!photoContainer) {
        return;
    }

    photoContainer.innerHTML = `
        <div class="story-photo-placeholder">
            <span>
                COUPLE PHOTO ${currentPhoto + 1}
            </span>
        </div>
    `;

    if (photoNumber) {
        photoNumber.textContent = currentPhoto + 1;
    }
}


/* =========================
   KEYBOARD NAVIGATION
   ========================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowLeft") {
        changePhoto(-1);
    }

    if (event.key === "ArrowRight") {
        changePhoto(1);
    }

});


/* =========================
   INITIAL PHOTO
   ========================= */

if (photoContainer) {
    showPhoto();
}
