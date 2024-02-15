document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more-button");
    const closeOverlayButtons = document.querySelectorAll(".close-overlay-button");
    const overlays = document.querySelectorAll(".overlay");

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

    // Add an event listener for the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            overlays.forEach(function (overlay) {
                overlay.classList.remove("show");
                console.log('Overlay closed with Escape key');
            });
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contact-form");

// form.addEventListener("submit", function (event) {
// event.preventDefault(); // Prevent the default form submission


// Here, you can handle the form data, for example, by sending it to a server or displaying a confirmation message.
// You can use AJAX to send the data to a server.

// Clear the form after submission
// form.reset(); // This will clear all form fields
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);

        // Send form data to the PHP script
        fetch("contact.php", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.text())
            .then((data) => {
                // Display the response from the server in the successMessage div
                successMessage.innerHTML = data;

                // Make the success message element visible
                successMessage.style.display = "block";

                // Add the shine animation class
                successMessage.classList.add("shine-animation");

                // Clear the form after a successful submission
                form.reset();

                // Hide the success message after 3 seconds
                setTimeout(function () {
                    successMessage.style.display = "none";
                }, 3000); // 3000 milliseconds (3 seconds)
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});




