"use client";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { SiUbereats } from "react-icons/si";
import { MdDeliveryDining } from "react-icons/md";

const socials = [
  {
    href: "https://www.instagram.com/tacosstreet.es/",
    icon: FaInstagram,
    name: "Instagram",
    handle: "@tacosstreet.es",
    cta: "Seguir",
    gradient: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
  },
  {
    href: "https://www.tiktok.com/@tacosstreet.es",
    icon: FaTiktok,
    name: "TikTok",
    handle: "@tacosstreet.es",
    cta: "Seguir",
    gradient: "linear-gradient(135deg, #00f2ea, #ff0050)",
  },
  {
    href: "https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg",
    icon: SiUbereats,
    name: "Uber Eats",
    handle: "Tacos Street Las Fuentes",
    cta: "Pedir",
    gradient: "linear-gradient(135deg, #06C167, #05a85a)",
  },
  {
    href: "https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar",
    icon: MdDeliveryDining,
    name: "Glovo",
    handle: "Tacos Street Zaragoza",
    cta: "Pedir",
    gradient: "linear-gradient(135deg, #FFC244, #FFD600)",
  },
];

export default function SocialSection() {
  return (
    <section className="social-section">
      <p className="sec-ey">Siguenos</p>
      <h2 className="sec-title" style={{ fontFamily: "var(--font-anton)" }}>
        Nuestras <span style={{ WebkitTextStroke: "1.5px #fff", color: "transparent" }}>redes</span>
      </h2>
      <div className="social-grid">
        {socials.map((s) => (
          <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="social-card">
            <div className="social-icon-wrap" style={{ background: s.gradient }}>
              <s.icon size={32} color="#fff" />
            </div>
            <span className="social-name" style={{ fontFamily: "var(--font-anton)" }}>{s.name}</span>
            <span className="social-handle">{s.handle}</span>
            <span className="social-follow">{s.cta} &rarr;</span>
          </a>
        ))}
      </div>
    </section>
  );
}
