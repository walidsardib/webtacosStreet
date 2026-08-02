import Nav from './components/Nav';
import MenuSection from './components/MenuSection';
import ScrollAnimations from './components/ScrollAnimations';
import InfoSection from './components/InfoSection';
import TacoBuilder from './components/TacoBuilder';
import MobileCarousel from './components/MobileCarousel';
import ContactForm from './components/ContactForm';
import SocialSection from '../components/SocialSection';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiUbereats, SiGlovo } from 'react-icons/si';

// const igPhotos = ['ig_12', 'ig_07', 'ig_08', 'ig_09', 'ig_10', 'ig_11', 'ig_14', 'ig_15'];

export default function Home() {
  return (
    <>
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[0, 1].map(i => (
            <div className="ticker-item" key={i}>
              The Original French Tacos &nbsp;&bull;&nbsp; Made for Game-Changers &nbsp;&bull;&nbsp; Zaragoza &nbsp;&bull;&nbsp; L-J y D: 13:00-23:30 &nbsp;&bull;&nbsp; V-S: 12:30-00:30 &nbsp;&bull;&nbsp; Menu estudiante 5,90 mar-jue 13:00-16:00 &nbsp;&bull;&nbsp; Las Fuentes &middot; El Actur &nbsp;&bull;&nbsp; #TacoJonudo &nbsp;&bull;&nbsp; Pide a domicilio en Uber Eats y Glovo &nbsp;&bull;
            </div>
          ))}
        </div>
      </div>

      <Nav />

      {/* Hero */}
      <section className="hero hero-svg" id="inicio">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/nuevas/tacos-web-banner.svg" alt="Tacos Street - The Original French Tacos Zaragoza" className="hero-banner-svg" />
        <div className="cta-row">
          <a href="#carta" className="btn-y">Ver la carta</a>
          <a href="#locales" className="btn-g">Donde encontrarnos</a>
          <div className="cta-delivery">
            <span className="cta-del-label">Pedir a domicilio</span>
            <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer" className="cta-del-icon" aria-label="Pedir en Uber Eats">
              <SiUbereats size={17} />
            </a>
            <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener noreferrer" className="cta-del-icon" aria-label="Pedir en Glovo">
              <SiGlovo size={17} />
            </a>
          </div>
        </div>
        <div className="stats-bar">
          <div className="stat"><span className="stat-n">2</span><span className="stat-l">Locales en Zaragoza</span></div>
          <div className="stat"><span className="stat-n">200+</span><span className="stat-l">Combinaciones posibles</span></div>
          <div className="stat"><span className="stat-n">4.7</span><span className="stat-l">Google Reviews</span></div>
          <div className="stat"><span className="stat-n">DELIVERY</span><span className="stat-l">Uber Eats &middot; Glovo &middot; Recogida</span></div>
        </div>
      </section>

      {/* Brand strip */}
      <div className="brand-strip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/SVG-WEB-TACOS-STREET/recurso-game-changer.svg" alt="Game Changer" className="strip-icon" />
        <div className="strip-title">MADE FOR<br />GAME-CHANGERS</div>
        <p className="strip-sub">No es un taco mexicano. Es el taco frances autentico de los barrios de Lyon. La receta original. Las salsas de Francia. Aqui, en Zaragoza. #TacoJonudo</p>
      </div>

      {/* Menu */}
      <MenuSection />

      <TacoBuilder />

      {/* Qué es el taco francés */}
      <section className="history-section wif-section" id="historia">
        <div className="what-is-french">
          <div className="wif-l">
            <p className="sec-ey">El concepto</p>
            <h2 className="sec-title">Que es el<br /><span>taco frances?</span></h2>
            <div className="wif-text">
              <p>El <strong>taco frances</strong> nacio en los barrios de <strong>Lyon</strong> a finales de los 2000. Una fusion entre la cocina magrebi, el kebab y la comida callejera francesa. <strong>No tiene nada que ver con el taco mexicano</strong>.</p>
              <p>Es una <strong>tortilla de trigo grande</strong>, rellena de carne (pollo marinado, merguez, cordon bleu, tenders...), <strong>patatas fritas dentro</strong>, salsas francesas exclusivas y queso fundido. Se cierra como un sobre y se <strong>tuesta a la plancha</strong>. Crujiente por fuera, fundente por dentro.</p>
              <p>En Francia es el snack callejero numero uno de la generacion Z. En Espana, hasta hace poco, nadie lo hacia bien. <strong>Tacos Street lo trajo como se hace alli</strong>: receta original, salsas importadas, sin atajos.</p>
            </div>
            <div className="wif-features">
              <div className="wif-feat"><span className="wif-ico">🫓</span><span><strong>Tortilla tostada</strong><br />a la plancha</span></div>
              <div className="wif-feat"><span className="wif-ico">🍟</span><span><strong>Patatas dentro</strong><br />del taco</span></div>
              <div className="wif-feat"><span className="wif-ico">🧀</span><span><strong>Salsa</strong><br />de queso fundido</span></div>
              <div className="wif-feat"><span className="wif-ico">🇫🇷</span><span><strong>Salsas francesas</strong><br />importadas</span></div>
            </div>
          </div>
          <div className="wif-r">
            <div className="wif-mascot-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/SVG-WEB-TACOS-STREET/mascota-taco.svg" alt="Mascota Tacos Street" className="wif-mascot" />
              <div className="wif-speech">
                <span className="wif-speech-t">#TacoJonudo</span>
              </div>
            </div>
            <div className="wif-vs">
              <div className="wif-vs-row"><span className="wif-vs-lbl">Taco mexicano</span><span className="wif-vs-val">Tortilla de maiz, en U, frio</span></div>
              <div className="wif-vs-row"><span className="wif-vs-lbl">Kebab/Durum</span><span className="wif-vs-val">Tortilla enrollada, sin gratinar</span></div>
              <div className="wif-vs-row wif-vs-us"><span className="wif-vs-lbl">Taco frances</span><span className="wif-vs-val">Sobre tostado, gratinado, patatas dentro</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Info: Glosario & Alergenos */}
      <InfoSection />

      {/* Map overview */}
      {/*
      <section className="map-overview-section" id="mapa">
        <div style={{ marginBottom: '3rem' }}>
          <p className="sec-ey">Dónde estamos</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>Encuéntranos <span>en Zaragoza</span></h2>
        </div>
        <div className="loc-overview">
          <div className="loc-overview-head">
            <div>
              <p className="sec-ey" style={{ marginBottom: '.3rem' }}>Localiza nuestros restaurantes</p>
              <div className="loc-overview-title">Tacos Street en el mapa</div>
              <p className="loc-overview-sub">Dos locales en Zaragoza. Las Fuentes (el original) y El Actur. Pincha sobre cada marcador para ver la direccion, horarios y abrir la navegacion.</p>
            </div>
            <div className="loc-overview-pins">
              <span className="loc-pin"><span className="loc-pin-dot" />Las Fuentes &middot; C/ Minas 19</span>
              <span className="loc-pin"><span className="loc-pin-dot" />El Actur &middot; C/ Gabriel Celaya 14</span>
            </div>
          </div>
          <div className="loc-overview-map">
            <iframe
              src="https://www.google.com/maps?q=Tacos+Street+Zaragoza&z=12&output=embed"
              title="Mapa Tacos Street Zaragoza - ambos locales"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      */}

      {/* About */}
      <section className="about" id="nosotros">
        <div className="about-l">
          <p className="sec-ey">Nuestra historia</p>
          <h2 className="sec-title">Tacos Street.<br /><span className="out">Una mision.</span></h2>
          <div className="about-text">
            <p><strong>Tacos Street</strong> nacio en el barrio. Unidos por su cultura, su calle y una obsesion: el taco frances que conocian de Francia y que nadie traia a Espana como Dios manda.</p>
            <p>El <strong>21 de febrero de 2025</strong> abrieron en <strong>Las Fuentes</strong>. Sin redes de distribucion, sin publicidad masiva. Solo receta original, salsas directas de proveedores franceses y actitud. En dias habia colas en la calle.</p>
            <p>En <strong>seis meses</strong>, abrieron el segundo local en el <strong>Actur</strong>. No lo tenian planeado. Zaragoza no les dejo otra opcion. &ldquo;Vosotros nos habeis obligado a abrir&rdquo; &mdash; anunciaron en redes.</p>
          </div>
          <div className="founders">
            <span className="f-tag">Tacos Street</span>
            <span className="f-tag">Zaragoza</span>
            <span className="f-tag">Desde 2025</span>
          </div>
        </div>
        <div className="about-r">
          <div className="about-r-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/Emocionales/Emocional 4.webp" alt="Local Tacos Street Actur" loading="lazy" />
          </div>
          <div className="quote-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">Traemos el concepto, la esencia, la estetica. La receta original, paso a paso. Todas las salsas vienen de proveedores de Francia. Esa es la gran diferencia.</p>
            <span className="quote-meta">&mdash; Tacos Street</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/SVG-WEB-TACOS-STREET/mascota-taco.svg" alt="Mascota Tacos Street" className="quote-mascot" />
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community-section" id="comunidad">
        <p className="sec-ey">Mas que un restaurante</p>
        <h2 className="sec-title">La comunidad</h2>
        <MobileCarousel count={7} scrollClass="community-grid">
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/nuevas/lafusiondelacalle.webp" alt="La Fusion de la Calle Makdurum x Tacos Street" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Sorteo &middot; 300&euro;</span>
              <div className="comm-title">Makdurum x Tacos Street</div>
              <p className="comm-desc">300&euro; en metalico por la cara. @makdurum y @tacosstreet.es juntos. Dos sabores, una sola oportunidad de ganar.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/bikelife.webp" alt="Evento bikelife con Tacos Street" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Bikelife</span>
              <div className="comm-title">Bikelife x Tacos Street</div>
              <p className="comm-desc">Colaboracion con la comunidad bikelife de Espana. Encuentros en la Expo de Zaragoza con tacos y ruedas.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/evento-1v1.webp" alt="Torneo 1v1 futbol Parque Bruil" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-w">Evento</span>
              <div className="comm-title">Torneo 1v1 Futbol</div>
              <p className="comm-desc">Campo Parque Bruil. 275&euro; en premios. Tacos Street x @yessin23_. La calle es nuestra cancha.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/fofana.webp" alt="Fofana TV colaboracion" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-g">Collab</span>
              <div className="comm-title">Fofana TV x Tacos Street</div>
              <p className="comm-desc">Creadores de contenido que son parte de la familia. Game Changers de verdad.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/nuevas/524931565_17872907319399707_7374945463904138356_n.webp" alt="Game Changer con caja" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Game Changer</span>
              <div className="comm-title">Made for Game-Changers</div>
              <p className="comm-desc">La familia crece. Streetwear, tacos y actitud. De la calle pa la calle.</p>
            </div>
          </div>
        </MobileCarousel>
      </section>

      {/* Press */}
      <section className="press-section">
        <div className="press-header">
          <div>
            <p className="sec-ey">En los medios</p>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>Hablan de nosotros</h2>
          </div>
        </div>
        <div className="press-grid">
          <a className="press-card" href="https://www.heraldo.es/noticias/gastronomia/2025/09/28/nuevo-bar-tacos-franceses-actur-zaragoza-1857452.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo" style={{ background: '#fff' }}><img src="/img/medios/heraldo.webp" alt="Heraldo de Aragón" /></div>
            <div className="press-source">Heraldo</div>
            <p className="press-quote">&ldquo;El restaurante de tacos franceses que está revolucionando Zaragoza con la receta auténtica directa de Francia.&rdquo;</p>
            <div className="press-date">Septiembre 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.elperiodicodearagon.com/zaragoza/2025/10/02/taco-street-inaugura-segundo-local-121942247.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/periodicodearagon.webp" alt="Periódico de Aragón" /></div>
            <div className="press-source">Periódico de Aragón</div>
            <p className="press-quote">&ldquo;El fenómeno gastronómico que conquistó Las Fuentes ya tiene su segundo local en Zaragoza.&rdquo;</p>
            <div className="press-date">Octubre 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.hoyaragon.es/articulo/gastrolike/tacos-street-zaragoza/20250922095954109681.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/hoyaragon.webp" alt="Hoy Aragón" /></div>
            <div className="press-source">Hoy Aragón</div>
            <p className="press-quote">&ldquo;Tacos Street conquistó Zaragoza con el taco francés más grande de España y ahora llega al Actur.&rdquo;</p>
            <div className="press-date">Septiembre 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.tiktok.com/@victorprous/video/7569539960160734486" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/victorprous.webp" alt="Víctor Prous" /></div>
            <div className="press-source">Víctor Prous</div>
            <p className="press-quote">&ldquo;Esto podría ser el próximo fenómeno gastronómico urbano de España. Esto puede estar en Primera División.&rdquo;</p>
            <div className="press-date">Noviembre 2025</div>
            <div className="press-cta">Ver video →</div>
          </a>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <p className="sec-ey">Lo que dice Zaragoza</p>
        <h2 className="sec-title">4.7 <span style={{ color: 'var(--y)' }}>&#9733;</span><br />Google Reviews</h2>
        <MobileCarousel count={6} scrollClass="reviews-grid">
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;El taco mas grande que he visto en mi vida. El XXL es una locura, con uno tienes de sobra. La salsa de queso casera esta increible. Volvere seguro.&rdquo;</p><div className="rv-author">&mdash; Javier M. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;El personal super amable, te explican todo si es tu primera vez. Pedi el Django y me conquisto. La cantidad de combinaciones es impresionante. Mi nuevo favorito.&rdquo;</p><div className="rv-author">&mdash; Laura P. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Las bebidas importadas son un plus que no esperaba. La Hawaii esta increible. Probe el Tropical y me volo la cabeza. Conceptualmente muy diferente.&rdquo;</p><div className="rv-author">&mdash; Ahmed S. &middot; Uber Eats</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div><p className="rv-text">&ldquo;Concepto muy diferente a todo lo que hay en Zaragoza. Los jalapenos de queso son adictivos. La relacion calidad-precio es muy buena para lo que te ponen.&rdquo;</p><div className="rv-author">&mdash; Maria C. &middot; TripAdvisor</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Lo que no sabias que necesitabas. El taco frances no tiene nada que ver con el mexicano pero te engancha. Pedi para llevar y llego perfecto. Repito cada semana.&rdquo;</p><div className="rv-author">&mdash; Roberto L. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Vine atraido por los videos de Instagram y no me decepciono. El menu estudiante a 5,90 lunes a viernes es una pasada. Ahora vengo con mis amigos de la uni.&rdquo;</p><div className="rv-author">&mdash; Adrian N. &middot; Instagram</div></div>
        </MobileCarousel>
      </section>

      {/* Instagram */}
      {/*
      <section className="ig-section" id="instagram">
        <div className="ig-header">
          <div>
            <p className="sec-ey">Siguenos en Instagram</p>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>@tacosstreet.es</h2>
          </div>
          <a href="https://www.instagram.com/tacosstreet.es/" target="_blank" rel="noopener noreferrer" className="ig-link">Ver perfil &rarr;</a>
        </div>
        <div className="ig-grid">
          {igPhotos.map(p => (
            <a key={p} href="https://www.instagram.com/tacosstreet.es/" target="_blank" rel="noopener noreferrer">
              <img src={`/img/${p}.webp`} alt="Tacos Street Instagram" loading="lazy" />
            </a>
          ))}
        </div>
        <div className="ig-more">
          <a href="https://www.instagram.com/tacosstreet.es/" target="_blank" rel="noopener noreferrer">Seguir en Instagram &rarr;</a>
        </div>
      </section>
      */}

      {/* Individual location cards */}
      <section className="locations-section" id="locales">
        <p className="sec-ey">Donde encontrarnos</p>
        <h2 className="sec-title">Dos locales<br /><span>en Zaragoza</span></h2>
        <div className="loc-grid">
          <div className="loc-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="loc-img" src="/img/nuevas/lasfuentes.webp" alt="Interior de Tacos Street Las Fuentes" loading="lazy" />
            <div className="loc-num">Local 01 &middot; El original</div>
            <div className="loc-name">Las Fuentes</div>
            <p className="loc-addr">C/ Minas, 19 &middot; Barrio de Las Fuentes</p>
            <div className="loc-info">
              <div><span className="li-label">L-J y D</span><span className="li-val">13:00 &ndash; 23:30</span></div>
              <div><span className="li-label">V-S</span><span className="li-val">12:30 &ndash; 00:30</span></div>
            </div>
            <div className="loc-del"><span className="dp">Uber Eats</span><span className="dp">Glovo</span><span className="dp">Recogida en local</span></div>
            <div className="loc-map">
              <iframe
                src="https://www.google.com/maps?q=Tacos+Street+Calle+Minas+19+Zaragoza&output=embed"
                title="Mapa Tacos Street Las Fuentes"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="loc-actions">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Tacos+Street+Calle+Minas+19+Zaragoza" target="_blank" rel="noopener noreferrer" className="loc-btn">Como llegar &rarr;</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Tacos+Street+Calle+Minas+19+Zaragoza" target="_blank" rel="noopener noreferrer" className="loc-btn-outline">Ver en Google Maps</a>
            </div>
          </div>
          <div className="loc-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="loc-img" src="/img/Emocionales/Emocional 2.webp" alt="Exterior de Tacos Street Actur" loading="lazy" />
            <div className="loc-num">Local 02 &middot; El Actur</div>
            <div className="loc-name">El Actur</div>
            <p className="loc-addr">C/ Gabriel Celaya, 14 &middot; 50018 Zaragoza</p>
            <div className="loc-info">
              <div><span className="li-label">L-J y D</span><span className="li-val">13:00 &ndash; 23:30</span></div>
              <div><span className="li-label">V-S</span><span className="li-val">12:30 &ndash; 00:30</span></div>
            </div>
            <div className="loc-del"><span className="dp">Uber Eats</span><span className="dp">Glovo</span><span className="dp">Recogida en local</span></div>
            <div className="loc-map">
              <iframe
                src="https://www.google.com/maps?q=Tacos+Street+Calle+Gabriel+Celaya+14+Zaragoza&output=embed"
                title="Mapa Tacos Street Actur"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="loc-actions">
              <a href="https://www.google.com/maps/dir/?api=1&destination=Tacos+Street+Calle+Gabriel+Celaya+14+Zaragoza" target="_blank" rel="noopener noreferrer" className="loc-btn">Como llegar &rarr;</a>
              <a href="https://www.google.com/maps/search/?api=1&query=Tacos+Street+Calle+Gabriel+Celaya+14+Zaragoza" target="_blank" rel="noopener noreferrer" className="loc-btn-outline">Ver en Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      <SocialSection />

      <ContactForm />

      {/* Footer */}
      <footer>
        <div className="ft-top">
          <div className="ft-top-t">LISTO PARA<br />TU PRIMER TACO?</div>
          <div className="ft-top-r">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/SVG-WEB-TACOS-STREET/mascota-taco.svg" alt="Mascota Tacos Street" className="ft-mascot" />
            <a href="#carta" className="ft-cta">Ver la carta &rarr;</a>
          </div>
        </div>
        <div className="ft-body">
          <div>
            <div className="ft-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/SVG-WEB-TACOS-STREET/logo-redondo.svg" alt="Tacos Street logo" width={48} height={48} />
              <span className="ft-logo">TACOS<span className="dot">&middot;</span>STREET</span>
            </div>
            <span className="ft-tline">The Original French Tacos &middot; Zaragoza</span>
            <p className="ft-desc">Fundado en 2025 en Zaragoza. La receta autentica del taco frances de Lyon, traida directamente a las calles de Zaragoza. Made for Game-Changers. #TacoJonudo</p>
            <div className="socials">
              <a href="https://www.instagram.com/tacosstreet.es/" className="si" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://www.tiktok.com/@tacosstreet.es" className="si" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok size={18} /></a>
            </div>
          </div>
          <div>
            <div className="ft-col-t">Carta</div>
            <ul className="ft-links"><li><a href="#carta">Tacos Signature</a></li><li><a href="#carta">Taco XXL</a></li><li><a href="#carta">Entrantes</a></li><li><a href="#carta">Bebidas</a></li><li><a href="#carta">Postres</a></li><li><a href="#carta">Menu estudiante</a></li></ul>
          </div>
          <div>
            <div className="ft-col-t">Locales</div>
            <ul className="ft-links"><li><a href="#locales">Las Fuentes &middot; C/Minas 19</a></li><li><a href="#locales">El Actur &middot; C/G.Celaya 14</a></li><li><a href="#mapa">Ver en el mapa</a></li></ul>
          </div>
          <div>
            <div className="ft-col-t">Nosotros</div>
            <ul className="ft-links"><li><a href="#nosotros">Historia</a></li><li><a href="#comunidad">Comunidad</a></li><li><a href="#info">Info & Alergenos</a></li><li><a href="https://www.instagram.com/tacosstreet.es/" target="_blank" rel="noopener noreferrer">Instagram</a></li><li><a href="https://www.tiktok.com/@tacosstreet.es" target="_blank" rel="noopener noreferrer">TikTok</a></li></ul>
          </div>
        </div>
        <div className="ft-bottom">
          <span>&copy; 2026 Tacos Street Zaragoza</span>
          <span>Made for Game-Changers</span>
        </div>
      </footer>

      <ScrollAnimations />
    </>
  );
}
