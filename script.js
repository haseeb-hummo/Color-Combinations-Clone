// Selecting DOM elements for timeline one function
const circleImagesTop = document.querySelectorAll(".overlay .circle .topCircle img");
const circleImagesBottom = document.querySelectorAll(".overlay .circle .bottomCircle img");
const circleImage = document.querySelectorAll(".cImg");
const centerImageHeadings = document.querySelectorAll(".centerImg h5");
const circles = document.querySelectorAll(".overlay .circle");
const centerCircles = document.querySelectorAll(".centerCircle");
const homeImage = document.querySelector("#homeImg");
const overlayGalleryH1 = document.querySelector(".overlay h1#gallery");
const overlayPinkFlareH1 = document.querySelector(".overlay h1#pinkFlare");
const flyingCircle = document.querySelector(".flyingCircle");
const centerImg = document.querySelector(".centerImg");
const pinkBox = document.querySelector(".pinkBox");

function timelineOne() {

    // Creating a GSAP timeline
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            scrub: true,
            pin: true,
            end: "+=8000",
            // end : "bottom -350%",
        },
    });

    // Animation timeline
    timeline
        .to(centerImg , {
            left : "50.5%",
            duration : 0.2,
        }, "priority")
        .to(centerImg , {
            left : "50%",
            duration : 0.1,
        }, "first")
        .to(circleImagesBottom, {
            scale: 0.8,
            rotate: "-180deg",
            stagger: 0.03,
            ease: "power1",
            delay : -0.03
        }, "first")
        .to(circleImagesTop, {
            scale: 0.8,
            ease: "power1",
            delay : -0.03
        }, "first")
        .to(overlayGalleryH1, {
            bottom: "-50%",
            ease: "power1",
        }, "first")
        .to(circleImage, {
            scale: 0,
            stagger: 0.03,
            delay : 0.03,
            duration : 0.3,
            ease: "power1",
        }, "first") 
        .to(centerImageHeadings, {
            opacity: 0,
            delay : -0.1,
            ease: "power1",
        }, "first")
        .to(flyingCircle, {
            top: "50%",
            scale: 1.7,
            duration : 0.3,
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
        .to(homeImage , {
            scale : 1.4,
            ease: "power1",
        }, "first")


        .to(overlayPinkFlareH1, {
            bottom: "0%",
            rotate: "0",
            ease: "power1",
            delay : -0.2
        }, "second")
        .to(centerCircles, {
            scale: .4,
            ease: "power1",
        }, "second")
        .to(homeImage , {
            scale : 1.2,
            ease: "power1",
        }, "second")


        .to(flyingCircle, {
            opacity: 0,
            ease: "power1",
            duration : 0.2
        }, "third")
        .to(centerCircles, {
            scale: 0,
            ease: "power1",
            duration : 0.3
        }, "third")
        .to(circles, {
            scale: 0,
            ease: "power1",
            duration : 0.3
        }, "third")
        .to(pinkBox, {
            top: "0%",
            ease: "power1",
            delay : -0.1
        }, "third")
        .to(homeImage , {
            scale : 1,
            ease: "power1",
        }, "third")
        .to(pinkBox, {
            top: "-70%",
            ease: "power1",
        })
        
}


function timelineTwo() {

    const timelineTwo = gsap.timeline({
        scrollTrigger: {
            trigger: ".page2",
            start: "top top",
            end: "+=5500",
            // end: "bottom -350%",
            scrub: true,
            pin: true,
        }
    });

    timelineTwo

        .to(".p2Top .circle", {
            top: "50%",
            scale : 1.42,
            stagger : .1
        })
        .to(".p2Top .circle", {
            top: "50%",
            duration : 0.15,
        })
        .to(".p2Top .circle", {
            left: "50%",
            duration : 0.2
        })
        .to(".p2Top .circle", {
            scale: 1,
            duration : 0.2
        })
        .to(".pink", {
            scale: 1.85,
            duration : 0.2
        })
        .to(".pink", {
            scale: 8,
            duration : 0.3
        })
        .to(".p2Top h1", {
            left: "-150%",
            duration : 3.5,
        }, "gradient")
        .to(".p2Top .gradientImg", {
            left: "-100%",
            duration : 3.5,
        }, "gradient")
        .to(".p2Paragraph1" ,{
            opacity : 0,
        })

}

timelineOne();
timelineTwo();





const p2NavImg = document.querySelectorAll(".p2Nav img");


const BottomNavBlackImg = document.querySelectorAll(".bottomNav .blackImg img");
const BottomNavWhiteImg = document.querySelectorAll(".bottomNav .whiteImg img");
