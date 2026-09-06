// --- Menu burger (mobile/tablette) ---
document.addEventListener("DOMContentLoaded", () => {
    const burgerBtn = document.getElementById('burgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!burgerBtn || !mobileMenu) return;
    const burgerIcon = burgerBtn.querySelector('i');

    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            burgerIcon.className = 'fas fa-times';
        } else {
            burgerIcon.className = 'fas fa-bars';
        }
    });

    // Ferme le menu mobile automatiquement quand on clique un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            burgerIcon.className = 'fas fa-bars';
        });
    });
});

// --- HERO : apparition en cascade dès le chargement de la page ---
document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    // On attend deux frames pour être sûr que le navigateur applique
    // bien l'état initial (opacity:0) avant de déclencher la transition.
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            heroSection.classList.add('hero-loaded');
        });
    });
});

// --- Animations d'apparition au scroll (About) ---
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = { root: null, rootMargin: "0px", threshold: 0.15 };

    const aboutObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.image-center-box, .image-right-box, .image-small-box, .about-header');
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)";
        aboutObserver.observe(el);
    });
});

// --- Services : apparition en cascade ---
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.service-card');
    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        cardObserver.observe(card);
    });
});

// --- Trainers : apparition en cascade ---
document.addEventListener("DOMContentLoaded", () => {
    const trainers = document.querySelectorAll('.trainer-card');
    const trainerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });

    trainers.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        trainerObserver.observe(card);
    });
});

// --- Pricing : apparition douce ---
document.addEventListener("DOMContentLoaded", () => {
    const pricingCard = document.querySelector('.pricing-card');
    const pricingObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (pricingCard) {
        pricingCard.style.opacity = "0";
        pricingCard.style.transform = "translateY(40px)";
        pricingCard.style.transition = "opacity 0.8s cubic-bezier(0.215, 0.610, 0.355, 1), transform 0.8s cubic-bezier(0.215, 0.610, 0.355, 1)";
        pricingObserver.observe(pricingCard);
    }
});

// --- Testimonials : apparition en cascade des cartes ---
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.testimonial-card');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 120);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.7s ease, transform 0.7s ease";
        observer.observe(card);
    });
});

// --- Blog : apparition en cascade des cartes ---
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.blog-card');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }, index * 100);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
    });
});

// --- Carte de localisation : apparition douce ---
document.addEventListener("DOMContentLoaded", () => {
    const mapCard = document.querySelector('.map-card');
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    if (mapCard) {
        mapCard.style.opacity = "0";
        mapCard.style.transform = "translateY(30px)";
        mapCard.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        observer.observe(mapCard);
    }
});

// --- COMPTEURS ANIMÉS : les chiffres montent de 0 jusqu'à leur valeur finale ---
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.count-number');
    if (!counters.length) return;

    const animateCounter = (el) => {
        const target = parseFloat(el.dataset.target || "0");
        const decimals = parseInt(el.dataset.decimals || "0", 10);
        const prefix = el.dataset.prefix || "";
        const suffix = el.dataset.suffix || "";
        const duration = 1800; // ms
        const startTime = performance.now();

        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic : demarre vite puis ralentit doucement a la fin
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentValue = target * eased;

            el.textContent = prefix + currentValue.toFixed(decimals) + suffix;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = prefix + target.toFixed(decimals) + suffix;
            }
        };

        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(el => counterObserver.observe(el));
});

// --- MENU BURGER (ouverture / fermeture de l'overlay mobile) ---
const burgerBtn = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Ferme le menu mobile quand on clique sur un lien
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
}

// --- NAV QUI RESTE FIXE EN HAUT ET SE REPLIE AU SCROLL ---
// En scrollant vers le bas : les liens disparaissent et le bouton burger apparait (meme sur PC).
// En remontant : tout revient exactement comme avant.
const mainHeader = document.querySelector('.main-header');
const navbar = document.querySelector('.navbar');

if (mainHeader && navbar) {
    let lastScrollY = window.scrollY;
    const SCROLL_THRESHOLD = 60; // distance avant que la nav commence a se replier

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // Ombre legere sous la nav des qu'on quitte le haut de la page
        if (currentScrollY > 10) {
            mainHeader.classList.add('is-scrolled');
        } else {
            mainHeader.classList.remove('is-scrolled');
        }

        if (currentScrollY > lastScrollY && currentScrollY > SCROLL_THRESHOLD) {
            // On scrolle vers le bas -> on replie les liens dans le burger
            navbar.classList.add('links-collapsed');
        } else if (currentScrollY < lastScrollY) {
            // On remonte -> retour a l'affichage normal
            navbar.classList.remove('links-collapsed');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}
