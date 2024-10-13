document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.get-started');
    const secondPage = document.querySelector('.second-page');

    getStartedButton.addEventListener('click', function(e) {
        e.preventDefault();
        secondPage.scrollIntoView({ behavior: 'smooth' });
    });

    const imageStack = document.querySelector('.image-stack');
    const images = imageStack.querySelectorAll('img');

    imageStack.addEventListener('mouseover', function() {
        images.forEach(img => img.style.transform = 'scale(1.05)');
    });

    imageStack.addEventListener('mouseout', function() {
        images.forEach(img => img.style.transform = '');
    });

    // Hide WhatsApp icon when scrolling to the second page
    window.addEventListener('scroll', function() {
        const whatsappIcon = document.querySelector('.whatsapp-icon');
        if (window.scrollY > window.innerHeight) {
            whatsappIcon.style.display = 'none';
        } else {
            whatsappIcon.style.display = 'flex';
        }
    });
});