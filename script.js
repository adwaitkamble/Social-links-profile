document.addEventListener('DOMContentLoaded', () => {

    // Ripple effect on social link buttons
    const links = document.querySelectorAll('.social-links a');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Create ripple element
            const ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.pointerEvents = 'none';

            link.style.position = 'relative';
            link.style.overflow = 'hidden';

            const rect = link.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left) + 'px';
            ripple.style.top = (e.clientY - rect.top) + 'px';

            link.appendChild(ripple);

            // Only prevent default if link has a real URL
            const href = link.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                setTimeout(() => {
                    window.open(href, link.getAttribute('target') || '_self');
                }, 300);
            }

            setTimeout(() => ripple.remove(), 600);
        });

        // Avatar wobble on click
        const avatar = document.querySelector('.avatar');
        avatar.addEventListener('click', () => {
            avatar.style.animation = 'none';
            avatar.offsetHeight; // trigger reflow
            avatar.style.animation = 'wobble 0.5s ease';
        });

        // Add keyboard focus outlines for accessibility
        links.forEach(link => {
            link.addEventListener('focus', () => {
                link.style.outline = '2px solid hsl(75, 94%, 57%)';
                link.style.outlineOffset = '2px';
            });
            link.addEventListener('blur', () => {
                link.style.outline = 'none';
            });
        });

    });
