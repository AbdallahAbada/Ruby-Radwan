document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    const closeOverlayButtons = document.querySelectorAll(".close-overlay-button");

    readMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetOverlayId = button.getAttribute("data-target");
            const overlay = document.getElementById(targetOverlayId);
            overlay.classList.add("show");
            console.log('clicked')
        });
    });

    closeOverlayButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetOverlayId = button.getAttribute("data-target");
            const overlay = document.getElementById(targetOverlayId);
            overlay.classList.remove("show");
            console.log('clicked')
        });
    });
});