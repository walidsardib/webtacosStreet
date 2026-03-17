"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector("nav") as HTMLElement;
    if (!nav) return;
    const onScroll = () => {
      nav.style.top = window.scrollY >= 38 ? "0" : "38px";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <Image src="/img/web/logo.png" alt="Tacos Street logo" width={40} height={40} />
          <span className="nav-logo-text" style={{ fontFamily: "var(--font-anton)" }}>
            TACOS<span className="dot">&middot;</span>STREET
          </span>
        </a>
        <ul className="nav-links">
          <li><a href="#carta">Carta</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#comunidad">Comunidad</a></li>
          <li><a href="#historia">Historia</a></li>
          <li><a href="#locales">Locales</a></li>
          <li className="nav-order-wrap">
            <span className="nav-order" style={{ fontSize: ".78rem", letterSpacing: ".12em", textTransform: "uppercase" }}>
              Pedir ahora
            </span>
            <div className="order-dropdown">
              <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener">
                <span className="od-icon">UE</span> Uber Eats
              </a>
              <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener">
                <span className="od-icon">GL</span> Glovo
              </a>
              <a href="tel:+34643677898">
                <span className="od-icon">T</span> Llamar para recoger
              </a>
            </div>
          </li>
        </ul>
        <button className={`hamburger${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <a href="#carta" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>Carta</a>
        <a href="#nosotros" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>Nosotros</a>
        <a href="#comunidad" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>Comunidad</a>
        <a href="#historia" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>Historia</a>
        <a href="#locales" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>Locales</a>
        <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener" className="mm-order" onClick={close} style={{ fontFamily: "var(--font-anton)" }}>
          Uber Eats
        </a>
        <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener" className="mm-order" onClick={close} style={{ background: "transparent", color: "var(--y)", border: "2px solid var(--y)", fontFamily: "var(--font-anton)" }}>
          Glovo
        </a>
        <a href="tel:+34643677898" className="mm-order" onClick={close} style={{ background: "transparent", color: "var(--wh)", border: "2px solid #333", fontFamily: "var(--font-anton)" }}>
          Llamar para recoger
        </a>
      </div>
    </>
  );
}
