import { useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ScrollTrigger } from '../utils/gsapConfig';
import { useLenis } from '../hooks/useLenis';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AppLayout() {
  useLenis();
  const location = useLocation();

  useLayoutEffect(() => {
    ScrollTrigger.clearScrollMemory();

    if (!location.hash) {
      window.scrollTo(0, 0);
    }

    const refresh = () => ScrollTrigger.refresh(true);
    refresh();
    const rafId = requestAnimationFrame(refresh);

    return () => cancelAnimationFrame(rafId);
  }, [location.pathname, location.hash]);

  useLayoutEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
