/* =========================================
   WEDDING WEBSITE
   Kumar & Priyanka
   ========================================= */

:root {
    --ivory: #f8f1e5;
    --cream: #fffaf0;
    --gold: #c9a227;
    --dark-gold: #9a7410;
    --brown: #4b3828;
    --soft-brown: #756250;
}


/* =========================================
   RESET
   ========================================= */

* {
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;

    background: var(--ivory);
    color: var(--brown);

    font-family: 'Montserrat', sans-serif;

    overflow-x: hidden;
}

section {
    width: 100%;
}

h1,
h2,
h3 {
    font-family: 'Cormorant Garamond', serif;
}


/* =========================================
   HERO
   ========================================= */

.hero {
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    position: relative;

    text-align: center;

    padding: 60px 20px;

    background:
        radial-gradient(
            circle at center,
            #fffdf8 0%,
            #f8f1e5 50%,
            #ead9bd 100%
        );

    overflow: hidden;
}


/* Decorative circles */

.hero::before {
    content: "";

    position: absolute;

    width: 650px;
    height: 650px;

    border: 2px solid rgba(201, 162, 39, 0.18);

    border-radius: 50%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    pointer-events: none;
}

.hero::after {
    content: "";

    position: absolute;

    width: 500px;
    height: 500px;

    border: 1px solid rgba(201, 162, 39, 0.20);

    border-radius: 50%;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    pointer-events: none;
}


/* =========================================
   HERO CONTENT
   ========================================= */

.hero-content {
    max-width: 800px;

    width: 100%;

    position: relative;

    z-index: 2;

    display: flex;

    flex-direction: column;

    align-items: center;
}


/* =========================================
   DECORATIONS
   ========================================= */

.decor {
    position: absolute;

    font-family: 'Cormorant Garamond', serif;

    font-size: 35px;

    color: var(--gold);

    opacity: 0.9;

    z-index: 2;
}

.decor-top {
    top: 45px;

    left: 50%;

    transform: translateX(-50%);
}

.decor-bottom {
    bottom: 55px;

    left: 50%;

    transform: translateX(-50%);
}


/* =========================================
   HERO TEXT
   ========================================= */

.eyebrow {
    margin: 0 0 25px;

    color: var(--dark-gold);

    font-size: 11px;

    font-weight: 500;

    letter-spacing: 4px;

    text-transform: uppercase;
}

.ornament {
    margin-bottom: 20px;

    color: var(--gold);

    font-size: 24px;
}

.hero h1 {
    margin: 0;

    color: var(--brown);

    font-size: clamp(60px, 10vw, 110px);

    font-weight: 500;

    line-height: 0.9;
}

.hero h1 span {
    display: block;

    margin: 18px 0;

    color: var(--gold);

    font-size: 0.45em;

    font-style: italic;
}

.intro {
    max-width: 550px;

    margin: 40px auto;

    color: var(--soft-brown);

    font-size: 14px;

    line-height: 1.9;
}


/* =========================================
   DATE CARD
   ========================================= */

.date-card {
    display: inline-flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    min-width: 280px;

    padding: 22px 35px;

    margin-bottom: 35px;

    border-top: 1px solid rgba(201, 162, 39, 0.5);

    border-bottom: 1px solid rgba(201, 162, 39, 0.5);
}

.day {
    margin-bottom: 12px;

    color: var(--dark-gold);

    font-size: 10px;

    letter-spacing: 3px;
}

.date {
    display: flex;

    align-items: center;

    gap: 15px;
}

.date > span {
    font-family: 'Cormorant Garamond', serif;

    color: var(--brown);

    font-size: 55px;

    line-height: 1;
}

.date strong {
    display: block;

    color: var(--brown);

    font-size: 13px;

    letter-spacing: 2px;
}

.date small {
    display: block;

    margin-top: 5px;

    color: var(--soft-brown);

    font-size: 11px;

    letter-spacing: 2px;
}

.time {
    margin-top: 14px;

    color: var(--dark-gold);

    font-size: 10px;

    letter-spacing: 2px;
}


/* =========================================
   OPEN INVITATION
   ========================================= */

.open-button {
    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 12px;

    padding: 14px 25px;

    border: 1px solid var(--gold);

    color: var(--brown);

    background: #fffaf0;

    text-decoration: none;

    font-size: 10px;

    letter-spacing: 2px;

    cursor: pointer;

    transition: 0.3s;
}

.open-button:hover {
    background: var(--gold);

    color: #ffffff;

    transform: translateY(-2px);
}

.open-button span {
    font-size: 15px;
}


/* =========================================
   SCROLL TEXT
   ========================================= */

.scroll-text {
    position: absolute;

    bottom: 18px;

    left: 50%;

    transform: translateX(-50%);

    color: var(--soft-brown);

    font-size: 9px;

    letter-spacing: 2px;

    opacity: 0.7;

    white-space: nowrap;
}


/* =========================================
   INVITATION
   ========================================= */

.invitation {
    padding: 100px 20px 90px;

    text-align: center;

    background:
        linear-gradient(
            180deg,
            #fffaf0 0%,
            #f6ead8 100%
        );

    position: relative;
}

.section-label {
    margin: 0 0 15px;

    color: var(--dark-gold);

    font-size: 10px;

    letter-spacing: 4px;

    text-transform: uppercase;
}

.invitation h2,
.story-section h2 {
    margin: 0;

    color: var(--brown);

    font-size: clamp(42px, 7vw, 65px);

    font-weight: 500;
}

.invitation h2 span,
.story-section h2 span {
    color: var(--gold);

    font-size: 0.65em;

    font-style: italic;

    margin: 0 8px;
}

.message {
    max-width: 650px;

    margin: 30px auto 70px;

    color: var(--soft-brown);

    font-size: 14px;

    line-height: 1.9;
}


/* =========================================
   BRIDE & GROOM
   ========================================= */

.couple-section {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 45px;

    max-width: 900px;

    margin: 0 auto 100px;
}

.person-card {
    width: 300px;

    text-align: center;
}

.photo-placeholder {
    width: 240px;

    height: 300px;

    margin: 0 auto 25px;

    border: 2px solid rgba(201, 162, 39, 0.4);

    border-radius: 120px 120px 20px 20px;

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #fffdf8,
            #f0dfc3
        );

    color: var(--soft-brown);

    font-size: 10px;

    letter-spacing: 2px;

    overflow: hidden;
}

.person-card h3 {
    margin: 0 0 10px;

    color: var(--brown);

    font-size: 34px;

    font-weight: 600;
}

.parents {
    margin: 0;

    color: var(--soft-brown);

    font-size: 11px;

    line-height: 1.8;
}

.parents strong {
    color: var(--brown);

    font-weight: 500;
}

.couple-symbol {
    font-family: 'Cormorant Garamond', serif;

    color: var(--gold);

    font-size: 45px;

    font-style: italic;
}


/* =========================================
   EVENTS
   ========================================= */

.events {
    max-width: 1100px;

    margin: 0 auto;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;
}

.event-card {
    padding: 40px 25px;

    border: 1px solid rgba(201, 162, 39, 0.4);

    background:
        linear-gradient(
            145deg,
            #fffdf8,
            #f9eedc
        );

    text-align: center;

    transition: 0.3s;

    position: relative;
}

.event-card:hover {
    transform: translateY(-4px);

    box-shadow:
        0 10px 30px rgba(120, 90, 40, 0.12);
}

.event-title {
    margin: 0 0 20px;

    color: var(--dark-gold);

    font-size: 10px;

    letter-spacing: 3px;

    font-weight: 600;
}

.event-card h3 {
    margin: 0 0 12px;

    color: var(--brown);

    font-size: 27px;

    font-weight: 500;
}

.event-time {
    margin: 0 0 20px;

    color: var(--dark-gold);

    font-size: 12px;

    line-height: 1.8;

    letter-spacing: 1px;
}

.venue {
    margin: 0;

    color: var(--soft-brown);

    font-size: 11px;

    line-height: 1.8;
}

.venue span {
    color: var(--soft-brown);

    font-size: 9px;

    opacity: 0.8;
}


/* =========================================
   LOCATION QR
   ========================================= */

.location-qr {
    margin-top: 25px;

    text-align: center;
}

.qr-placeholder {
    width: 120px;

    height: 120px;

    margin: 0 auto 10px;

    border: 2px dashed var(--gold);

    display: flex;

    align-items: center;

    justify-content: center;

    background: #fffaf0;

    color: var(--dark-gold);

    font-size: 9px;

    letter-spacing: 1px;
}

.location-qr p {
    margin: 0;

    color: var(--dark-gold);

    font-size: 9px;

    letter-spacing: 1.5px;

    text-transform: uppercase;
}


/* =========================================
   OUR STORY
   ========================================= */

.story-section {
    margin-top: 0;

    padding: 100px 20px 90px;

    text-align: center;

    border-top: 2px solid rgba(201, 162, 39, 0.25);

    background:
        radial-gradient(
            circle at center,
            #fffaf0 0%,
            #eadbc4 100%
        );

    position: relative;
}

.story-message {
    max-width: 600px;

    margin: 25px auto 45px;

    color: var(--soft-brown);

    font-size: 13px;

    line-height: 1.9;
}


/* =========================================
   PHOTO SLIDER
   ========================================= */

.photo-slider {
    display: flex;

    align-items: center;

    justify-content: center;

    gap: 25px;

    max-width: 950px;

    margin: 0 auto;
}

.story-photo {
    width: 600px;

    max-width: 75vw;
}

.story-photo-placeholder {
    width: 100%;

    height: 500px;

    border: 2px solid rgba(201, 162, 39, 0.45);

    display: flex;

    align-items: center;

    justify-content: center;

    background:
        linear-gradient(
            145deg,
            #fffdf8,
            #f0dfc3
        );

    color: var(--soft-brown);

    font-size: 10px;

    letter-spacing: 2px;
}

.story-photo-image {
    width: 100%;

    height: 500px;

    object-fit: cover;

    display: block;

    border: 2px solid rgba(201, 162, 39, 0.45);

    padding: 5px;

    background: #fffaf0;
}


/* =========================================
   SLIDER ARROWS
   ========================================= */

.slider-arrow {
    width: 45px;

    height: 45px;

    flex-shrink: 0;

    border: 1px solid var(--gold);

    background: #fffaf0;

    color: var(--dark-gold);

    font-size: 20px;

    cursor: pointer;

    display: flex;

    align-items: center;

    justify-content: center;

    transition: 0.3s;

    position: relative;

    z-index: 5;
}

.slider-arrow:hover {
    background: var(--gold);

    color: #ffffff;

    transform: scale(1.05);
}


/* =========================================
   PHOTO COUNTER
   ========================================= */

.photo-counter {
    margin-top: 18px;

    color: var(--dark-gold);

    font-size: 10px;

    letter-spacing: 2px;

    opacity: 0.8;
}


/* =========================================
   TABLET
   ========================================= */

@media (max-width: 850px) {

    .events {
        grid-template-columns: 1fr;

        max-width: 550px;
    }

}


/* =========================================
   MOBILE
   ========================================= */

@media (max-width: 700px) {

    .hero {
        min-height: 100svh;

        padding: 50px 18px;
    }

    .hero::before {
        width: 400px;

        height: 400px;
    }

    .hero::after {
        width: 320px;

        height: 320px;
    }

    .hero h1 {
        font-size: 65px;
    }

    .intro {
        font-size: 13px;

        margin: 30px auto;
    }

    .date-card {
        min-width: 250px;

        padding: 20px 25px;
    }


    /* Invitation */

    .invitation {
        padding: 70px 15px 60px;
    }

    .message {
        margin-bottom: 50px;

        font-size: 13px;
    }


    /* Bride & Groom */

    .couple-section {
        flex-direction: column;

        gap: 25px;

        margin-bottom: 70px;
    }

    .person-card {
        width: 100%;
    }

    .photo-placeholder {
        width: 210px;

        height: 260px;
    }

    .person-card h3 {
        font-size: 30px;
    }

    .couple-symbol {
        font-size: 35px;
    }


    /* Events */

    .event-card {
        padding: 35px 20px;
    }


    /* Story */

    .story-section {
        padding: 70px 10px 60px;
    }

    .story-message {
        margin-bottom: 35px;

        font-size: 12px;
    }

    .photo-slider {
        gap: 8px;
    }

    .story-photo {
        max-width: 72vw;
    }

    .story-photo-placeholder,
    .story-photo-image {
        height: 420px;
    }

    .slider-arrow {
        width: 38px;

        height: 38px;

        font-size: 17px;
    }

}


/* =========================================
   SMALL MOBILE
   ========================================= */

@media (max-width: 420px) {

    .hero h1 {
        font-size: 56px;
    }

    .date-card {
        min-width: 230px;
    }

    .date > span {
        font-size: 48px;
    }

    .story-photo {
        max-width: 70vw;
    }

    .story-photo-placeholder,
    .story-photo-image {
        height: 360px;
    }

    .slider-arrow {
        width: 34px;

        height: 34px;

        font-size: 15px;
    }

}
