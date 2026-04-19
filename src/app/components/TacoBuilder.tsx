'use client';
import { useState } from 'react';

const STEPS = ['Tamaño', 'Carne', 'Extras', 'Salsas'];

const sizes = [
  { id: 'm', label: 'M', sub: '1 carne', desc: 'El tamaño perfecto. Tortilla tostada, patatas y queso fundido.', price: 6.90, img: '/img/uber/tacom_sin_fondo.png' },
  { id: 'l', label: 'L', sub: '2 carnes', desc: 'Más relleno, más sabor. El favorito de la casa.', price: 7.90, img: '/img/uber/tacol_sin_fondo.png' },
  { id: 'xl', label: 'XL', sub: '3 carnes', desc: 'El más grande de España. Con uno tienes de sobra.', price: 10.90, img: '/img/uber/tacoxl_sin_fondo.png' },
];

const meats = [
  { id: 'pollo-marinado', name: 'Pollo Marinado', emoji: '🌿', desc: 'A la plancha con hierbas. Versátil.', extra: 0 },
  { id: 'carne-picada', name: 'Carne Picada', emoji: '🥩', desc: 'Ternera sazonada. Base del Django.', extra: 0 },
  { id: 'merguez', name: 'Merguez', emoji: '🌶️', desc: 'Salchicha norteafricana especiada.', extra: 0, hot: true },
  { id: 'cordon-bleu', name: 'Cordon Bleu', emoji: '🥇', desc: 'Rellena de jamón y queso fundido.', extra: 0 },
  { id: 'nuggets', name: 'Nuggets', emoji: '🟡', desc: 'Crujientes y tiernos.', extra: 0 },
  { id: 'carne-kebab', name: 'Carne Kebab', emoji: '🫓', desc: 'Ternera marinada asada vertical.', extra: 0 },
  { id: 'pollo-tikka', name: 'Pollo Tikka', emoji: '🍗', desc: 'Marinado en yogur y especias tikka.', extra: 0, hot: true },
  { id: 'tenders', name: 'Tenders', emoji: '✨', desc: 'Rebozado extra crujiente. Premium.', extra: 1 },
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
  { id: 'queso', name: 'Queso Casera', img: '/img/salsas/processed/queso.png', signature: true, hot: 0 },
  { id: 'algerienne', name: 'Algérienne', img: '/img/salsas/processed/algerienne.png', hot: 1 },
  { id: 'samourai', name: 'Samouraï', img: '/img/salsas/processed/samourai.png', hot: 2 },
  { id: 'biggy', name: 'Biggy', img: '/img/salsas/processed/biggy.png', hot: 0 },
  { id: 'brasil', name: 'Brasil', img: '/img/salsas/processed/brazil.png', hot: 0 },
  { id: 'andalouse', name: 'Andalouse', img: '/img/salsas/processed/andalouse.png', hot: 0 },
  { id: 'tasty', name: 'Tasty', img: '/img/salsas/processed/tasty.png', hot: 0 },
  { id: 'curry', name: 'Curry', img: '/img/salsas/processed/curry.png', hot: 0 },
  { id: 'chilli-thai', name: 'Chilli Thai', img: '/img/salsas/processed/chilli-thai.png', hot: 2 },
  { id: 'harissa', name: 'Harissa', img: '/img/salsas/processed/harissa.png', hot: 3 },
  { id: 'bbq', name: 'BBQ', img: '/img/salsas/processed/bbq.png', hot: 0 },
  { id: 'ketchup', name: 'Ketchup', img: '/img/salsas/processed/ketchup.png', hot: 0 },
  { id: 'mayonesa', name: 'Mayonesa', img: '/img/salsas/processed/mayonesa.png', hot: 0 },
  { id: 'blanca', name: 'Blanca', img: '/img/salsas/processed/blanca.png', hot: 0 },
];

function fmt(p: number) { return p.toFixed(2).replace('.', ',') + '€'; }

export default function TacoBuilder() {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<'fwd' | 'bwd'>('fwd');
  const [sizeId, setSizeId] = useState<string | null>(null);
  const [selMeats, setSelMeats] = useState<string[]>([]);
  const [selExtras, setSelExtras] = useState<string[]>([]);
  const [selSalsas, setSelSalsas] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const sizeData = sizes.find(s => s.id === sizeId);
  const maxMeats = sizeId === 'm' ? 1 : sizeId === 'l' ? 2 : 3;

  function calcPrice() {
    let t = sizeData?.price ?? 0;
    selMeats.forEach(id => { const m = meats.find(x => x.id === id); if (m?.extra) t += m.extra; });
    selExtras.forEach(id => { const e = extras.find(x => x.id === id); if (e) t += e.price; });
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

  function reset() {
    setStep(0); setSizeId(null); setSelMeats([]); setSelExtras([]); setSelSalsas([]); setDone(false); setDir('fwd');
  }

  const canNext = [!!sizeId, selMeats.length > 0, true, selSalsas.length > 0];

  if (done) return (
    <section className="tb-section" id="builder">
      <div className="tb-done">
        <div className="tb-done-icon"><img src="/img/SVG-WEB-TACOS-STREET/mascota-taco.svg" alt="Taco listo" /></div>
        <h3 className="tb-done-title">¡Tu taco está listo!</h3>
        <p className="tb-done-sub">Muéstraselo al equipo cuando llegues o pídelo online</p>
        <div className="tb-done-recap">
          <div className="tb-recap-row"><span>Tamaño</span><strong>{sizeData?.label} — {sizeData?.sub}</strong></div>
          <div className="tb-recap-row"><span>Carnes</span><strong>{selMeats.map(id => meats.find(m => m.id === id)?.name).join(', ')}</strong></div>
          {selExtras.length > 0 && <div className="tb-recap-row"><span>Extras</span><strong>{selExtras.map(id => extras.find(e => e.id === id)?.name).join(', ')}</strong></div>}
          <div className="tb-recap-row"><span>Salsas</span><strong>{selSalsas.map(id => salsas.find(s => s.id === id)?.name).join(' + ')}</strong></div>
          <div className="tb-recap-price">Precio estimado: <strong>{fmt(calcPrice())}</strong></div>
        </div>
        <div className="tb-done-btns">
          <a href="https://www.ubereats.com/es/store/tacos-street-las-fuentes/Tky_8BkAW6qgCsPNzrHEHg" target="_blank" rel="noopener noreferrer" className="btn-y">Pedir en Uber Eats →</a>
          <button className="tb-btn-reset" onClick={reset}>Crear otro taco</button>
        </div>
      </div>
    </section>
  );

  return (
    <section className="tb-section" id="builder">
      <p className="sec-ey">Personaliza al máximo</p>
      <h2 className="sec-title">Crea <span style={{ WebkitTextStroke: '1.5px #fff', color: 'transparent' }}>tu taco</span></h2>

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

      {/* Step content */}
      <div className={`tb-content tb-${dir}`} key={step}>

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
            onClick={() => canNext[step] && setDone(true)}
          >
            Ver mi taco →
          </button>
        )}
      </div>
    </section>
  );
}
