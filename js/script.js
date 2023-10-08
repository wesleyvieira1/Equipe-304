const pins = document.querySelectorAll(".pin");

pins.forEach((pin) => {
    pin.addEventListener("mouseenter", function () {
        const link = this.getAttribute("data-link");
        window.location.href = link;
    });
});
