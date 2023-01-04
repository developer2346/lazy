const images = Array.from(document.querySelectorAll('.lazy'));
const shouldLazyload = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

if (('IntersectionObserver' in window) && shouldLazyload) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;     

                image.src = image.dataset.src;   

                image.addEventListener('load', () => {
                    image.classList.add('blur-up-done')
                }, { once: true })

                imageObserver.unobserve(image);

            }
        });
    });
    images.forEach(img => imageObserver.observe(img));
} else {
    images.forEach(img => {
        img.src = img.dataset.src;  
        img.classList.remove('blur-up')
    });
}