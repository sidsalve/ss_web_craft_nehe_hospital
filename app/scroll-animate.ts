// Simple scroll animation utility for Next.js + Tailwind
export function animateOnScroll() {
    if (typeof window === 'undefined') return;
    const revealEls = document.querySelectorAll('[data-animate-on-scroll]');
    const reveal = () => {
        for (const el of revealEls) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                el.classList.add('opacity-100', 'translate-y-0');
                el.classList.remove('opacity-0', 'translate-y-8');
            }
        }
    };
    window.addEventListener('scroll', reveal);
    window.addEventListener('resize', reveal);
    reveal();
}
