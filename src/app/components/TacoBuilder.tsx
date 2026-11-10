'use client';
import { useState } from 'react';

const STEPS = ['Tamaño', 'Carne', 'Extras', 'Salsas'];

const sizes = [
  { id: 'm', label: 'M', sub: '1 carne', desc: 'El tamaño perfecto. Tortilla tostada, patatas y queso fundido.', price: 6.90, img: '/img/uber/tacom_sin_fondo.webp' },
  { id: 'l', label: 'L', sub: '2 carnes', desc: 'Más relleno, más sabor. El favorito de la casa.', price: 7.90, img: '/img/uber/tacol_sin_fondo.webp' },
  { id: 'xl', label: 'XL', sub: '3 carnes', desc: 'El más grande de España. Con uno tienes de sobra.', price: 10.90, img: '/img/uber/tacoxl_sin_fondo.webp' },
];

const meats = [
  { id: 'pollo-marinado', name: 'Pollo Marinado', emoji: '🍗', desc: 'A la plancha con hierbas. Versátil.', extra: 0 },
  { id: 'carne-picada', name: 'Carne Picada', emoji: '🥩', desc: 'Ternera sazonada. Base del Django.', extra: 0 },
  { id: 'merguez', name: 'Merguez', emoji: '🌶️', desc: 'Salchicha norteafricana especiada.', extra: 0 },
  { id: 'cordon-bleu', name: 'Cordon Bleu', emoji: '🥇', desc: 'Relleno de pollo y pavo con queso fundido.', extra: 0 },
  { id: 'nuggets', name: 'Nuggets', emoji: '🟡', desc: 'Crujientes y tiernos.', extra: 0 },
  { id: 'carne-kebab', name: 'Carne Kebab', emoji: '🫓', desc: 'Ternera marinada asada vertical.', extra: 0 },
  { id: 'falafel', name: 'Falafel', emoji: '🧆', desc: 'Bolitas de garbanzos y especias. Crujiente por fuera, tierno por dentro.', extra: 0 },
  { id: 'pollo-tikka', name: 'Pollo Tikka', emoji: '🍗', desc: 'Marinado en yogur y especias tikka.', extra: 1 },
  { id: 'tenders', name: 'Tenders', emoji: '✨', desc: 'Rebozado extra crujiente. Premium.', extra: 1, hot: true },
];

const extras = [
  { id: 'bacon', name: 'Bacon', emoji: '🥓', price: 1 },
  { id: 'cebolla-car', name: 'Cebolla Caramelizada', emoji: '🧅', price: 1 },
  { id: 'champis', name: 'Champiñones', emoji: '🍄', price: 1 },
  { id: 'jalapenos', name: 'Jalapeños', emoji: '🌶️', price: 1 },
  { id: 'mozzarella', name: 'Mozzarella', emoji: '🤍', price: 1, grat: true },
  { id: 'cheddar', name: 'Cheddar', emoji: '🟧', price: 1, grat: true },
  { id: 'boursin', name: 'Boursin', emoji: '🌿', price: 1, grat: true },
  { id: 'raclette', name: 'Raclette', emoji: '🏔️', price: 1, grat: true },
  { id: 'cabra', name: 'Queso de Cabra', emoji: '🐐', price: 1, grat: true },
  { id: 'huevo', name: 'Huevo Frito', emoji: '🍳', price: 1 },
  { id: 'pina', name: 'Piña', emoji: '🍍', price: 1 },
  { id: 'aceit', name: 'Aceitunas', emoji: '🫒', price: 1 },
  { id: 'pepinillos', name: 'Pepinillos', emoji: '🥒', price: 1 },
  { id: 'bacon-pavo', name: 'Bacon de Pavo', emoji: '🦃', price: 0.2 },
  { id: 'cebolla-crispy', name: 'Cebolla Crispy', emoji: '⭕', price: 0.2 },
];

const salsas = [
  { id: 'queso', name: 'Queso Casera', img: '/img/salsas/processed/queso.webp', signature: true, hot: 0 },
  { id: 'algerienne', name: 'Algérienne', img: '/img/salsas/processed/algerienne.webp', hot: 1 },
  { id: 'samourai', name: 'Samouraï', img: '/img/salsas/processed/samourai.webp', hot: 2 },
  { id: 'biggy', name: 'Biggy', img: '/img/salsas/processed/biggy.webp', hot: 0 },
  { id: 'brasil', name: 'Brasil', img: '/img/salsas/processed/brazil.webp', hot: 0 },
  { id: 'andalouse', name: 'Andalouse', img: '/img/salsas/processed/andalouse.webp', hot: 0 },
  { id: 'tasty', name: 'Tasty', img: '/img/salsas/processed/tasty.webp', hot: 0 },
  { id: 'curry', name: 'Curry', img: '/img/salsas/processed/curry.webp', hot: 0 },
  { id: 'chilli-thai', name: 'Chilli Thai', img: '/img/salsas/processed/chilli-thai.webp', hot: 2 },
  { id: 'harissa', name: 'Harissa', img: '/img/salsas/processed/harissa.webp', hot: 3 },
  { id: 'bbq', name: 'BBQ', img: '/img/salsas/processed/bbq.webp', hot: 0 },
  { id: 'ketchup', name: 'Ketchup', img: '/img/salsas/processed/ketchup.webp', hot: 0 },
  { id: 'mayonesa', name: 'Mayonesa', img: '/img/salsas/processed/mayonesa.webp', hot: 0 },
  { id: 'blanca', name: 'Blanca', img: '/img/salsas/processed/blanca.webp', hot: 0 },
];

function fmt(p: number) { return p.toFixed(2).replace('.', ',') + '€'; }

type SavedTaco = {
  id: number;
  sizeId: string;
  meats: string[];
  extras: string[];
  salsas: string[];
  price: number;
};

export default function TacoBuilder() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<'fwd' | 'bwd'>('fwd');
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [selMeats, setSelMeats] = useState<string[]>([]);
  const [selExtras, setSelExtras] = useState<string[]>([]);
  const [selSalsas, setSelSalsas] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [savedTacos, setSavedTacos] = useState<SavedTaco[]>([]);
  const [resetKey, setResetKey] = useState(0);

  const sizeData = sizes.find(s => s.id === sizeId);
  const maxMeats = sizeId === 'm' ? 1 : sizeId === 'l' ? 2 : 3;

  function calcPrice(sid = sizeId, sm = selMeats, se = selExtras) {
    let t = sizes.find(s => s.id === sid)?.price ?? 0;
    sm.forEach(id => { const m = meats.find(x => x.id === id); if (m?.extra) t += m.extra; });
    se.forEach(id => { const e = extras.find(x => x.id === id); if (e) t += e.price; });
    return t;
  }

  function go(n: number) { setDir(n > step ? 'fwd' : 'bwd'); setStep(n); }

  function toggleMeat(id: string) {
    setSelMeats(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= maxMeats ? p : [...p, id]);
  }
  function toggleExtra(id: string) {
    setSelExtras(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]);
  }
  function toggleSalsa(id: string) {
    setSelSalsas(p => p.includes(id) ? p.filter(x => x !== id) : p.length >= 2 ? p : [...p, id]);
  }

  function finishTaco() {
    setSavedTacos(p => [...p, {
      id: Date.now(),
      sizeId: sizeId!,
      meats: [...selMeats],
      extras: [...selExtras],
      salsas: [...selSalsas],
      price: calcPrice(),
    }]);
    setDone(true);
  }

  function startNew() {
    setStep(0); setSizeId(null); setSelMeats([]); setSelExtras([]); setSelSalsas([]);
    setDone(false); setDir('fwd'); setResetKey(k => k + 1);
  }

  function clearAll() {
    setSavedTacos([]); startNew();
  }

  function removeTaco(id: number) {
    setSavedTacos(p => p.filter(t => t.id !== id));
  }

  const totalPrice = savedTacos.reduce((a, t) => a + t.price, 0);
  const canNext = [!!sizeId, selMeats.length > 0, true, selSalsas.length > 0];

  if (done) return (
    <section className="tb-section" id="builder">
      {savedTacos.length > 0 && (
        <div className="tb-order">
          <div className="tb-order-header">
            <h3 className="tb-order-title">Tu pedido — {savedTacos.length} taco{savedTacos.length > 1 ? 's' : ''}</h3>
            <button className="tb-order-clear" onClick={clearAll}>Limpiar todo</button>
          </div>
          {savedTacos.map((t, i) => {
            const sz = sizes.find(s => s.id === t.sizeId);
            return (
              <div key={t.id} className="tb-order-row">
                <span className="tb-order-num">#{i + 1}</span>
                <div className="tb-order-info">
                  <strong>Taco {sz?.label} <span className="tb-order-sub">{sz?.sub}</span></strong>
                  <span>{t.meats.map(id => meats.find(m => m.id === id)?.name).join(' + ')}</span>
                  {t.extras.length > 0 && <span className="tb-order-extras">{t.extras.map(id => extras.find(e => e.id === id)?.name).join(', ')}</span>}
                  <span className="tb-order-salsas">{t.salsas.map(id => salsas.find(s => s.id === id)?.name).join(' + ')}</span>
                </div>
                <span className="tb-order-price">{fmt(t.price)}</span>
                <button className="tb-order-remove" onClick={() => removeTaco(t.id)} aria-label="Eliminar">✕</button>
              </div>
            );
          })}
          <div className="tb-order-total">Total estimado: <strong>{fmt(totalPrice)}</strong></div>
        </div>
      )}
      <div className="tb-done">
        <div className="tb-done-icon">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/SVG-WEB-TACOS-STREET/mascota-taco.svg" alt="Taco listo" />
        </div>
        <h3 className="tb-done-title">¡Taco añadido!</h3>
        <p className="tb-done-sub">Muéstraselo al equipo cuando llegues o pídelo online</p>
        <div className="tb-done-btns">
          <button className="tb-btn-reset" onClick={startNew}>+ Crear otro taco</button>
        </div>
      </div>
    </section>
  );

  return (
    <section className="tb-section" id="builder">
      {savedTacos.length > 0 && (
        <div className="tb-order tb-order-mini">
          <div className="tb-order-header">
            <span className="tb-order-title">{savedTacos.length} taco{savedTacos.length > 1 ? 's' : ''} en tu pedido — {fmt(totalPrice)}</span>
            <button className="tb-order-clear" onClick={clearAll}>Limpiar</button>
          </div>
          {savedTacos.map((t, i) => {
            const sz = sizes.find(s => s.id === t.sizeId);
            return (
              <div key={t.id} className="tb-order-row">
                <span className="tb-order-num">#{i + 1}</span>
                <div className="tb-order-info">
                  <strong>Taco {sz?.label}</strong>
                  <span>{t.meats.map(id => meats.find(m => m.id === id)?.name).join(' + ')}</span>
                  <span className="tb-order-salsas">{t.salsas.map(id => salsas.find(s => s.id === id)?.name).join(' + ')}</span>
                </div>
                <span className="tb-order-price">{fmt(t.price)}</span>
                <button className="tb-order-remove" onClick={() => removeTaco(t.id)} aria-label="Eliminar">✕</button>
              </div>
            );
          })}
        </div>
      )}

      <p className="sec-ey">Personaliza al máximo</p>
      <h2 className="sec-title">Crea tu taco</h2>

      {/* Progress */}
      <div className="tb-progress">
        {STEPS.map((s, i) => (
          <button
            key={s}
            className={`tb-step-pill${i === step ? ' active' : ''}${i < step ? ' done' : ''}`}
            onClick={() => i < step ? go(i) : undefined}
            disabled={i > step}
          >
            <span className="tb-pill-num">{i < step ? '✓' : i + 1}</span>
            <span className="tb-pill-label">{s}</span>
          </button>
        ))}
        <div className="tb-progress-bar">
          <div className="tb-progress-fill" style={{ width: `${(step / (STEPS.length - 1)) * 100}%` }} />
        </div>
      </div>

      {/* Step content — resetKey in key forces full remount on reset */}
      <div className={`tb-content tb-${dir}`} key={`${resetKey}-${step}`}>

        {/* Step 0: Size */}
        {step === 0 && (
          <div>
            <p className="tb-step-hint">Elige el tamaño de tu taco</p>
            <div className="tb-grid-sizes">
              {sizes.map(s => (
                <div key={s.id} className={`tb-size-card${sizeId === s.id ? ' selected' : ''}`} onClick={() => { setSizeId(s.id); const max = s.id === 'm' ? 1 : s.id === 'l' ? 2 : 3; setSelMeats(p => p.slice(0, max)); }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.label} className="tb-size-img" />
                  <div className="tb-size-sub">{s.sub}</div>
                  <div className="tb-size-desc">{s.desc}</div>
                  <div className="tb-size-price">desde {fmt(s.price)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Meats */}
        {step === 1 && (
          <div>
            <p className="tb-step-hint">
              Elige {maxMeats === 1 ? 'tu carne' : `hasta ${maxMeats} carnes`}
              <span className="tb-counter">{selMeats.length}/{maxMeats}</span>
            </p>
            <div className="tb-grid-options">
              {meats.map(m => {
                const sel = selMeats.includes(m.id);
                const disabled = !sel && selMeats.length >= maxMeats;
                return (
                  <div key={m.id} className={`tb-option-card${sel ? ' selected' : ''}${disabled ? ' disabled' : ''}`} onClick={() => !disabled && toggleMeat(m.id)}>
                    {m.hot && <span className="tb-opt-hot">🌶️</span>}
                    {m.extra > 0 && <span className="tb-opt-badge">+{fmt(m.extra)}</span>}
                    <span className="tb-opt-emoji">{m.emoji}</span>
                    <span className="tb-opt-name">{m.name}</span>
                    <span className="tb-opt-desc">{m.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Extras */}
        {step === 2 && (
          <div>
            <p className="tb-step-hint">
              Extras opcionales
              <span className="tb-opt-label">Puedes saltarte este paso</span>
              {selExtras.length > 0 && <span className="tb-counter">{selExtras.length} elegidos</span>}
            </p>
            <div className="tb-grid-options tb-grid-extras">
              {extras.map(e => {
                const sel = selExtras.includes(e.id);
                return (
                  <div key={e.id} className={`tb-option-card tb-extra-card${sel ? ' selected' : ''}`} onClick={() => toggleExtra(e.id)}>
                    <span className="tb-opt-badge">{e.price >= 1 ? `+${fmt(e.price)}` : `+${e.price.toFixed(2).replace('.', ',')}€`}</span>
                    <span className="tb-opt-emoji">{e.emoji}</span>
                    <span className="tb-opt-name">{e.name}</span>
                    {e.grat && <span className="tb-opt-grat">Gratinado</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 3: Salsas */}
        {step === 3 && (
          <div>
            <p className="tb-step-hint">
              Elige hasta 2 salsas
              <span className="tb-counter">{selSalsas.length}/2</span>
            </p>
            <div className="tb-grid-salsas">
              {salsas.map(s => {
                const sel = selSalsas.includes(s.id);
                const disabled = !sel && selSalsas.length >= 2;
                return (
                  <div key={s.id} className={`tb-salsa-card${sel ? ' selected' : ''}${disabled ? ' disabled' : ''}`} onClick={() => !disabled && toggleSalsa(s.id)}>
                    {s.signature && <span className="tb-salsa-badge">Firma</span>}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.img} alt={s.name} className="tb-salsa-img" />
                    <span className="tb-salsa-name">{s.name}</span>
                    {s.hot > 0 && <span className="tb-salsa-hot">{'🌶️'.repeat(s.hot)}</span>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="tb-nav">
        {step > 0 ? (
          <button className="tb-btn-prev" onClick={() => go(step - 1)}>← Anterior</button>
        ) : <div />}
        <div className="tb-price-preview">
          {sizeId && <span>Precio est. <strong>{fmt(calcPrice())}</strong></span>}
        </div>
        {step < STEPS.length - 1 ? (
          <button
            className={`tb-btn-next${canNext[step] ? '' : ' disabled'}`}
            onClick={() => canNext[step] && go(step + 1)}
          >
            {step === 2 && selExtras.length === 0 ? 'Saltar extras →' : 'Siguiente →'}
          </button>
        ) : (
          <button
            className={`tb-btn-next${canNext[step] ? '' : ' disabled'}`}
            onClick={() => canNext[step] && finishTaco()}
          >
            Añadir taco →
          </button>
        )}
      </div>
    </section>
  );
}
