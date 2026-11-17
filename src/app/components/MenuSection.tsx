'use client';
import { useState, useEffect, useRef, useCallback } from 'react';

const tabs = [
  { id: 'signature', label: 'Tacos Signature' },
  { id: 'extras', label: 'Entrantes' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
  { id: 'menus', label: 'Menus' },
];

type MenuItem = { name: string; price: string; desc: string; img?: string; photo?: boolean; tags?: { text: string; cls: string }[] };

const menuData: Record<string, MenuItem[]> = {
  signature: [
    { name: 'Django', price: '10,90€', desc: 'Carne picada, Extra de Pepinillos, Extra de Cebolla Caramelizada, Cheddar Gratinado, Topping de Cebolla Crispy, Salsa Barbacoa y Tasty. El clasico de la casa.', img: '/img/uber/django.webp', tags: [{ text: 'Mas pedido', cls: 't-top' }] },
    { name: 'Street Masala', price: '9,90€', desc: 'Pollo Tikka, Extra de Pepinillos, Extra de Pimientos y Salsa Curry. Sabor profundo con toque especiado.', img: '/img/uber/street-masala.webp', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'Do Favela', price: '9,90€', desc: 'Pollo marinado, Extra de Pina, Gratinado de Queso de Cabra, Topping de Miel, Salsa Brasil y Curry-Mango. La combinacion que nadie esperaba y todos repiten.', img: '/img/uber/do-favela.webp', tags: [{ text: 'Top ventas', cls: 'ty' }] },
    { name: 'Yamal', price: '9,90€', desc: 'Merguez, Extra de Huevo Frito, Extra de Aceitunas, Extra de La Vaca Que Rie, Salsa Algerienne y Andalouse. El homenaje al origen del taco frances.', img: '/img/uber/yamal.webp', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'El OG', price: '10,90€', desc: 'Tenders, Carne Picada, Gratinado de Mozzarella, Topping de Bacon de Pavo, Salsa Algerienne y Biggy. La receta original que empezo todo.', img: '/img/uber/el-og.webp', tags: [{ text: 'Original', cls: 'ty' }] },
    { name: 'Supreme Cheese', price: '10,90€', desc: 'Cordon Bleu, Extra de Bacon, Extra de Cheddar, Gratinado de Mozzarella y Salsa de Queso. El mas contundente.', img: '/img/uber/supreme-cheese.webp', tags: [{ text: 'Contundente', cls: 'tr' }] },
  ],
  tacos: [
    { name: 'Crea tu taco — M', price: '6,90€', desc: '1 carne a elegir + salsa + gratinado. El tamano clasico. Tortilla tostada a la plancha con patatas fritas y queso fundido dentro.', img: '/img/uber/taco-m.webp', tags: [{ text: '1 carne', cls: 'ty' }] },
    { name: 'Crea tu taco — L', price: '7,90€', desc: '2 carnes a elegir + salsas + gratinado. Mas grande, mas sabor. La opcion favorita de la casa.', img: '/img/uber/taco-l.webp', tags: [{ text: '2 carnes', cls: 'ty' }] },
    { name: 'Crea tu taco — XL', price: '10,90€', desc: '3 carnes a elegir + salsas + gratinado. El taco frances mas grande de Espana. Con uno, tienes de sobra.', img: '/img/uber/taco-xl.webp', tags: [{ text: '3 carnes', cls: 'ty' }, { text: 'XXL', cls: 'tr' }] },
    { name: 'Carnes disponibles', price: '', desc: 'Pollo marinado, carne picada, merguez, cordon bleu, nuggets, carne kebab, falafel. Tenders (+1€). Mas de 200 combinaciones posibles.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
    { name: 'Salsas', price: 'incluidas', desc: 'Queso casera (la firma), Algerienne, Biggy, Samourai, Brazil, Tasty, Andalouse, Harissa, Curry, Chili Thai, BBQ, Ketchup, Mayonesa. Elige hasta 2 salsas.', tags: [{ text: '13 salsas', cls: 'tg' }] },
    { name: 'Extras & Gratinados', price: '+1€', desc: 'Extras: Bacon, cebolla caramelizada, champinones, jalapenos, mozzarella, cheddar, boursin. Gratinados: Raclette, mozzarella, cheddar, queso de cabra. Toppings +0,20€: bacon de pavo, cebolla crispy.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
  ],
  extras: [
    { name: 'Patatas fritas', price: '1,50€', desc: 'Racion de patatas fritas. Con cheddar 2,50€. Con salsa de queso 3€. Con salsa de queso + bacon 3,50€. Con raclette + bacon de pavo 3,50€.', img: '/img/técnicas/patatas-removebg-preview.webp', tags: [{ text: 'Clasico', cls: 'ty' }] },
    { name: 'Patatas con Salsa de Queso', price: '3,00€', desc: 'Racion de patatas fritas con nuestra salsa de queso casera. Irresistibles.', img: '/img/técnicas/patatassalsaqued-removebg-preview.webp', tags: [{ text: 'Mas pedido', cls: 'ty' }] },
    { name: 'Patatas con Salsa de Queso y Bacon', price: '3,50€', desc: 'Patatas fritas con salsa de queso casera y bacon. El entrante mas completo de la carta.', img: '/img/uber/patatas-fritas-con-salsa-de-queso-y-bacon.webp', tags: [{ text: 'Imprescindible', cls: 'tr' }] },
    { name: 'Nuggets', price: 'desde 3,90€', desc: 'Nuggets de pollo dorados con dip a elegir. x4: 3,90€ · x6: 5,50€ · x8: 6,90€.', img: '/img/uber/nuggets.webp', tags: [{ text: 'x4 / x6 / x8', cls: 'tw' }] },
    { name: 'Cheese Jalapenos', price: 'desde 2,90€', desc: 'Jalapenos rellenos de queso fundido, rebozados y fritos. x4: 2,90€ · x6: 3,50€ · x8: 4,90€.', img: '/img/técnicas/foto-tecnica-8.webp', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'Chicken Wings', price: 'desde 4,20€', desc: 'Alitas crujientes con salsa a elegir. x4: 4,20€ · x6: 6,50€ · x8: 8,20€.', img: '/img/técnicas/foto-tecnica-17.webp', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Sticks Mozzarella', price: 'desde 3,20€', desc: 'Mozzarella rebozada, crujiente por fuera y fundida por dentro. x4: 3,20€ · x6: 4,50€ · x8: 5,90€.', img: '/img/uber/sticks-mozzarella.webp' },
    { name: 'Tenders', price: 'desde 5,50€', desc: 'Tiras de pollo crujientes con dip a elegir. x4: 5,50€ · x6: 7,50€ · x8: 9,50€.', img: '/img/uber/tenders.webp' },
    { name: 'Onion Rings', price: 'desde 2,50€', desc: 'Aros de cebolla crujientes rebozados. x4: 2,50€ · x6: 3,20€ · x8: 4,50€.', img: '/img/técnicas/foto-tecnica-19.webp' },
  ],
  bebidas: [
    { name: 'Hawaii Tropical', price: '1,80€', desc: 'Refresco importado tropical. La favorita de la casa. Dificil de encontrar en Espana.', img: '/img/uber/hawai.webp', tags: [{ text: 'La mas pedida', cls: 'ty' }] },
    { name: 'Oasis Tropical', price: '1,80€', desc: 'Refresco tropical importado de Francia.', img: '/img/uber/oasis-tropical.webp' },
    { name: 'Oasis Manzana-Frambuesa', price: '1,80€', desc: 'Manzana y frambuesa de Oasis Francia. Refrescante y ligeramente acida.', img: '/img/uber/oasis-manzana-frambuesa.webp' },
    { name: 'Oasis Manzana-Pera', price: '1,80€', desc: 'Manzana y pera de Oasis Francia. Suave y muy refrescante.', img: '/img/uber/oasis-manzana-pera.webp' },
    { name: '7UP Mojito Menta', price: '1,80€', desc: 'Sabor mojito sin alcohol. Exclusiva y refrescante.', img: '/img/uber/7up-mojito-menta.webp', tags: [{ text: 'Exclusiva', cls: 'tg' }] },
    { name: 'Coca-Cola', price: '1,80€', desc: 'El clasico que siempre acompana.', img: '/img/uber/coca-cola.webp' },
    { name: 'Coca-Cola Zero', price: '1,80€', desc: 'Mismo sabor, sin azucar.', img: '/img/uber/coca-cola-zero.webp' },
    { name: 'Fanta Naranja', price: '1,80€', desc: 'El refresco de naranja clasico.', img: '/img/uber/fanta-naranja.webp' },
    { name: 'Fanta Limon', price: '1,80€', desc: 'Refresco de limon refrescante.', img: '/img/uber/fanta-limon.webp' },
    { name: 'Fanta Tropical', price: '1,80€', desc: 'Sabor tropical con mezcla de frutas.', img: '/img/uber/fanta-tropical.webp' },
    { name: 'Fanta Dragon & Mango', price: '1,80€', desc: 'Fruta del dragon y mango. Sabor exotico y unico.', img: '/img/uber/fanta-fruta-del-dragon-y-mango.webp', tags: [{ text: 'Exclusiva', cls: 'tg' }] },
    { name: 'Fuze Tea Limon', price: '1,80€', desc: 'Te negro con limon. Refrescante alternativa.', img: '/img/uber/fuze-tea-limon.webp' },
    { name: 'Fuze Tea Maracuya', price: '1,80€', desc: 'Te negro con maracuya. Tropical y refrescante.', img: '/img/uber/fuze-tea-maracuya.webp' },
    { name: 'Monster Energy', price: '2€', desc: 'La energetica clasica de Monster.', img: '/img/uber/monster-energy.webp' },
    { name: 'Monster Mango Loco', price: '2€', desc: 'Monster sabor mango. Mas suave y tropical.', img: '/img/uber/monster-mangoloco.webp' },
    { name: 'Monster Ultra Zero', price: '2€', desc: 'Monster sin azucar. Mismo efecto, sin calorias.', img: '/img/uber/monster-ultra-zero-azucar.webp' },
    { name: 'Monster Fresa Cero', price: '2€', desc: 'Monster sabor fresa sin azucar. Refrescante y sin calorias.', img: '/img/uber/monster-fresa.webp', tags: [{ text: 'Sin azucar', cls: 'tg' }] },
    { name: 'Capri-Sun', price: '1,80€', desc: 'El zumo en bolsita mas iconico.', img: '/img/uber/capri-sun.webp' },
    { name: 'Poms', price: '1,80€', desc: 'Refresco de manzana importado.', img: '/img/uber/poms.webp' },
    { name: 'Agua', price: '1,00€', desc: 'Agua mineral.', img: '/img/uber/agua.webp' },
  ],
  postres: [
    { name: 'Cheesecake Lotus Biscoff', price: '3,50€', desc: 'Copa de cheesecake con galleta Lotus Biscoff. Dulce, cremoso y adictivo.', img: '/img/postres/processed/lotus.webp', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Cheesecake Frutas del Bosque', price: '3,50€', desc: 'Copa de cheesecake con frutas del bosque. Fresco, dulce y suave.', img: '/img/postres/processed/cheesecake.webp' },
    { name: 'Tiramisu', price: '3,00€', desc: 'Copa de helado artesanal italiano de tiramisu.', img: '/img/postres/processed/tiramisu.webp', tags: [{ text: 'Artesanal', cls: 'tg' }] },
    { name: '3 Chocolates', price: '3,50€', desc: 'Copa de helado artesanal italiano de 3 chocolates. Para los mas golosos.', img: '/img/postres/processed/3-chocolates.webp', tags: [{ text: 'Artesanal', cls: 'tg' }] },    { name: "Ben & Jerry's Cookie Dough", price: '2,90€', desc: 'Helado premium con trozos de masa de galleta y chocolate.', img: '/img/postres/processed/bjs-cookie.webp', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Chocolate Brownie", price: '2,90€', desc: 'Helado premium con trozos de brownie de chocolate.', img: '/img/postres/processed/bjs-brownie.webp', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Strawberry Cheesecake", price: '2,90€', desc: 'Helado premium con sabor a cheesecake de fresa.', img: '/img/postres/processed/bjs-strawberry.webp', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Vanilla Caramel Fudge", price: '2,90€', desc: 'Helado premium de vainilla con caramelo y fudge de chocolate.', img: '/img/postres/processed/bjs-vanilla.webp', tags: [{ text: 'Premium', cls: 'tp' }] },
  ],
  menus: [
    { name: 'Menu Estudiante', price: '5,90€', desc: 'Taco + bebida. De martes a jueves, de 13:00 a 16:00, presentando justificante. La mejor relacion calidad-precio de Zaragoza.', tags: [{ text: 'Mar - Jue', cls: 'ty' }, { text: '13:00 - 16:00', cls: 'tw' }] },
    { name: 'Menu Completo', price: 'desde 10,50€', desc: 'Taco + entrante + bebida. La experiencia completa de Tacos Street.', img: '/img/técnicas/foto tecnica 3.webp', photo: true },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState('signature');
  const [cartaOpen, setCartaOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelDot, setPanelDot] = useState(0);
  const [panelHint, setPanelHint] = useState(true);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);
  const lastX = useRef(0);
  const velocity = useRef(0);
  const lastTime = useRef(0);

  const updateBounds = useCallback(() => {
    const el = panelRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 10);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  const scrollToCard = useCallback((idx: number) => {
    const el = panelRef.current;
    if (!el) return;
    const card = el.children[idx] as HTMLElement;
    if (card) el.scrollTo({ left: card.offsetLeft - 20, behavior: 'smooth' });
  }, []);

  const scrollByPage = useCallback((dir: 1 | -1) => {
    const el = panelRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = panelRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStartX.current = e.pageX;
    dragScrollLeft.current = el.scrollLeft;
    lastX.current = e.pageX;
    velocity.current = 0;
    lastTime.current = Date.now();
    el.style.cursor = 'grabbing';
    el.style.userSelect = 'none';
    el.style.scrollSnapType = 'none';
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const el = panelRef.current;
    if (!el) return;
    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) velocity.current = (e.pageX - lastX.current) / dt;
    lastX.current = e.pageX;
    lastTime.current = now;
    el.scrollLeft = dragScrollLeft.current - (e.pageX - dragStartX.current);
  }, []);

  const onMouseUp = useCallback(() => {
    const el = panelRef.current;
    if (!el || !isDragging.current) return;
    isDragging.current = false;
    el.style.cursor = 'grab';
    el.style.userSelect = '';
    el.style.scrollSnapType = '';
    const vel = velocity.current;
    const card = el.children[0] as HTMLElement | null;
    const cardW = card ? card.offsetWidth + 1 : 340;
    const currentIdx = Math.round(el.scrollLeft / cardW);
    let targetIdx = Math.abs(vel) > 0.3
      ? vel > 0 ? currentIdx - 1 : currentIdx + 1
      : currentIdx;
    targetIdx = Math.max(0, Math.min(targetIdx, el.children.length - 1));
    scrollToCard(targetIdx);
  }, [scrollToCard]);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    setPanelDot(0);
    setPanelHint(true);
    el.scrollTo({ left: 0 });
    updateBounds();
    const count = menuData[active]?.length ?? 1;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll = el.scrollWidth - el.clientWidth;
        const atStart = el.scrollLeft <= 10;
        const atEnd = el.scrollLeft >= maxScroll - 10;
        let targetIdx: number;
        if (atStart) {
          targetIdx = 0;
        } else if (atEnd) {
          targetIdx = count - 1;
        } else {
          const cards = Array.from(el.children) as HTMLElement[];
          let closest = 0;
          let minDist = Infinity;
          cards.forEach((c, i) => {
            const dist = Math.abs(c.offsetLeft - el.scrollLeft - 20);
            if (dist < minDist) { minDist = dist; closest = i; }
          });
          targetIdx = closest;
        }
        setPanelDot(targetIdx);
        updateBounds();
        if (el.scrollLeft > 20) setPanelHint(false);
        ticking = false;
      });
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [active, updateBounds]);

  useEffect(() => {
    if (!cartaOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setCartaOpen(false); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; };
  }, [cartaOpen]);

  return (
    <section className="menu-section" id="carta">
      {cartaOpen && (
        <div className="carta-modal-overlay" onClick={() => setCartaOpen(false)}>
          <div className="carta-modal" onClick={e => e.stopPropagation()}>
            <button className="carta-modal-close" onClick={() => setCartaOpen(false)} aria-label="Cerrar">✕</button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/carta1.webp" alt="Carta Tacos Street - Crea tu taco" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/cartra2.webp" alt="Carta Tacos Street - Entrantes, bebidas, postres" />
          </div>
        </div>
      )}
      <div className="menu-header">
        <div>
          <p className="sec-ey">Lo que hacemos</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>La Carta</h2>
        </div>
        <div className="menu-tabs-wrap">
          <div className="menu-tabs">
            {tabs.map(t => (
              <button key={t.id} className={`tab-btn${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
                {t.label}
              </button>
            ))}
            <button className="tab-btn carta-toggle-btn" onClick={() => setCartaOpen(true)}>
              Ver carta física ↗
            </button>
            <a href="#builder" className="tab-btn tab-btn-link">
              Crea tu taco <span style={{ fontSize: '1.1em' }}>↓</span>
            </a>
          </div>
          <div className="swipe-hint" aria-hidden="true">
            Desliza<span className="sh-arr">›››</span>
          </div>
        </div>
      </div>
      <p style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--g2)', marginBottom: '1.5rem' }}>
        Pedidos para llevar: +0,30€ por taco &nbsp;&middot;&nbsp; Certificado Halal
      </p>

      <div className="slider-wrap">
        {canLeft && (
          <button className="slider-arrow slider-arrow-l" onClick={() => scrollByPage(-1)} aria-label="Anterior">&#8249;</button>
        )}
        {canRight && (
          <button className="slider-arrow slider-arrow-r" onClick={() => scrollByPage(1)} aria-label="Siguiente">&#8250;</button>
        )}
        <div
          ref={panelRef}
          className="panel active"
          style={{ cursor: 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onDragStart={e => e.preventDefault()}
        >
        {(menuData[active] ?? []).map((item, i) => (
          active === 'menus' ? (
            <div className="mc mc-menu-card" key={i}>
              <div className="mc-top">
                <div className="mc-name">{item.name}</div>
                {item.price && <div className="mc-price">{item.price}</div>}
              </div>
              <p className="mc-desc">{item.desc}</p>
              {item.tags && (
                <div className="tags">
                  {item.tags.map((tag, j) => (
                    <span key={j} className={`tag ${tag.cls}`}>{tag.text}</span>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className={`mc${item.img ? ' mc-has-img' : ''}`} key={i}>
              {item.img && (
                <div className={`mc-img${item.photo ? '' : ' mc-img-cut'}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.name} loading="lazy" />
                </div>
              )}
              <div className="mc-top">
                <div className="mc-name">{item.name}</div>
                {item.price && <div className="mc-price">{item.price}</div>}
              </div>
              <p className="mc-desc">{item.desc}</p>
              {item.tags && (
                <div className="tags">
                  {item.tags.map((tag, j) => (
                    <span key={j} className={`tag ${tag.cls}`}>{tag.text}</span>
                  ))}
                </div>
              )}
            </div>
          )
        ))}
        </div>
      </div>

      <div className="panel-controls">
        <div className="slider-dots">
          {Array.from({ length: menuData[active]?.length ?? 0 }, (_, i) => (
            <button
              key={i}
              className={`slider-dot${panelDot === i ? ' active' : ''}`}
              onClick={() => { setPanelDot(i); scrollToCard(i); }}
              aria-label={`Ir a ${i + 1}`}
            />
          ))}
        </div>
        {panelHint && (
          <div className="swipe-hint" aria-hidden="true">Desliza para ver más<span className="sh-arr">›</span></div>
        )}
      </div>
    </section>
  );
}
