'use client';
import { useState, useRef, useEffect, useCallback } from 'react';

/* ─── Data ─── */
type Product = {
  name: string;
  desc: string;
  origin: string;
  heat?: 1 | 2 | 3;
  gradient: string;
  emoji: string;
  img?: string;
};

type Category = { id: string; label: string; icon: string; items: Product[] };

const categories: Category[] = [
  {
    id: 'salsas', label: 'Salsas', icon: '🫙',
    items: [
      { name: 'Queso Casera', emoji: '🧀', gradient: 'linear-gradient(135deg,#FFD600,#ca8a04)', desc: 'Nuestra salsa de queso fundido hecha en casa. Cremosa y adictiva. La firma de Tacos Street — va en todos los tacos.', origin: 'Receta propia', img: '/img/salsas/processed/queso.png' },
      { name: 'Algérienne', emoji: '🫙', gradient: 'linear-gradient(135deg,#e85d26,#b91c1c)', desc: 'Cremosa de tomate, pimiento rojo y especias norteafricanas. Ligeramente picante con toque ahumado. La más clásica del taco francés — si solo pruebas una, que sea esta.', origin: 'Francia / Magreb', heat: 1, img: '/img/salsas/processed/algerienne.png' },
      { name: 'Samouraï', emoji: '⚔️', gradient: 'linear-gradient(135deg,#dc2626,#7f1d1d)', desc: 'Naranja intenso, base de mayonesa con harissa y especias. Potente y adictiva. Imprescindible en cualquier tacos francés que se precie.', origin: 'Francia', heat: 2, img: '/img/salsas/processed/samourai.png' },
      { name: 'Biggy', emoji: '🍔', gradient: 'linear-gradient(135deg,#d97706,#92400e)', desc: 'Tipo burger sauce, dulce y ahumada. Como la salsa Big Mac pero versión francesa — más intensa y con más carácter.', origin: 'Francia', img: '/img/salsas/processed/biggy.png' },
      { name: 'Brasil', emoji: '🌴', gradient: 'linear-gradient(135deg,#16a34a,#064e3b)', desc: 'Suave y tropical con notas afrutadas. Perfecta con pollo y piña. La clave del Taco Tropical.', origin: 'Inspiración brasileña', img: '/img/salsas/processed/brazil.png' },
      { name: 'Andalouse', emoji: '🫒', gradient: 'linear-gradient(135deg,#ea580c,#9a3412)', desc: 'Tomate, pimiento y mayonesa. Suave, ligeramente dulce y versátil. No pica nada. Para ir a lo seguro.', origin: 'Bélgica / Francia', img: '/img/salsas/processed/andalouse.png' },
      { name: 'Tasty', emoji: '😋', gradient: 'linear-gradient(135deg,#ca8a04,#713f12)', desc: 'Cremosa con toque ahumado y dulce. El complemento perfecto del Django, nuestro taco más pedido.', origin: 'Francia', img: '/img/salsas/processed/tasty.png' },
      { name: 'Curry', emoji: '🍛', gradient: 'linear-gradient(135deg,#eab308,#a16207)', desc: 'Curry suave y aromático. No pica, combina genial con pollo tikka.', origin: 'Inspiración india', img: '/img/salsas/processed/curry.png' },
      { name: 'Curry-Mango', emoji: '🥭', gradient: 'linear-gradient(135deg,#f59e0b,#b45309)', desc: 'Curry suave con puré de mango. Dulce, exótica y aromática. El secreto del Taco Tropical.', origin: 'Fusión' },
      { name: 'Chili Thai', emoji: '🐉', gradient: 'linear-gradient(135deg,#ef4444,#991b1b)', desc: 'Dulce y picante estilo tailandés. Jengibre y guindilla. Para los que buscan sabor potente.', origin: 'Inspiración tailandesa', heat: 2, img: '/img/salsas/processed/chilli-thai.png' },
      { name: 'Harissa', emoji: '🔥', gradient: 'linear-gradient(135deg,#b91c1c,#450a0a)', desc: 'Guindilla roja con comino, ajo y cilantro. La más picante de todas. Solo para valientes.', origin: 'Túnez / Magreb', heat: 3, img: '/img/salsas/processed/harissa.png' },
      { name: 'BBQ', emoji: '🪵', gradient: 'linear-gradient(135deg,#92400e,#451a03)', desc: 'Barbacoa clásica, ahumada con toque dulce. La de siempre, pero con nivel.', origin: 'Clásico', img: '/img/salsas/processed/bbq.png' },
      { name: 'Blanca', emoji: '🤍', gradient: 'linear-gradient(135deg,#e2e8f0,#94a3b8)', desc: 'Salsa blanca suave y cremosa. Equilibra combinaciones de sabor intenso. Discreta pero esencial.', origin: 'Clásico', img: '/img/salsas/processed/blanca.png' },
      { name: 'Ketchup', emoji: '🍅', gradient: 'linear-gradient(135deg,#dc2626,#7f1d1d)', desc: 'El clásico de siempre. Sencillo y efectivo.', origin: 'Clásico', img: '/img/salsas/processed/ketchup.png' },
      { name: 'Mayonesa', emoji: '🥣', gradient: 'linear-gradient(135deg,#fef9c3,#a16207)', desc: 'Mayonesa cremosa. La base neutra que equilibra cualquier combinación intensa.', origin: 'Clásico', img: '/img/salsas/processed/mayonesa.png' },
    ],
  },
  {
    id: 'carnes', label: 'Carnes', icon: '🥩',
    items: [
      { name: 'Merguez', emoji: '🌭', gradient: 'linear-gradient(135deg,#dc2626,#7f1d1d)', desc: 'Salchicha especiada de ternera y cordero con pimentón, comino y harissa. Es como la chistorra pero magrebí. Sabor intenso y fundamental en la gastronomía callejera francesa.', origin: 'Norte de África / Francia', heat: 1 },
      { name: 'Pollo Tikka', emoji: '🍗', gradient: 'linear-gradient(135deg,#ea580c,#9a3412)', desc: 'Marinado en yogur con especias tikka (comino, cúrcuma, pimentón). Tierno por dentro, dorado por fuera. De origen indio, adoptado por toda Europa.', origin: 'India / Reino Unido', heat: 1 },
      { name: 'Cordon Bleu', emoji: '🥇', gradient: 'linear-gradient(135deg,#d97706,#78350f)', desc: 'Pechuga empanada rellena de jamón y queso fundido. Crujiente por fuera, jugosa por dentro. Un clásico europeo.', origin: 'Francia / Suiza' },
      { name: 'Pollo Marinado', emoji: '🌿', gradient: 'linear-gradient(135deg,#65a30d,#365314)', desc: 'Con hierbas y especias suaves, a la plancha. La opción más versátil — combina con cualquier salsa.', origin: 'Clásico' },
      { name: 'Carne Picada', emoji: '🥩', gradient: 'linear-gradient(135deg,#92400e,#451a03)', desc: 'Ternera picada sazonada a la plancha. La base del Django, nuestro taco más pedido.', origin: 'Clásico' },
      { name: 'Tenders', emoji: '✨', gradient: 'linear-gradient(135deg,#f59e0b,#92400e)', desc: 'Tiras de pollo con rebozado extra crujiente. Premium (+1€). Merece cada céntimo.', origin: 'Clásico' },
      { name: 'Nuggets', emoji: '🟡', gradient: 'linear-gradient(135deg,#eab308,#a16207)', desc: 'Pollo empanado y frito. Crujientes por fuera, tiernos por dentro. Como carne del taco o entrante.', origin: 'Clásico' },
      { name: 'Carne Kebab', emoji: '🫓', gradient: 'linear-gradient(135deg,#b45309,#78350f)', desc: 'Ternera marinada, asada en vertical y cortada en láminas finas. Jugosa e intensa.', origin: 'Turquía / Oriente Medio' },
    ],
  },
  {
    id: 'extras', label: 'Quesos & Extras', icon: '🧀',
    items: [
      { name: 'La Vache qui Rit', emoji: '🐄', gradient: 'linear-gradient(135deg,#dc2626,#991b1b)', desc: 'El queso en porciones que toda Francia conoce desde 1921. Cremoso y suave, se derrite dentro del taco creando una textura única.', origin: 'Francia' },
      { name: 'Raclette', emoji: '🏔️', gradient: 'linear-gradient(135deg,#ca8a04,#713f12)', desc: 'Queso suizo de montaña fundido bajo el gratinador. Cremoso, intenso y con ese hilo de queso que todos buscan. El gratinado premium.', origin: 'Suiza / Francia' },
      { name: 'Boursin', emoji: '🌿', gradient: 'linear-gradient(135deg,#16a34a,#14532d)', desc: 'Queso crema francés con ajo y hierbas finas (tomillo, perejil, cebollino). Textura untuosa y sabor sofisticado.', origin: 'Francia' },
      { name: 'Queso de Cabra', emoji: '🐐', gradient: 'linear-gradient(135deg,#f5f5f4,#a8a29e)', desc: 'Suave y gratinado por encima. Ligeramente ácido, perfecto con miel y pollo. Clave en El Tropical.', origin: 'Francia' },
      { name: 'Cheddar', emoji: '🟧', gradient: 'linear-gradient(135deg,#f97316,#c2410c)', desc: 'Sabor intenso y color naranja. Se funde perfecto y le da un toque potente a cualquier taco. El más popular.', origin: 'Inglaterra' },
      { name: 'Mozzarella', emoji: '🤍', gradient: 'linear-gradient(135deg,#e7e5e4,#78716c)', desc: 'Se estira como ningún otro. Fundida por dentro, gratinada por fuera. Textura elástica.', origin: 'Italia' },
    ],
  },
  {
    id: 'bebidas', label: 'Bebidas', icon: '🥤',
    items: [
      { name: 'Hawaii Tropical', emoji: '🌺', gradient: 'linear-gradient(135deg,#f97316,#c2410c)', desc: 'Refresco tropical importado, casi imposible de encontrar en España. Piña y fruta de la pasión. La más pedida con diferencia.', origin: 'Importación', img: '/img/uber/hawai.png' },
      { name: 'Oasis Tropical', emoji: '🏝️', gradient: 'linear-gradient(135deg,#fb923c,#ea580c)', desc: 'Frutas tropicales importado de Francia. No se vende en supermercados españoles. Menos dulce y más refrescante.', origin: 'Francia', img: '/img/uber/oasis-tropical.png' },
      { name: 'Oasis Manzana-Frambuesa', emoji: '🍎', gradient: 'linear-gradient(135deg,#f43f5e,#9f1239)', desc: 'Manzana y frambuesa de Oasis Francia. Refrescante y ligeramente ácida.', origin: 'Francia', img: '/img/uber/oasis-manzana-frambuesa.png' },
      { name: 'Oasis Manzana-Pera', emoji: '🍐', gradient: 'linear-gradient(135deg,#84cc16,#365314)', desc: 'Manzana y pera de Oasis Francia. Suave y muy refrescante.', origin: 'Francia', img: '/img/uber/oasis-manzana-pera.png' },
      { name: '7UP Mojito Menta', emoji: '🍃', gradient: 'linear-gradient(135deg,#4ade80,#15803d)', desc: 'Sabor mojito (menta y lima). Sin alcohol. Exclusiva y refrescante. No la encuentras en otro sitio de Zaragoza.', origin: 'Importación', img: '/img/uber/7up-mojito-menta.png' },
      { name: 'Coca-Cola', emoji: '🥤', gradient: 'linear-gradient(135deg,#dc2626,#7f1d1d)', desc: 'El clásico que nunca falla. La lata de siempre.', origin: 'Clásico', img: '/img/uber/coca-cola.png' },
      { name: 'Coca-Cola Zero', emoji: '🥤', gradient: 'linear-gradient(135deg,#1c1917,#57534e)', desc: 'Mismo sabor Coca-Cola, sin azúcar.', origin: 'Clásico', img: '/img/uber/coca-cola-zero.png' },
      { name: 'Fanta Naranja', emoji: '🍊', gradient: 'linear-gradient(135deg,#f97316,#7c2d12)', desc: 'El refresco de naranja más conocido. Dulce y burbujeante.', origin: 'Clásico', img: '/img/uber/fanta-naranja.png' },
      { name: 'Fanta Limón', emoji: '🍋', gradient: 'linear-gradient(135deg,#fde047,#a16207)', desc: 'Refresco de limón refrescante y ligeramente ácido.', origin: 'Clásico', img: '/img/uber/fanta-limon.png' },
      { name: 'Fanta Tropical', emoji: '🌴', gradient: 'linear-gradient(135deg,#fb923c,#d97706)', desc: 'Sabor tropical con mezcla de frutas. Diferente y refrescante.', origin: 'Clásico', img: '/img/uber/fanta-tropical.png' },
      { name: 'Fanta Dragón & Mango', emoji: '🐉', gradient: 'linear-gradient(135deg,#c026d3,#7e22ce)', desc: 'Fruta del dragón y mango. Sabor exótico y único. Una de las exclusivas de la carta.', origin: 'Exclusiva', img: '/img/uber/fanta-fruta-del-dragon-y-mango.png' },
      { name: 'Fuze Tea Limón', emoji: '🍵', gradient: 'linear-gradient(135deg,#fde68a,#92400e)', desc: 'Té negro con limón y un toque dulce. Refrescante alternativa al refresco clásico.', origin: 'Importación', img: '/img/uber/fuze-tea-limon.png' },
      { name: 'Fuze Tea Maracuyá', emoji: '🌺', gradient: 'linear-gradient(135deg,#f59e0b,#b45309)', desc: 'Té negro con maracuyá. Tropical y refrescante. Perfecta con el Taco Tropical.', origin: 'Importación', img: '/img/uber/fuze-tea-maracuya.png' },
      { name: 'Monster Energy', emoji: '⚡', gradient: 'linear-gradient(135deg,#4ade80,#14532d)', desc: 'La energética clásica de Monster. Para los que necesitan un extra.', origin: 'Importación', img: '/img/uber/monster-energy.png' },
      { name: 'Monster Mango Loco', emoji: '🥭', gradient: 'linear-gradient(135deg,#f59e0b,#78350f)', desc: 'Monster sabor mango. Más suave que el original y con sabor tropical.', origin: 'Importación', img: '/img/uber/monster-mangoloco.png' },
      { name: 'Monster Ultra Zero', emoji: '🤍', gradient: 'linear-gradient(135deg,#e2e8f0,#475569)', desc: 'Monster sin azúcar. Mismo efecto, sin las calorías.', origin: 'Importación', img: '/img/uber/monster-ultra-zero-azucar.png' },
      { name: 'Capri-Sun', emoji: '🧃', gradient: 'linear-gradient(135deg,#f97316,#9a3412)', desc: 'El zumo en bolsita más icónico. Para los que no crecen nunca.', origin: 'Clásico', img: '/img/uber/capri-sun.png' },
      { name: 'Poms', emoji: '🍎', gradient: 'linear-gradient(135deg,#dc2626,#7f1d1d)', desc: 'Refresco de manzana importado. Suave y natural.', origin: 'Importación', img: '/img/uber/poms.png' },
      { name: 'Agua', emoji: '💧', gradient: 'linear-gradient(135deg,#7dd3fc,#0c4a6e)', desc: 'Agua mineral. Siempre disponible.', origin: 'Clásico', img: '/img/uber/agua.png' },
    ],
  },
];

type AllergenInfo = { name: string; icon: string; color: string; products: string };
const allergens: AllergenInfo[] = [
  { name: 'Gluten', icon: '🌾', color: '#d97706', products: 'Tortilla, empanado de nuggets, tenders, cordon bleu, wings, sticks mozzarella, cheese jalapeños' },
  { name: 'Lácteos', icon: '🥛', color: '#60a5fa', products: 'Salsa de queso, cheddar, mozzarella, raclette, boursin, queso de cabra, La Vache qui Rit, gratinados, tartas, tiramisú, Ben & Jerry\'s' },
  { name: 'Huevo', icon: '🥚', color: '#fbbf24', products: 'Huevo frito, empanados, mayonesa y salsas base mayo (Algérienne, Samouraï, Andalouse, Biggy, Tasty, Brasil)' },
  { name: 'Mostaza', icon: '🟡', color: '#ca8a04', products: 'Posibles trazas en salsas. Consultar en local' },
  { name: 'Frutos de cáscara', icon: '🥜', color: '#92400e', products: 'Tarta Toblerone (almendras). Ben & Jerry\'s Vanilla Pecan (nueces)' },
  { name: 'Soja', icon: '🫘', color: '#65a30d', products: 'Posibles trazas en salsas y rebozados' },
  { name: 'Apio', icon: '🥬', color: '#16a34a', products: 'Posibles trazas en especias' },
];

/* ─── Slider with arrows & dots ─── */
function Slider({ items, onBoundsChange }: { items: Product[]; onBoundsChange?: (canRight: boolean) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const total = items.length;

  const updateBounds = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft < track.scrollWidth - track.clientWidth - 10;
    setCanLeft(track.scrollLeft > 10);
    setCanRight(atEnd);
    onBoundsChange?.(atEnd);
  }, [onBoundsChange]);

  const scrollTo = useCallback((idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[idx] as HTMLElement;
    if (card) {
      track.scrollTo({ left: card.offsetLeft - 20, behavior: 'smooth' });
    }
  }, []);

  /* Scroll by visible area (group of cards) */
  const scrollByPage = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const visibleWidth = track.clientWidth;
    track.scrollBy({ left: direction * visibleWidth * 0.8, behavior: 'smooth' });
  }, []);

  const prev = () => scrollByPage(-1);
  const next = () => scrollByPage(1);

  /* sync dots + bounds on scroll */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        const atStart = track.scrollLeft <= 10;
        const atEnd = track.scrollLeft >= maxScroll - 10;

        let targetIdx: number;
        if (atStart) {
          targetIdx = 0;
        } else if (atEnd) {
          targetIdx = items.length - 1;
        } else {
          const cards = Array.from(track.children) as HTMLElement[];
          let closest = 0;
          let minDist = Infinity;
          cards.forEach((c, i) => {
            const dist = Math.abs(c.offsetLeft - track.scrollLeft - 20);
            if (dist < minDist) { minDist = dist; closest = i; }
          });
          targetIdx = closest;
        }
        setCurrent(targetIdx);
        updateBounds();
        ticking = false;
      });
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    updateBounds();
    return () => track.removeEventListener('scroll', onScroll);
  }, [items, updateBounds]);

  return (
    <div className="slider-wrap">
      {/* Arrows — hidden when at boundary */}
      {canLeft && (
        <button className="slider-arrow slider-arrow-l" onClick={prev} aria-label="Anterior">&#8249;</button>
      )}
      {canRight && (
        <button className="slider-arrow slider-arrow-r" onClick={next} aria-label="Siguiente">&#8250;</button>
      )}

      {/* Track */}
      <div className="slider-track" ref={trackRef}>
        {items.map((item, i) => (
          <div className="slide-card" key={item.name}>
            <div className="slide-visual">
              {item.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.img} alt={item.name} className="slide-product-img" />
              ) : (
                <span className="slide-emoji">{item.emoji}</span>
              )}
              {item.heat && (
                <span className="slide-heat">{'🌶️'.repeat(item.heat)}</span>
              )}
              <div className="slide-visual-bar" style={{ background: item.gradient }} />
            </div>
            <div className="slide-body">
              <div className="slide-name">{item.name}</div>
              <p className="slide-desc">{item.desc}</p>
              <span className="slide-origin">📍 {item.origin}</span>
            </div>
            <span className="slide-counter">{i + 1}/{total}</span>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {items.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${current === i ? ' active' : ''}`}
            onClick={() => { setCurrent(i); scrollTo(i); }}
            aria-label={`Ir a ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function InfoSection() {
  const [tab, setTab] = useState<'glosario' | 'alergenos'>('glosario');
  const [activeCat, setActiveCat] = useState('salsas');
  const [showHint, setShowHint] = useState(true);

  const currentCat = categories.find(c => c.id === activeCat)!;

  return (
    <section className="info-section" id="info">
      <p className="sec-ey">Todo lo que necesitas saber</p>
      <h2 className="sec-title">
        Conoce{' '}
        <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>nuestros productos</span>
      </h2>

      {/* Big tab buttons */}
      <div className="info-btns">
        <button className={`info-big-btn${tab === 'glosario' ? ' active' : ''}`} onClick={() => setTab('glosario')}>
          <span className="info-big-icon">📖</span>
          <div>
            <span className="info-big-title">Qué es cada cosa</span>
            <span className="info-big-sub">Salsas, carnes, quesos y bebidas explicados</span>
          </div>
        </button>
        <button className={`info-big-btn${tab === 'alergenos' ? ' active' : ''}`} onClick={() => setTab('alergenos')}>
          <span className="info-big-icon">⚠️</span>
          <div>
            <span className="info-big-title">Alérgenos</span>
            <span className="info-big-sub">Información para alérgicos e intolerancias</span>
          </div>
        </button>
      </div>

      {/* ── GLOSARIO with SLIDER ── */}
      {tab === 'glosario' && (
        <>
          <div className="cat-bar">
            {categories.map(c => (
              <button
                key={c.id}
                className={`cat-btn${activeCat === c.id ? ' active' : ''}`}
                onClick={() => setActiveCat(c.id)}
              >
                <span>{c.icon}</span> {c.label}
              </button>
            ))}
          </div>

          <Slider items={currentCat.items} key={activeCat} onBoundsChange={setShowHint} />

          {showHint && <p className="slider-tip">← Desliza para ver más →</p>}
        </>
      )}

      {/* ── ALÉRGENOS ── */}
      {tab === 'alergenos' && (
        <div className="alg-wrap">
          <div className="alg-warning">
            <strong>⚠️ Importante:</strong> Todos los productos se preparan en la misma cocina. Puede haber trazas cruzadas. Si tienes alergia, <strong>consulta con el personal</strong> antes de pedir.
          </div>

          <div className="alg-grid">
            {allergens.map(a => (
              <div className="alg-card" key={a.name}>
                <div className="alg-card-icon" style={{ background: `${a.color}15`, borderColor: `${a.color}40` }}>
                  <span>{a.icon}</span>
                </div>
                <div className="alg-card-name" style={{ color: a.color }}>{a.name}</div>
                <p className="alg-card-products">{a.products}</p>
              </div>
            ))}
          </div>

          <div className="alg-bottom">
            <div className="alg-bottom-card halal">
              <span className="alg-bottom-badge">✅ HALAL</span>
              <span>Toda nuestra carne es <strong>halal certificada</strong></span>
            </div>
            <div className="alg-bottom-card">
              <span className="alg-bottom-badge">📞</span>
              <span>Dudas? <a href="tel:+34643677898">643 677 898</a></span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
