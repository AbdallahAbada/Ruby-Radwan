document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    const closeOverlayButtons = document.querySelectorAll(".close-overlay-button");

    readMoreButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetOverlayId = button.getAttribute("data-target");
            const overlay = document.getElementById(targetOverlayId);
            if (overlay) {
                overlay.classList.add("show");
                console.log('Read more clicked');
            } else {
                console.error('Overlay not found');
            }
        });
    });

    closeOverlayButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetOverlayId = button.getAttribute("data-target");
            const overlay = document.getElementById(targetOverlayId);
            if (overlay) {
                overlay.classList.remove("show");
                console.log('Close overlay clicked');
            } else {
                console.error('Overlay not found');
            }
        });
    });
});
