'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector('nav') as HTMLElement;
    const onScroll = () => {
      nav.style.top = window.scrollY >= 38 ? '0' : '38px';
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const toggle = () => setMenuOpen(v => !v);
  const close = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <Image src="/img/web/logo.png" alt="Tacos Street logo" width={40} height={40} />
          <span className="nav-logo-text">TACOS<span className="dot">&middot;</span>STREET</span>
        </a>
        <ul className="nav-links">
          <li><a href="#carta">Carta</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li><a href="#historia">Historia</a></li>
          <li><a href="#locales">Locales</a></li>
          <li className="nav-order-wrap">
            <span className="nav-order">Pedir ahora</span>
            <div className="order-dropdown">
              <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer"><span className="od-icon">UE</span> Uber Eats</a>
              <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener noreferrer"><span className="od-icon">GL</span> Glovo</a>
              <a href="tel:+34643677898"><span className="od-icon">T</span> Llamar para recoger</a>
            </div>
          </li>
        </ul>
        <button className={`hamburger${menuOpen ? ' active' : ''}`} onClick={toggle} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
  <div className="mm-header">
    <a href="#" className="nav-logo" onClick={close}>
      <Image src="/img/web/logo.png" alt="Tacos Street logo" width={40} height={40} />
      <span className="nav-logo-text">TACOS<span className="dot">&middot;</span>STREET</span>
    </a>
    <button className="mm-close" onClick={close} aria-label="Cerrar menu">✕</button>
  </div>
  <div className="mm-links">
    <a href="#carta" onClick={close}>Carta</a>
    <a href="#nosotros" onClick={close}>Nosotros</a>
    <a href="#comunidad" onClick={close}>Comunidad</a>
    <a href="#historia" onClick={close}>Historia</a>
    <a href="#locales" onClick={close}>Locales</a>
    <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer" className="mm-order" onClick={close}>Uber Eats</a>
    <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener noreferrer" className="mm-order" style={{background:'transparent',color:'var(--y)',border:'2px solid var(--y)'}} onClick={close}>Glovo</a>
    <a href="tel:+34643677898" className="mm-order" style={{background:'transparent',color:'var(--wh)',border:'2px solid #333'}} onClick={close}>Llamar para recoger</a>
  </div>
</div>
    </>
  );
}
