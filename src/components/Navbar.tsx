import { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../utils/gsapConfig';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > 200 && currentScrollY > lastScrollY.current) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    if (isHidden) {
      gsap.to(navRef.current, { y: '-100%', duration: 0.3, ease: 'power2.inOut' });
    } else {
      gsap.to(navRef.current, { y: '0%', duration: 0.3, ease: 'power2.out' });
    }
  }, [isHidden]);

  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(mobileMenuRef.current, { autoAlpha: 1, duration: 0.3, display: 'flex' });
      gsap.fromTo('.mobile-link', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.4, delay: 0.1 });
    } else {
      gsap.to(mobileMenuRef.current, { autoAlpha: 0, duration: 0.3, display: 'none' });
    }
  }, [isMobileMenuOpen]);

  const navLinks = ['Services', 'Industries', 'About', 'Contact'];

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-bg-elevated/80 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-display font-bold text-xl gradient-text-cyan-gold">eTechLogix</a>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-text-secondary hover:text-accent-cyan transition-colors font-body text-sm font-medium" data-cursor-hover>
                {link}
              </a>
            ))}
          </div>
          <button className="bg-accent-cyan text-bg-primary px-6 py-2.5 rounded-full font-medium hover:bg-accent-cyan-glow transition-colors" data-cursor-hover>
            Let's Talk
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-[60]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-6 h-0.5 bg-text-primary transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        ref={mobileMenuRef}
        className="fixed inset-0 bg-bg-primary/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 z-50"
      >
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            className="mobile-link text-text-primary text-3xl font-display font-medium hover:text-accent-cyan transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link}
          </a>
        ))}
        <button className="mobile-link bg-accent-cyan text-bg-primary px-8 py-3 rounded-full font-medium hover:bg-accent-cyan-glow transition-colors mt-4">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
