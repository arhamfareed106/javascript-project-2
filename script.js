window.addEventListener("mousemove", function(details) {
    var rect = document.querySelector('#rect');
    var rectWidth = rect.getBoundingClientRect().width;

    // Mapping the mouse X value to the horizontal position of the rect element
    var xval = gsap.utils.mapRange(
        0, // Minimum mouse X position
        window.innerWidth, // Maximum mouse X position
        100, // Minimum rect left position (100px padding)
        100 + rectWidth / 2, // Adjust to the center of the rect
        window.innerWidth - (100 + rectWidth / 2), // Maximum left position
        details.clientX // Current mouse X position
    );

    // Adjust the speed based on proximity to the screen edges
    var mouseDistanceFromEdge = Math.min(details.clientX, window.innerWidth - details.clientX);
    var speed = gsap.utils.mapRange(0, window.innerWidth / 2, 1, 0.3, mouseDistanceFromEdge);

    // Animate the rect element to the new X position with dynamic speed
    gsap.to(rect, {
        left: xval + 'px',
        ease: Power3.easeOut,
        duration: speed // Adjust animation speed dynamically
    });
});
