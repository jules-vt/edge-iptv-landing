// Optimized Language switching functionality
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.detectCurrentLanguage();
        this.init();
    }

    detectCurrentLanguage() {
        const htmlLang = document.documentElement.getAttribute('lang');
        const currentPath = window.location.pathname;
        return (htmlLang === 'fr' || currentPath.includes('/fr/')) ? 'fr' : 'en';
    }

    init() {
        this.langButtons = document.querySelectorAll('.lang-btn');
        
        // Use event delegation for better performance
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                const lang = e.target.getAttribute('data-lang');
                this.switchLanguage(lang);
            }
        });

        this.updateActiveButton();
    }

    switchLanguage(lang) {
        // Don't switch if we're already on the target language
        if (this.currentLang === lang) {
            return;
        }
        
        this.currentLang = lang;
        
        // Tutorial pages use the same translation system as other pages
        // No special redirections needed
        
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        
        // Update all translatable elements
        const elements = document.querySelectorAll('[data-fr][data-en]');
        elements.forEach(element => {
            const text = element.getAttribute(`data-${lang}`);
            if (text) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        });

        // Update page title
        const titles = {
            en: 'EDGE IPTV - Your all-in-one IPTV player',
            fr: 'EDGE IPTV - Votre lecteur IPTV tout-en-un'
        };
        document.title = titles[lang];

        // Update meta description
        const descriptions = {
            en: 'Edge IPTV is your all-in-one IPTV player, designed for speed, simplicity and a smooth viewing experience.',
            fr: 'Edge IPTV est votre lecteur IPTV tout-en-un, conçu pour la vitesse, la simplicité et une expérience de visionnage fluide.'
        };
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.setAttribute('content', descriptions[lang]);
        }

        // Update active button
        this.updateActiveButton();

        // Store preference
        localStorage.setItem('edgeIptvLang', lang);
    }

    updateActiveButton() {
        this.langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            }
        });
    }

    // Load saved language preference
    loadSavedLanguage() {
        const savedLang = localStorage.getItem('edgeIptvLang');
        if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
            this.switchLanguage(savedLang);
        }
    }
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Animate elements on scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all feature cards and screenshot items
    const animatedElements = document.querySelectorAll('.feature-card, .screenshot-item, .cta-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Add loading animation
function initPageLoading() {
    // Add fade-in animation to hero content
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    if (heroContent && heroImage) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateX(-30px)';
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroImage.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateX(0)';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 100);
    }
}

// Add hover effects for interactive elements
function initHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add CSS for ripple effect
function addRippleCSS() {
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize language switcher
    const languageSwitcher = new LanguageSwitcher();
    languageSwitcher.loadSavedLanguage();
    
    // Initialize other features
    initSmoothScrolling();
    initScrollAnimations();
    initHeaderScroll();
    initPageLoading();
    initHoverEffects();
    addRippleCSS();
});

// Optimized keyboard navigation support
const keyboardHandler = (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
        document.removeEventListener('keydown', keyboardHandler);
        document.addEventListener('mousedown', () => {
            document.body.classList.remove('keyboard-navigation');
        }, { once: true });
    }
};
document.addEventListener('keydown', keyboardHandler);

// Add CSS for keyboard navigation (inline for performance)
const style = document.createElement('style');
style.textContent = 'body.keyboard-navigation *:focus{outline:2px solid #007AFF;outline-offset:2px}body:not(.keyboard-navigation) *:focus{outline:none}';
document.head.appendChild(style);
