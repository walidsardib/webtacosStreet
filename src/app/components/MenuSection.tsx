'use client';
import { useState } from 'react';

const tabs = [
  { id: 'signature', label: 'Tacos Signature' },
  { id: 'tacos', label: 'Crea tu taco' },
  { id: 'extras', label: 'Entrantes' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
  { id: 'menus', label: 'Menus' },
];

type MenuItem = { name: string; price: string; desc: string; tags?: { text: string; cls: string }[] };

const menuData: Record<string, MenuItem[]> = {
  signature: [
    { name: 'El Django', price: '6,90€+', desc: 'Carne picada, cebolla caramelizada, cheddar gratinado, crujiente de cebolla, salsa barbacoa y tasty. El clasico de la casa.', tags: [{ text: 'Mas pedido', cls: 'ty' }] },
    { name: 'El Tikka', price: '7,50€+', desc: 'Pollo Tikka, pepinillos, pimientos asados, salsa curry. Sabor profundo con un toque picante.', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'El Tropical', price: '7,90€+', desc: 'Pollo marinado, pina, queso de cabra gratinado, miel, salsa Brasil y curry-mango. La combinacion que nadie esperaba y todos repiten.', tags: [{ text: 'Top ventas', cls: 'ty' }] },
    { name: 'El Magrebi', price: '7,50€+', desc: 'Merguez, huevo frito, aceitunas, La Vache qui Rit, salsa Algerienne y Andalouse. El homenaje al origen del taco frances.', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'El Cordon', price: '8,50€+', desc: 'Cordon Bleu, bacon, cheddar, mozzarella gratinada, salsa de queso. El mas contundente.', tags: [{ text: 'Contundente', cls: 'tr' }] },
    { name: 'El OG', price: '7,90€+', desc: 'La receta original que empezo todo. Para los que quieren probar el taco frances tal como se come en Lyon.', tags: [{ text: 'Original', cls: 'ty' }] },
  ],
  tacos: [
    { name: 'Crea tu taco — M', price: '6,90€', desc: '1 carne a elegir + salsa + gratinado. El tamano clasico. Tortilla tostada a la plancha con patatas fritas y queso fundido dentro.', tags: [{ text: '1 carne', cls: 'ty' }] },
    { name: 'Crea tu taco — L', price: '7,90€', desc: '2 carnes a elegir + salsas + gratinado. Mas grande, mas sabor. La opcion favorita de la casa.', tags: [{ text: '2 carnes', cls: 'ty' }] },
    { name: 'Crea tu taco — XL', price: '10,90€', desc: '3 carnes a elegir + salsas + gratinado. El taco frances mas grande de Espana. Con uno, tienes de sobra.', tags: [{ text: '3 carnes', cls: 'ty' }, { text: 'XXL', cls: 'tr' }] },
    { name: 'Carnes disponibles', price: '', desc: 'Pollo marinado, carne picada, merguez, cordon bleu, nuggets, carne kebab. Tenders (+1€). Mas de 200 combinaciones posibles.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
    { name: 'Salsas', price: 'incluidas', desc: 'Algerienne, Biggy, Samourai, Brazil, Tasty, Andalouse, Harissa, Curry, Chili Thai, BBQ, Ketchup, Mayonesa. Elige hasta 2 salsas.', tags: [{ text: '13 salsas', cls: 'tg' }] },
    { name: 'Extras & Gratinados', price: '+1€', desc: 'Extras: Bacon, cebolla caramelizada, champinones, jalapenos, mozzarella, cheddar, boursin. Gratinados: Raclette, mozzarella, cheddar, queso de cabra. Toppings +0,20€: bacon de pavo, cebolla crispy.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
  ],
  extras: [
    { name: 'Patatas fritas', price: '1,50€', desc: 'Racion de patatas fritas. Con cheddar 2,50€. Con salsa de queso 3€. Con salsa de queso + bacon 3,50€. Con raclette + bacon de pavo 3,50€.', tags: [{ text: 'Clasico', cls: 'ty' }] },
    { name: 'Nuggets', price: 'desde 3,50€', desc: 'Nuggets de pollo dorados con dip a elegir. x4: 3,50€ · x6: 5,20€ · x8: 6,50€.', tags: [{ text: 'x4 / x6 / x8', cls: 'tw' }] },
    { name: 'Cheese Jalapenos', price: 'desde 2,50€', desc: 'Jalapenos rellenos de queso fundido, rebozados y fritos. x4: 2,50€ · x6: 3,20€ · x8: 4,50€.', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'Chicken Wings', price: 'desde 3,90€', desc: 'Alitas crujientes con salsa a elegir. x4: 3,90€ · x6: 5,90€ · x8: 7,50€.', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Sticks Mozzarella', price: 'desde 2,90€', desc: 'Mozzarella rebozada, crujiente por fuera y fundida por dentro. x4: 2,90€ · x6: 3,90€ · x8: 5,50€.' },
    { name: 'Tenders', price: 'desde 4,90€', desc: 'Tiras de pollo crujientes con dip a elegir. x4: 4,90€ · x6: 6,90€ · x8: 8,50€.' },
  ],
  bebidas: [
    { name: 'Hawaii Tropical', price: '1,50€', desc: 'Refresco importado tropical. La favorita de la casa. Dificil de encontrar en Espana.', tags: [{ text: 'La mas pedida', cls: 'ty' }] },
    { name: 'Oasis Tropical', price: '1,50€', desc: 'Refresco tropical importado de Francia. Diferente a todo lo que encuentras en otros restaurantes.' },
    { name: 'Coca-Cola', price: '1,50€', desc: 'El clasico que siempre acompana.' },
    { name: '7up Mojito', price: '1,50€', desc: 'Refresco con sabor a mojito. Fresco y diferente.', tags: [{ text: 'Exclusiva', cls: 'tg' }] },
  ],
  postres: [
    { name: 'Tarta Toblerone', price: '3€', desc: 'Tarta de chocolate con topping de Toblerone. Dulce y contundente.', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Tarta Milka', price: '3€', desc: 'Tarta de chocolate Milka. Cremosa y irresistible.' },
    { name: 'Tiramisu Oreo', price: '3€', desc: 'Tiramisu con base de galleta Oreo. La fusion perfecta.', tags: [{ text: 'Nuevo', cls: 'tg' }] },
    { name: 'Tiramisu Caramelo', price: '3€', desc: 'Tiramisu con salsa de caramelo. Dulce y suave.', tags: [{ text: 'Nuevo', cls: 'tg' }] },
    { name: "Ben & Jerry's", price: '4,90€', desc: 'Helados premium: Cookie Dough, Chocolate Fudge Brownie, Strawberry Cheesecake, Vanilla Pecan Blondie.', tags: [{ text: 'Premium', cls: 'tp' }] },
  ],
  menus: [
    { name: 'Menu Estudiante', price: '5,90€', desc: 'Taco + bebida. De martes a jueves, de 13:00 a 16:00, presentando justificante. La mejor relacion calidad-precio de Zaragoza.', tags: [{ text: 'Mar - Jue', cls: 'ty' }, { text: '13:00 - 16:00', cls: 'tw' }] },
    { name: 'Menu Completo', price: 'desde 10,50€', desc: 'Taco + entrante + bebida. La experiencia completa de Tacos Street.' },
    { name: 'Combo Para Dos', price: 'desde 18,00€', desc: '2 tacos + entrante compartido + 2 bebidas. Para disfrutar en compania.', tags: [{ text: 'Para compartir', cls: 'tg' }] },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState('signature');

  return (
    <section className="menu-section" id="carta">
      <div className="carta-images">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/carta1.jpg" alt="Carta Tacos Street - Crea tu taco: carnes, salsas, extras, gratinados" loading="lazy" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/img/cartra2.jpg" alt="Carta Tacos Street - Entrantes, bebidas, postres, menu estudiante" loading="lazy" />
      </div>
      <div className="menu-header">
        <div>
          <p className="sec-ey">Lo que hacemos</p>
          <h2 className="sec-title" style={{ marginBottom: 0 }}>La Carta</h2>
        </div>
        <div className="menu-tabs">
          {tabs.map(t => (
            <button key={t.id} className={`tab-btn${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <p style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--g2)', marginBottom: '1.5rem' }}>
        Pedidos para llevar: +0,30€ por taco &nbsp;&middot;&nbsp; Certificado Halal
      </p>

      {tabs.map(t => (
        <div key={t.id} className={`panel${active === t.id ? ' active' : ''}`}>
          {menuData[t.id]?.map((item, i) => (
            <div className="mc" key={i}>
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
          ))}
        </div>
      ))}
    </section>
  );
}
