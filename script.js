function openInvitation() {
    const invitation = document.getElementById("invitation");

    if (invitation) {
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================================
Wedding Website - JavaScript
Kumar & Priyanka
========================================= */

/* =========================================
Couple Photo Slideshow
========================================= */

/*
Photos will be added later.

Create an "images" folder and add:

couple1.jpg
couple2.jpg
couple3.jpg
couple4.jpg
couple5.jpg
*/

const photos = [
"images/couple1.jpg",
"images/couple2.jpg",
"images/couple3.jpg",
"images/couple4.jpg",
"images/couple5.jpg"
];

let currentPhoto = 0;

/* =========================================
Get Elements
========================================= */

const photoContainer =
document.querySelector(".story-photo");

const photoNumber =
document.getElementById("photoNumber");

const totalPhotos =
document.getElementById("totalPhotos");

/* =========================================
Total Photos
========================================= */

if (totalPhotos) {

```
totalPhotos.textContent = photos.length;
```

}

/* =========================================
Change Photo
========================================= */

function changePhoto(direction) {

```
currentPhoto += direction;


/* Previous from first photo */

if (currentPhoto < 0) {

    currentPhoto = photos.length - 1;

}


/* Next from last photo */

if (currentPhoto >= photos.length) {

    currentPhoto = 0;

}


showPhoto();
```

}

/* =========================================
Show Photo
========================================= */

function showPhoto() {

```
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


if (photoNumber) {

    photoNumber.textContent =
        currentPhoto + 1;

}
```

}

/* =========================================
Missing Photo Handling
========================================= */

function handleImageError() {

```
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

    photoNumber.textContent =
        currentPhoto + 1;

}
```

}

/* =========================================
Detect Image Loading Errors
========================================= */

if (photoContainer) {

```
photoContainer.addEventListener(
    "error",
    function (event) {

        if (event.target.tagName === "IMG") {

            handleImageError();

        }

    },
    true
);
```

}

/* =========================================
Keyboard Navigation
========================================= */

document.addEventListener(
"keydown",
function (event) {

```
    if (event.key === "ArrowLeft") {

        changePhoto(-1);

    }


    if (event.key === "ArrowRight") {

        changePhoto(1);

    }

}
```

);

