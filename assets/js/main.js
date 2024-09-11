function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function scrollToAndEnlarge(selector) {
    let element = document.querySelector(selector);
    await timeout(200);
    
    element.scrollIntoView({ 
        behavior: 'smooth',
    });

    await timeout(300);
    element.style.transform = "scale(1.4)";
    await timeout(300);
    element.style.transform = "scale(1)";
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

    let lightbulb = document.querySelector(".lightbulb");
    lightbulb.style.transform = `translateY(-${imageHeight*0.7}px)`;
});

document.querySelector(".image-container").addEventListener("mouseleave", async function() {
    let lightbulb = document.querySelector(".lightbulb");
    lightbulb.style.transform = `translateY(0px)`;
});

function resizeLightbulb() {
    let imageHeight = document.querySelector(".image-container img").clientHeight;

    let lightbulb = document.querySelector(".lightbulb");
    lightbulb.style.fontSize = `${imageHeight*0.3}px`;
}

window.onresize = function() {
    resizeLightbulb();
}

for (let heading of document.querySelectorAll("h2")) {
    let upArrow = document.createElement("span");
    upArrow.classList.add("iconify-inline");
    upArrow.classList.add("up-arrow");
    upArrow.setAttribute("data-icon", "codicon:fold-up");

    heading.appendChild(upArrow);
}

resizeLightbulb();
setTimeout(() => {
    for (let svg of document.querySelectorAll("h2 > svg")) {
        svg.addEventListener("click", async function() {
            await timeout(200);
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
}, 0);