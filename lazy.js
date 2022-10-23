const images = Array.from(document.querySelectorAll('.lazy'));
        
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;

                image.src = image.dataset.src;
                image.classList.add('blur-up-done')
                imageObserver.unobserve(image);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}