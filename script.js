// Selecting DOM elements
const circleImagesTop = document.querySelectorAll(".circle .topCircle img");
const circleImagesBottom = document.querySelectorAll(".circle .bottomCircle img");
const circleImages = document.querySelectorAll(".cImg");
const centerImageHeadings = document.querySelectorAll(".centerImg h5");
const circles = document.querySelectorAll(".circle");
const centerCircles = document.querySelectorAll(".centerCircle");
const homeImage = document.querySelector("#homeImg");
const overlayGalleryH1 = document.querySelector(".overlay h1#gallery");
const overlayPinkFlareH1 = document.querySelector(".overlay h1#pinkFlare");
const flyingCircle = document.querySelector(".flyingCircle");
const centerImg = document.querySelector(".centerImg");
const pinkBox = document.querySelector(".pinkBox");


// Creating a GSAP timeline
const timeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        scrub: 3,
        pin: true,
        end: "+=3500",
        // end : "bottom -350%",
    },
});

// Animation timeline
timeline

    .to(circleImagesBottom, {
        scale: 0.8,
        rotate: "-180deg",
        stagger: 0.03,
        ease: "power1",
    }, "first")
    .to(circleImagesTop, {
        scale: 0.8,
        ease: "power1",
    }, "first")
    .to(overlayGalleryH1, {
        bottom: "-50%",
        ease: "power1",
    }, "first")
    .to(flyingCircle, {
        top: "50%",
        scale: 1.7,
        ease: "power1",
    }, "first")
    .to(circleImages, {
        scale: 0,
        stagger: 0.03,
        ease: "power1",
    }, "first")
    .to(centerImageHeadings, {
        opacity: 0,
        stagger: 0.03,
        ease: "power1",
    }, "first")
    .to(circles, {
        scale: 0.4,
        ease: "power1",
    }, "first")
    .to(centerCircles, {
        scale: 0.5,
        ease: "power1",
    }, "first")


    .to(overlayPinkFlareH1, {
        bottom: "0%",
        rotate: "0",
        ease: "power1",
    }, "second")
    .to(centerCircles, {
        scale: .4,
        ease: "power1",
    }, "second")


    .to(flyingCircle, {
        opacity: 0,
        ease: "power1",
    }, "third")
    .to(centerCircles, {
        scale: 0,
        ease: "power1",
    }, "third")
    .to(circles, {
        scale: 0,
        ease: "power1",
    }, "third")
    .to(pinkBox, {
        top: "0%",
        ease: "power1",
    }, "third")
    .to(pinkBox, {
        top: "-70%",
        ease: "power1",
    })






const navBlackImg = document.querySelectorAll(".nav .blackImg img");
const navWhiteImg = document.querySelectorAll(".nav .whiteImg img");


const BottomNavBlackImg = document.querySelectorAll(".bottomNav .blackImg img");
const BottomNavWhiteImg = document.querySelectorAll(".bottomNav .whiteImg img");
