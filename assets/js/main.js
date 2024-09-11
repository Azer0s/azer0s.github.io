function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollToAndEnlarge(selector) {
    await timeout(200);
    
    document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth',
    });

    await timeout(300);
    document.querySelector(selector).style.transform = "scale(1.4)";
    await timeout(300);
    document.querySelector(selector).style.transform = "scale(1)";
}

/*
    Event listeners for scrolling to different sections
*/

document.querySelector(".shapes-triangle").addEventListener("click", async function() {
    await scrollToAndEnlarge("#portfolio");
});

document.querySelector(".name").addEventListener("click", async function() {
    await scrollToAndEnlarge("#about");
});

document.querySelector(".profile-pic").addEventListener("click", async function() {
    if (document.getElementById("blog") !== null) {
        await scrollToAndEnlarge("#blog");
    }
});

/*
    Event listeners for hovering over the image
*/

document.querySelector(".image-container").addEventListener("mouseenter", async function() {
    let imageHeight = document.querySelector(".image-container img").clientHeight;

    document.querySelector(".lightbulb").style.transform = `translateY(-${imageHeight*0.7}px)`;
});

document.querySelector(".image-container").addEventListener("mouseleave", async function() {
    document.querySelector(".lightbulb").style.transform = `translateY(0px)`;
});

function resizeLightbulb() {
    let imageHeight = document.querySelector(".image-container img").clientHeight;
    document.querySelector(".lightbulb").style.fontSize = `${imageHeight*0.3}px`;
}

window.onresize = function() {
    resizeLightbulb();
}

resizeLightbulb();