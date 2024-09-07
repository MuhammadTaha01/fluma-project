let currentIndex = 0;

function moveSlider(index) {
    const slider = document.getElementById('testimonial-slider');
    const dots = document.querySelectorAll('.dot');
    
    // Prevent unnecessary moves
    if (index === currentIndex) return;

    currentIndex = index;

    // Move the slider
    slider.style.transform = `translateX(-${index * 100}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('bg-[#6078ff]');
            dot.classList.remove('bg-gray-300');
        } else {
            dot.classList.add('bg-gray-300');
            dot.classList.remove('bg-[#6078ff]');
        }
    });
}