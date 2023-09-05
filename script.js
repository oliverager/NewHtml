// JavaScript code for expanding/collapsing printer details

document.addEventListener("DOMContentLoaded", function () {
    const expandButtons = document.querySelectorAll(".expand-button");

    expandButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const printerDetails = button.nextElementSibling;
            printerDetails.classList.toggle("expanded");
        });
    });
});
