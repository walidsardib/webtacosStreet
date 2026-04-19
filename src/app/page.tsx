import Nav from './components/Nav';
import MenuSection from './components/MenuSection';
import ScrollAnimations from './components/ScrollAnimations';
import InfoSection from './components/InfoSection';
import TacoBuilder from './components/TacoBuilder';
import SocialSection from '../components/SocialSection';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import { SiUbereats, SiGlovo } from 'react-icons/si';

const igPhotos = ['ig_01', 'ig_02', 'ig_03', 'ig_07', 'ig_08', 'ig_09', 'ig_10', 'ig_11', 'ig_12', 'ig_14', 'ig_15', 'ig_17', 'ig_18', 'ig_19', 'ig_20'];

export default function Home() {
  return (
    <>
      {/* Ticker */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          {[0, 1].map(i => (
            <div className="ticker-item" key={i}>
              The Original French Tacos &nbsp;&bull;&nbsp; Made for Game-Changers &nbsp;&bull;&nbsp; Zaragoza &nbsp;&bull;&nbsp; Abierto todos los dias 13:00-23:00 &nbsp;&bull;&nbsp; Menu estudiante 5,90 mar-jue 13:00-16:00 &nbsp;&bull;&nbsp; Las Fuentes &middot; El Actur &nbsp;&bull;&nbsp; #TacoJomudo &nbsp;&bull;&nbsp; Pide a domicilio en Uber Eats y Glovo &nbsp;&bull;
            </div>
          ))}
        </div>
      </div>

      <Nav />

      {/* Hero */}
      <section className="hero" id="inicio">
        <div className="hero-bg-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/nuevas/taco alta calidad.jpg" alt="Taco frances Tacos Street - producto estrella" />
        </div>
        <div className="eyebrow">
          <div className="eyebrow-line"></div>
          <span className="eyebrow-text">The Original French Tacos &middot; Zaragoza</span>
          <div className="eyebrow-line"></div>
        </div>
        <h1 className="hero-title">
          <span className="y">TACOS</span><br />
          <span className="out">STREET</span>
        </h1>
        <p className="hero-sub-title">The Original French Tacos</p>
        <div className="cta-row">
          <a href="#carta" className="btn-y">Ver la carta</a>
          <a href="#nosotros" className="btn-g">Nuestra historia</a>
        </div>
        <div className="stats-bar">
          <div className="stat"><span className="stat-n">2</span><span className="stat-l">Locales en Zaragoza</span></div>
          <div className="stat"><span className="stat-n">200+</span><span className="stat-l">Combinaciones posibles</span></div>
          <div className="stat"><span className="stat-n">4.6</span><span className="stat-l">Google Reviews</span></div>
          <div className="stat"><span className="stat-n">DELIVERY</span><span className="stat-l">Uber Eats &middot; Glovo &middot; Recogida</span></div>
        </div>
      </section>

      {/* Brand strip */}
      <div className="brand-strip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/SVG-WEB-TACOS-STREET/recurso-game-changer.svg" alt="Game Changer" className="strip-icon" />
        <div className="strip-title">MADE FOR<br />GAME-CHANGERS</div>
        <p className="strip-sub">No es un taco mexicano. Es el taco frances autentico de los barrios de Lyon. La receta original. Las salsas de Francia. Aqui, en Zaragoza. #TacoJomudo</p>
      </div>

      {/* Menu */}
      <MenuSection />

      {/* Info: Glosario & Alergenos */}
      <InfoSection />

      {/* Delivery banner */}
      <section className="delivery-banner">
        <div>
          <div className="delivery-banner-text">PIDE A DOMICILIO</div>
          <p className="delivery-banner-sub">Te lo llevamos a casa. Disponible en Uber Eats y Glovo desde los dos locales.</p>
        </div>
        <div className="delivery-btns">
          <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer" className="del-btn">Uber Eats &rarr;</a>
          <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener noreferrer" className="del-btn-outline">Glovo &rarr;</a>
          <a href="tel:+34643677898" className="del-btn-outline">Llamar para recoger &rarr;</a>
        </div>
      </section>

      <TacoBuilder />

      {/* Map overview */}
      <section className="map-overview-section" id="mapa">
        <div style={{ marginBottom: '3rem' }}>
          <p className="sec-ey">Dónde estamos</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>Encuéntranos <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>en Zaragoza</span></h2>
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

      {/* Gallery strip */}
      <div className="gallery-strip">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/nuevas/485898107_17855857317399707_981223533762627984_n.jpg" alt="Menu completo Tacos Street" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/web/taco-django.jpg" alt="Taco Django" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/web/interior-mural.jpg" alt="Interior Tacos Street" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/web/gamechangers.jpg" alt="Game Changers" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/web/mural.jpg" alt="Mural street art Tacos Street" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/web/taco-blackweekend.jpg" alt="Taco Street con packaging" loading="lazy" />
      </div>

      {/* About */}
      <section className="about" id="nosotros">
        <div className="about-l">
          <p className="sec-ey">Nuestra historia</p>
          <h2 className="sec-title">Tres amigos.<br /><span className="out">Una mision.</span></h2>
          <div className="about-text">
            <p><strong>Karim, Omar y Amin</strong> son tres amigos del barrio. Unidos por su cultura, su calle y una obsesion: el taco frances que conocian de Francia y que nadie traia a Espana como Dios manda.</p>
            <p>El <strong>21 de febrero de 2025</strong> abrieron en <strong>Las Fuentes</strong>. Sin redes de distribucion, sin publicidad masiva. Solo receta original, salsas directas de proveedores franceses y actitud. En dias habia colas en la calle.</p>
            <p>En <strong>seis meses</strong>, abrieron el segundo local en el <strong>Actur</strong>. No lo tenian planeado. Zaragoza no les dejo otra opcion. &ldquo;Vosotros nos habeis obligado a abrir&rdquo; &mdash; anunciaron en redes.</p>
          </div>
          <div className="founders">
            <span className="f-tag">Karim</span>
            <span className="f-tag">Omar</span>
            <span className="f-tag">Amin</span>
          </div>
        </div>
        <div className="about-r">
          <div className="about-r-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/local-exterior.jpg" alt="Local Tacos Street Actur" loading="lazy" />
          </div>
          <div className="quote-card">
            <div className="quote-icon">&ldquo;</div>
            <p className="quote-text">Traemos el concepto, la esencia, la estetica. La receta original, paso a paso. Todas las salsas vienen de proveedores de Francia. Esa es la gran diferencia.</p>
            <span className="quote-meta">&mdash; Karim & Amin, fundadores</span>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community-section" id="comunidad">
        <p className="sec-ey">Mas que un restaurante</p>
        <h2 className="sec-title">La <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>comunidad</span></h2>
        <div className="community-grid">
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/bikelife.jpg" alt="Evento bikelife con Tacos Street" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Bikelife</span>
              <div className="comm-title">Bikelife x Tacos Street</div>
              <p className="comm-desc">Colaboracion con la comunidad bikelife de Espana. Encuentros en la Expo de Zaragoza con tacos y ruedas.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/evento-1v1.jpg" alt="Torneo 1v1 futbol Parque Bruil" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-w">Evento</span>
              <div className="comm-title">Torneo 1v1 Futbol</div>
              <p className="comm-desc">Campo Parque Bruil. 275&euro; en premios. Tacos Street x @yessin23_. La calle es nuestra cancha.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/fofana.jpg" alt="Fofana TV colaboracion" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-g">Collab</span>
              <div className="comm-title">Fofana TV x Tacos Street</div>
              <p className="comm-desc">Creadores de contenido que son parte de la familia. Game Changers de verdad.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/web/sorteo.jpg" alt="Sorteo camisetas CAN" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Sorteo</span>
              <div className="comm-title">Sorteo Camisetas CAN</div>
              <p className="comm-desc">Copa Africa de Naciones. Camisetas oficiales de Marruecos y Senegal en juego. Futbol y tacos, siempre juntos.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/nuevas/520476954_17871590457399707_8545419620307517054_n.jpg" alt="Grupo torneo futbol con banner" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-w">Evento</span>
              <div className="comm-title">La calle es nuestra cancha</div>
              <p className="comm-desc">Torneo 1v1 en Parque Bruil. 275&euro; en premios. Tacos y futbol, siempre juntos.</p>
            </div>
          </div>
          <div className="comm-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/nuevas/524931565_17872907319399707_7374945463904138356_n.jpg" alt="Game Changer con caja" loading="lazy" />
            <div className="comm-overlay">
              <span className="comm-tag comm-tag-y">Game Changer</span>
              <div className="comm-title">Made for Game-Changers</div>
              <p className="comm-desc">La familia crece. Streetwear, tacos y actitud. De la calle pa la calle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="press-section">
        <div className="press-header">
          <div>
            <p className="sec-ey">En los medios</p>
            <h2 className="sec-title" style={{ marginBottom: 0 }}>Hablan <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>de nosotros</span></h2>
          </div>
        </div>
        <div className="press-grid">
          <a className="press-card" href="https://www.elespanol.com/aragon/vivir/20250408/karim-amin-omar-amigos-revolucionan-zaragoza-nuevo-restaurante-traemos-receta-original-francia/1003743703159_0.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/elespañolaragon.jpg" alt="El Español" /></div>
            <div className="press-source">El Español Aragón</div>
            <p className="press-quote">&ldquo;Karim, Amin y Omar: los amigos que revolucionan Zaragoza con su nuevo restaurante. Traemos la receta original de Francia.&rdquo;</p>
            <div className="press-date">Abril 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.hoyaragon.es/articulo/gastrolike/tacos-street-zaragoza/20250922095954109681.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/hoyaragon.png" alt="Hoy Aragón" /></div>
            <div className="press-source">Hoy Aragón</div>
            <p className="press-quote">&ldquo;Tacos Street conquistó Zaragoza con el taco francés más grande de España y ahora llega al Actur.&rdquo;</p>
            <div className="press-date">Septiembre 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.aragondigital.es/articulo/zaragoza/taco-frances-mas-grande-espana-llega-actur-zaragoza-inaugura-templo-comida-xxl/20250923170000943438.html" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <div className="press-logo"><img src="/img/medios/aragondigitla.jpg" alt="Aragón Digital" /></div>
            <div className="press-source">Aragón Digital</div>
            <p className="press-quote">&ldquo;El taco francés más grande de España llega al Actur: Zaragoza inaugura un templo de la comida XXL.&rdquo;</p>
            <div className="press-date">Septiembre 2025</div>
            <div className="press-cta">Leer artículo →</div>
          </a>
          <a className="press-card" href="https://www.tiktok.com/@victorprous/video/7569539960160734486" target="_blank" rel="noopener noreferrer">
            <div className="press-logo"><img src="/img/medios/victorprous.webp" alt="Víctor Prous" /></div>
            <div className="press-source">Víctor Prous</div>
            <p className="press-quote">&ldquo;Esto podría ser el próximo fenómeno gastronómico urbano de España. Esto puede estar en Primera División.&rdquo;</p>
            <div className="press-date">Noviembre 2025</div>
            <div className="press-cta">Ver video →</div>
          </a>
        </div>
      </section>

      {/* History */}
      <section className="history-section" id="historia">
        <p className="sec-ey">Como llegamos hasta aqui</p>
        <h2 className="sec-title">De Las Fuentes<br /><span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>al Actur</span></h2>
        <div className="history-grid">
          <div className="history-intro">
            <p>En menos de un ano, Tacos Street paso de ser una apuesta arriesgada en un barrio de Zaragoza a convertirse en el referente del taco frances en Espana.</p>
            <p>Colas antes de abrir. Viral en TikTok e Instagram. Cobertura en los principales medios aragoneses. Eventos con la bikelife de Espana, torneos 1v1 de futbol, y colaboraciones con creadores de contenido. Una comunidad que no para de crecer.</p>
          </div>
          <div className="history-events">
            <div className="ev-row"><div className="ev-date">Feb 2025</div><div><span className="ev-badge eb1">Apertura</span><div className="ev-title">Nace Tacos Street</div><p className="ev-desc">El 21 de febrero, Karim, Omar y Amin abren en calle Minas, 19 (Las Fuentes). Sin Glovo, sin Uber, sin publicidad. Solo receta original y colas en la calle desde el primer dia.</p></div></div>
            <div className="ev-row"><div className="ev-date">Abr 2025</div><div><span className="ev-badge eb2">Viral</span><div className="ev-title">El XXL conquista TikTok</div><p className="ev-desc">Creadores de contenido de toda Aragon graban sus reacciones al taco XXL. Miles de visualizaciones. El restaurante se convierte en destino gastronomico de la ciudad.</p></div></div>
            <div className="ev-row"><div className="ev-date">Jun 2025</div><div><span className="ev-badge eb3">Prensa</span><div className="ev-title">Los medios se hacen eco</div><p className="ev-desc">El Espanol Aragon, Hoy Aragon, Aragon Digital y Zaragoza LA publican reportajes. &ldquo;El taco frances mas grande de Espana ha llegado a Zaragoza.&rdquo;</p></div></div>
            <div className="ev-row"><div className="ev-date">Sep 2025</div><div><span className="ev-badge eb4">Expansion</span><div className="ev-title">Segundo local en el Actur</div><p className="ev-desc">Calle Gabriel Celaya, 14. &ldquo;Vosotros nos habeis obligado a abrir&rdquo;, anunciaron en redes. 100 tacos gratis se quedaron cortos. La familia Tacos Street sigue creciendo.</p></div></div>
            <div className="ev-row"><div className="ev-date">Nov 2025</div><div><span className="ev-badge eb5">Comunidad</span><div className="ev-title">Black Weekend & Eventos</div><p className="ev-desc">Del 20% al 100% de descuento en el Black Weekend. Torneos 1v1 de futbol en el Parque Bruil con 275&euro; en premios. Colaboraciones con la bikelife de Espana y creadores como Fofana TV.</p></div></div>
            <div className="ev-row"><div className="ev-date">Ene 2026</div><div><span className="ev-badge eb1">Nuevo ano</span><div className="ev-title">Nuevo ano, misma obsesion</div><p className="ev-desc">Nuevos postres con Ben & Jerry&apos;s, cheesecake de frutos rojos, y novedades de invierno. 2026 arranca con mas fuerza que nunca. La obsesion sigue intacta.</p></div></div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <p className="sec-ey">Lo que dice Zaragoza</p>
        <h2 className="sec-title">4.6 <span style={{ color: 'var(--y)' }}>&#9733;</span><br />Google Reviews</h2>
        <div className="reviews-grid">
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;El taco mas grande que he visto en mi vida. El XXL es una locura, con uno tienes de sobra. La salsa de queso casera esta increible. Volvere seguro.&rdquo;</p><div className="rv-author">&mdash; Javier M. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;El personal super amable, te explican todo si es tu primera vez. Pedi el Django y me conquisto. La cantidad de combinaciones es impresionante. Mi nuevo favorito.&rdquo;</p><div className="rv-author">&mdash; Laura P. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Las bebidas importadas son un plus que no esperaba. La Hawaii esta increible. Probe el Tropical y me volo la cabeza. Conceptualmente muy diferente.&rdquo;</p><div className="rv-author">&mdash; Ahmed S. &middot; Uber Eats</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9734;</div><p className="rv-text">&ldquo;Concepto muy diferente a todo lo que hay en Zaragoza. Los jalapenos de queso son adictivos. La relacion calidad-precio es muy buena para lo que te ponen.&rdquo;</p><div className="rv-author">&mdash; Maria C. &middot; TripAdvisor</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Lo que no sabias que necesitabas. El taco frances no tiene nada que ver con el mexicano pero te engancha. Pedi para llevar y llego perfecto. Repito cada semana.&rdquo;</p><div className="rv-author">&mdash; Roberto L. &middot; Google</div></div>
          <div className="rv"><div className="rv-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p className="rv-text">&ldquo;Vine atraido por los videos de Instagram y no me decepciono. El menu estudiante a 5,90 lunes a viernes es una pasada. Ahora vengo con mis amigos de la uni.&rdquo;</p><div className="rv-author">&mdash; Adrian N. &middot; Instagram</div></div>
        </div>
      </section>

      {/* Instagram */}
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/img/${p}.jpg`} alt="Tacos Street Instagram" loading="lazy" />
            </a>
          ))}
        </div>
        <div className="ig-more">
          <a href="https://www.instagram.com/tacosstreet.es/" target="_blank" rel="noopener noreferrer">Seguir en Instagram &rarr;</a>
        </div>
      </section>

      {/* Individual location cards */}
      <section className="locations-section" id="locales">
        <p className="sec-ey">Donde encontrarnos</p>
        <h2 className="sec-title">Dos locales<br /><span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>en Zaragoza</span></h2>
        <div className="loc-grid">
          <div className="loc-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="loc-img" src="/img/nuevas/lasfuentes.jpg" alt="Interior de Tacos Street Las Fuentes" loading="lazy" />
            <div className="loc-num">Local 01 &middot; El original</div>
            <div className="loc-name">Las Fuentes</div>
            <p className="loc-addr">C/ Minas, 19 &middot; Barrio de Las Fuentes</p>
            <div className="loc-info">
              <div><span className="li-label">Horario</span><span className="li-val">13:00 &ndash; 23:00</span></div>
              <div><span className="li-label">Dias</span><span className="li-val">Todos los dias</span></div>
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
            <img className="loc-img" src="img/Emocionales/Emocional 2.jpg" alt="Exterior de Tacos Street Actur" loading="lazy" />
            <div className="loc-num">Local 02 &middot; El Actur</div>
            <div className="loc-name">El Actur</div>
            <p className="loc-addr">C/ Gabriel Celaya, 14 &middot; 50018 Zaragoza</p>
            <div className="loc-info">
              <div><span className="li-label">Horario</span><span className="li-val">13:00 &ndash; 23:00</span></div>
              <div><span className="li-label">Dias</span><span className="li-val">Todos los dias</span></div>
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

      {/* Footer */}
      <footer>
        <div className="ft-top">
          <div className="ft-top-t">LISTO PARA<br />TU PRIMER TACO?</div>
          <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" className="ft-cta" target="_blank" rel="noopener noreferrer">Pedir en Uber Eats &rarr;</a>
        </div>
        <div className="ft-body">
          <div>
            <div className="ft-logo-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/SVG-WEB-TACOS-STREET/logo-redondo.svg" alt="Tacos Street logo" width={48} height={48} />
              <span className="ft-logo">TACOS<span className="dot">&middot;</span>STREET</span>
            </div>
            <span className="ft-tline">The Original French Tacos &middot; Zaragoza</span>
            <p className="ft-desc">Fundado en 2025 por Karim, Omar y Amin. La receta autentica del taco frances de Lyon, traida directamente a las calles de Zaragoza. Made for Game-Changers. #TacoJomudo</p>
            <div className="socials">
              <a href="https://www.instagram.com/tacosstreet.es/" className="si" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram size={18} /></a>
              <a href="https://www.tiktok.com/@tacosstreet.es" className="si" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok size={18} /></a>
              <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" className="si" target="_blank" rel="noopener noreferrer" aria-label="Uber Eats"><SiUbereats size={18} /></a>
              <a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" className="si" target="_blank" rel="noopener noreferrer" aria-label="Glovo"><SiGlovo size={18} /></a>
            </div>
          </div>
          <div>
            <div className="ft-col-t">Carta</div>
            <ul className="ft-links"><li><a href="#carta">Tacos Signature</a></li><li><a href="#carta">Taco XXL</a></li><li><a href="#carta">Entrantes</a></li><li><a href="#carta">Bebidas</a></li><li><a href="#carta">Postres</a></li><li><a href="#carta">Menu estudiante</a></li></ul>
          </div>
          <div>
            <div className="ft-col-t">Locales</div>
            <ul className="ft-links"><li><a href="#locales">Las Fuentes &middot; C/Minas 19</a></li><li><a href="#locales">El Actur &middot; C/G.Celaya 14</a></li><li><a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer">Uber Eats</a></li><li><a href="https://glovoapp.com/es/es/zaragoza/stores/tacos-street-zar" target="_blank" rel="noopener noreferrer">Glovo</a></li></ul>
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
