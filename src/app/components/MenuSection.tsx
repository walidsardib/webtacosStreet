'use client';
import { useState } from 'react';

const tabs = [
  { id: 'signature', label: 'Tacos Signature' },
  { id: 'extras', label: 'Entrantes' },
  { id: 'bebidas', label: 'Bebidas' },
  { id: 'postres', label: 'Postres' },
  { id: 'menus', label: 'Menus' },
];

type MenuItem = { name: string; price: string; desc: string; img?: string; tags?: { text: string; cls: string }[] };

const menuData: Record<string, MenuItem[]> = {
  signature: [
    { name: 'Django', price: '12,99€+', desc: 'Carne picada, Extra de Pepinillos, Extra de Cebolla Caramelizada, Cheddar Gratinado, Topping de Cebolla Crispy, Salsa Barbacoa y Tasty. El clasico de la casa.', img: '/img/uber/django.png', tags: [{ text: 'Mas pedido', cls: 't-top' }] },
    { name: 'Street Masala', price: '11,99€+', desc: 'Pollo Tikka, Extra de Pepinillos, Extra de Pimientos y Salsa Curry. Sabor profundo con toque especiado.', img: '/img/uber/street-masala.png', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'Do Favela', price: '11,99€+', desc: 'Pollo marinado, Extra de Pina, Gratinado de Queso de Cabra, Topping de Miel, Salsa Brasil y Curry-Mango. La combinacion que nadie esperaba y todos repiten.', img: '/img/uber/do-favela.png', tags: [{ text: 'Top ventas', cls: 'ty' }] },
    { name: 'Yamal', price: '11,99€+', desc: 'Merguez, Extra de Huevo Frito, Extra de Aceitunas, Extra de La Vaca Que Rie, Salsa Algerienne y Andalouse. El homenaje al origen del taco frances.', img: '/img/uber/yamal.png', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'El OG', price: '12,99€+', desc: 'Tenders, Carne Picada, Gratinado de Mozzarella, Topping de Bacon de Pavo, Salsa Algerienne y Biggy. La receta original que empezo todo.', img: '/img/uber/el-og.png', tags: [{ text: 'Original', cls: 'ty' }] },
    { name: 'Supreme Cheese', price: '12,99€+', desc: 'Cordon Bleu, Extra de Bacon, Extra de Cheddar, Gratinado de Mozzarella y Salsa de Queso. El mas contundente.', img: '/img/uber/supreme-cheese.png', tags: [{ text: 'Contundente', cls: 'tr' }] },
  ],
  tacos: [
    { name: 'Crea tu taco — M', price: '6,90€', desc: '1 carne a elegir + salsa + gratinado. El tamano clasico. Tortilla tostada a la plancha con patatas fritas y queso fundido dentro.', img: '/img/uber/taco-m.png', tags: [{ text: '1 carne', cls: 'ty' }] },
    { name: 'Crea tu taco — L', price: '7,90€', desc: '2 carnes a elegir + salsas + gratinado. Mas grande, mas sabor. La opcion favorita de la casa.', img: '/img/uber/taco-l.png', tags: [{ text: '2 carnes', cls: 'ty' }] },
    { name: 'Crea tu taco — XL', price: '10,90€', desc: '3 carnes a elegir + salsas + gratinado. El taco frances mas grande de Espana. Con uno, tienes de sobra.', img: '/img/uber/taco-xl.png', tags: [{ text: '3 carnes', cls: 'ty' }, { text: 'XXL', cls: 'tr' }] },
    { name: 'Carnes disponibles', price: '', desc: 'Pollo marinado, carne picada, merguez, cordon bleu, nuggets, carne kebab. Tenders (+1€). Mas de 200 combinaciones posibles.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
    { name: 'Salsas', price: 'incluidas', desc: 'Queso casera (la firma), Algerienne, Biggy, Samourai, Brazil, Tasty, Andalouse, Harissa, Curry, Chili Thai, BBQ, Ketchup, Mayonesa. Elige hasta 2 salsas.', tags: [{ text: '13 salsas', cls: 'tg' }] },
    { name: 'Extras & Gratinados', price: '+1€', desc: 'Extras: Bacon, cebolla caramelizada, champinones, jalapenos, mozzarella, cheddar, boursin. Gratinados: Raclette, mozzarella, cheddar, queso de cabra. Toppings +0,20€: bacon de pavo, cebolla crispy.', tags: [{ text: 'Personalizable', cls: 'tw' }] },
  ],
  extras: [
    { name: 'Patatas fritas', price: '1,50€', desc: 'Racion de patatas fritas. Con cheddar 2,50€. Con salsa de queso 3€. Con salsa de queso + bacon 3,50€. Con raclette + bacon de pavo 3,50€.', img: '/img/técnicas/patatas-removebg-preview.png', tags: [{ text: 'Clasico', cls: 'ty' }] },
    { name: 'Patatas con Salsa de Queso', price: '2,50€', desc: 'Racion de patatas fritas con nuestra salsa de queso casera. Irresistibles.', img: '/img/técnicas/patatassalsaqued-removebg-preview.png', tags: [{ text: 'Mas pedido', cls: 'ty' }] },
    { name: 'Nuggets', price: 'desde 3,50€', desc: 'Nuggets de pollo dorados con dip a elegir. x4: 3,50€ · x6: 5,20€ · x8: 6,50€.', img: '/img/uber/nuggets.png', tags: [{ text: 'x4 / x6 / x8', cls: 'tw' }] },
    { name: 'Cheese Jalapenos', price: 'desde 2,50€', desc: 'Jalapenos rellenos de queso fundido, rebozados y fritos. x4: 2,50€ · x6: 3,20€ · x8: 4,50€.', img: '/img/técnicas/foto-tecnica-8.png', tags: [{ text: 'Picante', cls: 'tw' }] },
    { name: 'Chicken Wings', price: 'desde 3,90€', desc: 'Alitas crujientes con salsa a elegir. x4: 3,90€ · x6: 5,90€ · x8: 7,50€.', img: '/img/técnicas/foto-tecnica-17.png', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Sticks Mozzarella', price: 'desde 2,90€', desc: 'Mozzarella rebozada, crujiente por fuera y fundida por dentro. x4: 2,90€ · x6: 3,90€ · x8: 5,50€.', img: '/img/uber/sticks-mozzarella.png' },
    { name: 'Tenders', price: 'desde 4,90€', desc: 'Tiras de pollo crujientes con dip a elegir. x4: 4,90€ · x6: 6,90€ · x8: 8,50€.', img: '/img/uber/tenders.png' },
    { name: 'Onion Rings', price: 'desde 2,50€', desc: 'Aros de cebolla crujientes rebozados. x4: 2,50€ · x6: 3,20€ · x8: 4,50€.', img: '/img/técnicas/foto-tecnica-19.png' },
  ],
  bebidas: [
    { name: 'Hawaii Tropical', price: '1,50€', desc: 'Refresco importado tropical. La favorita de la casa. Dificil de encontrar en Espana.', img: '/img/uber/hawai.png', tags: [{ text: 'La mas pedida', cls: 'ty' }] },
    { name: 'Oasis Tropical', price: '1,50€', desc: 'Refresco tropical importado de Francia.', img: '/img/uber/oasis-tropical.png' },
    { name: 'Oasis Manzana-Frambuesa', price: '1,50€', desc: 'Manzana y frambuesa de Oasis Francia. Refrescante y ligeramente acida.', img: '/img/uber/oasis-manzana-frambuesa.png' },
    { name: 'Oasis Manzana-Pera', price: '1,50€', desc: 'Manzana y pera de Oasis Francia. Suave y muy refrescante.', img: '/img/uber/oasis-manzana-pera.png' },
    { name: '7UP Mojito Menta', price: '1,50€', desc: 'Sabor mojito sin alcohol. Exclusiva y refrescante.', img: '/img/uber/7up-mojito-menta.png', tags: [{ text: 'Exclusiva', cls: 'tg' }] },
    { name: 'Coca-Cola', price: '1,50€', desc: 'El clasico que siempre acompana.', img: '/img/uber/coca-cola.png' },
    { name: 'Coca-Cola Zero', price: '1,50€', desc: 'Mismo sabor, sin azucar.', img: '/img/uber/coca-cola-zero.png' },
    { name: 'Fanta Naranja', price: '1,50€', desc: 'El refresco de naranja clasico.', img: '/img/uber/fanta-naranja.png' },
    { name: 'Fanta Limon', price: '1,50€', desc: 'Refresco de limon refrescante.', img: '/img/uber/fanta-limon.png' },
    { name: 'Fanta Tropical', price: '1,50€', desc: 'Sabor tropical con mezcla de frutas.', img: '/img/uber/fanta-tropical.png' },
    { name: 'Fanta Dragon & Mango', price: '1,50€', desc: 'Fruta del dragon y mango. Sabor exotico y unico.', img: '/img/uber/fanta-fruta-del-dragon-y-mango.png', tags: [{ text: 'Exclusiva', cls: 'tg' }] },
    { name: 'Fuze Tea Limon', price: '1,50€', desc: 'Te negro con limon. Refrescante alternativa.', img: '/img/uber/fuze-tea-limon.png' },
    { name: 'Fuze Tea Maracuya', price: '1,50€', desc: 'Te negro con maracuya. Tropical y refrescante.', img: '/img/uber/fuze-tea-maracuya.png' },
    { name: 'Monster Energy', price: '2,50€', desc: 'La energetica clasica de Monster.', img: '/img/uber/monster-energy.png' },
    { name: 'Monster Mango Loco', price: '2,50€', desc: 'Monster sabor mango. Mas suave y tropical.', img: '/img/uber/monster-mangoloco.png' },
    { name: 'Monster Ultra Zero', price: '2,50€', desc: 'Monster sin azucar. Mismo efecto, sin calorias.', img: '/img/uber/monster-ultra-zero-azucar.png' },
    { name: 'Capri-Sun', price: '1,50€', desc: 'El zumo en bolsita mas iconico.', img: '/img/uber/capri-sun.png' },
    { name: 'Poms', price: '1,50€', desc: 'Refresco de manzana importado.', img: '/img/uber/poms.png' },
    { name: 'Agua', price: '1,00€', desc: 'Agua mineral.', img: '/img/uber/agua.png' },
  ],
  postres: [
    { name: 'Cheesecake Lotus Biscoff', price: '5,50€', desc: 'Copa de cheesecake con galleta Lotus Biscoff. Dulce, cremoso y adictivo.', img: '/img/postres/processed/lotus.png', tags: [{ text: 'Favorito', cls: 'ty' }] },
    { name: 'Cheesecake Frutas del Bosque', price: '5,50€', desc: 'Copa de cheesecake con frutas del bosque. Fresco, dulce y suave.', img: '/img/postres/processed/cheesecake.png' },
    { name: 'Tiramisu', price: '5,50€', desc: 'Copa de helado artesanal italiano de tiramisu.', img: '/img/postres/processed/tiramisu.png', tags: [{ text: 'Artesanal', cls: 'tg' }] },
    { name: '3 Chocolates', price: '5,50€', desc: 'Copa de helado artesanal italiano de 3 chocolates. Para los mas golosos.', img: '/img/postres/processed/3-chocolates.png', tags: [{ text: 'Artesanal', cls: 'tg' }] },
    { name: "Ben & Jerry's Cookie Dough", price: '4,90€', desc: 'Helado premium con trozos de masa de galleta y chocolate.', img: '/img/postres/processed/bjs-cookie.png', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Chocolate Brownie", price: '4,90€', desc: 'Helado premium con trozos de brownie de chocolate.', img: '/img/postres/processed/bjs-brownie.png', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Strawberry Cheesecake", price: '4,90€', desc: 'Helado premium con sabor a cheesecake de fresa.', img: '/img/postres/processed/bjs-strawberry.png', tags: [{ text: 'Premium', cls: 'tp' }] },
    { name: "Ben & Jerry's Vanilla Caramel Fudge", price: '4,90€', desc: 'Helado premium de vainilla con caramelo y fudge de chocolate.', img: '/img/postres/processed/bjs-vanilla.png', tags: [{ text: 'Premium', cls: 'tp' }] },
  ],
  menus: [
    { name: 'Menu Estudiante', price: '5,90€', desc: 'Taco + bebida. De martes a jueves, de 13:00 a 16:00, presentando justificante. La mejor relacion calidad-precio de Zaragoza.', tags: [{ text: 'Mar - Jue', cls: 'ty' }, { text: '13:00 - 16:00', cls: 'tw' }] },
    { name: 'Menu Completo', price: 'desde 10,50€', desc: 'Taco + entrante + bebida. La experiencia completa de Tacos Street.', img: '/img/técnicas/foto tecnica 3.jpg' },
    { name: 'Combo Para Dos', price: 'desde 18,00€', desc: '2 tacos + entrante compartido + 2 bebidas. Para disfrutar en compania.', img: '/img/técnicas/foto tecnica 4.jpg', tags: [{ text: 'Para compartir', cls: 'tg' }] },
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
          <a href="#builder" className="tab-btn tab-btn-link">
            Crea tu taco <span style={{ fontSize: '1.1em' }}>↓</span>
          </a>
        </div>
      </div>
      <p style={{ fontSize: '.72rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase' as const, color: 'var(--g2)', marginBottom: '1.5rem' }}>
        Pedidos para llevar: +0,30€ por taco &nbsp;&middot;&nbsp; Certificado Halal
      </p>

      {tabs.map(t => (
        <div key={t.id} className={`panel${active === t.id ? ' active' : ''}`}>
          {menuData[t.id]?.map((item, i) => (
            t.id === 'menus' ? (
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
                  <div className={`mc-img${item.img.endsWith('.png') ? ' mc-img-cut' : ''}`}>
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
      ))}
    </section>
  );
}
