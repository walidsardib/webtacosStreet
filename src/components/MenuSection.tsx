"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  { id: "signature", label: "Tacos Signature" },
  { id: "tacos", label: "Crea tu taco" },
  { id: "extras", label: "Entrantes" },
  { id: "bebidas", label: "Bebidas" },
  { id: "postres", label: "Postres" },
  { id: "menus", label: "Menus" },
];

const anton = { fontFamily: "var(--font-anton)" };

function MC({ name, price, desc, tags }: { name: string; price: string; desc: string; tags?: { label: string; cls: string }[] }) {
  return (
    <div className="mc">
      <div className="mc-top">
        <div className="mc-name" style={anton}>{name}</div>
        <div className="mc-price" style={anton}>{price}</div>
      </div>
      <p className="mc-desc">{desc}</p>
      {tags && tags.length > 0 && (
        <div className="tags">
          {tags.map((t, i) => <span key={i} className={`tag ${t.cls}`}>{t.label}</span>)}
        </div>
      )}
    </div>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState("signature");

  return (
    <section className="menu-section" id="carta">
      <div className="carta-images">
        <Image src="/img/carta1.jpg" alt="Carta Tacos Street - Crea tu taco: carnes, salsas, extras, gratinados" width={800} height={600} style={{ width: "100%", height: "auto" }} />
        <Image src="/img/cartra2.jpg" alt="Carta Tacos Street - Entrantes, bebidas, postres, menu estudiante" width={800} height={600} style={{ width: "100%", height: "auto" }} />
      </div>

      <div className="menu-header">
        <div>
          <p className="sec-ey">Lo que hacemos</p>
          <h2 className="sec-title" style={{ ...anton, marginBottom: 0 }}>La Carta</h2>
        </div>
        <div className="menu-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              className={`tab-btn${active === t.id ? " active" : ""}`}
              onClick={() => setActive(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <p style={{ fontSize: ".72rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase" as const, color: "var(--g2)", marginBottom: "1.5rem" }}>
        Pedidos para llevar: +0,30&euro; por taco &nbsp;&middot;&nbsp; Certificado Halal
      </p>

      {/* TACOS SIGNATURE */}
      <div className={`panel${active === "signature" ? " active" : ""}`}>
        <MC name="El Django" price="6,90€+" desc="Carne picada, cebolla caramelizada, cheddar gratinado, crujiente de cebolla, salsa barbacoa y tasty. El clasico de la casa." tags={[{ label: "Mas pedido", cls: "ty" }]} />
        <MC name="El Tikka" price="7,50€+" desc="Pollo Tikka, pepinillos, pimientos asados, salsa curry. Sabor profundo con un toque picante." tags={[{ label: "Picante", cls: "tw" }]} />
        <MC name="El Tropical" price="7,90€+" desc="Pollo marinado, pina, queso de cabra gratinado, miel, salsa Brasil y curry-mango. La combinacion que nadie esperaba y todos repiten." tags={[{ label: "Top ventas", cls: "ty" }]} />
        <MC name="El Magrebi" price="7,50€+" desc="Merguez, huevo frito, aceitunas, La Vache qui Rit, salsa Algerienne y Andalouse. El homenaje al origen del taco frances." tags={[{ label: "Picante", cls: "tw" }]} />
        <MC name="El Cordon" price="8,50€+" desc="Cordon Bleu, bacon, cheddar, mozzarella gratinada, salsa de queso. El mas contundente." tags={[{ label: "Contundente", cls: "tr" }]} />
        <MC name="El OG" price="7,90€+" desc="La receta original que empezo todo. Para los que quieren probar el taco frances tal como se come en Lyon." tags={[{ label: "Original", cls: "ty" }]} />
      </div>

      {/* CREA TU TACO */}
      <div className={`panel${active === "tacos" ? " active" : ""}`}>
        <MC name="Crea tu taco — M" price="6,90€" desc="1 carne a elegir + salsa + gratinado. El tamano clasico. Tortilla tostada a la plancha con patatas fritas y queso fundido dentro." tags={[{ label: "1 carne", cls: "ty" }]} />
        <MC name="Crea tu taco — L" price="7,90€" desc="2 carnes a elegir + salsas + gratinado. Mas grande, mas sabor. La opcion favorita de la casa." tags={[{ label: "2 carnes", cls: "ty" }]} />
        <MC name="Crea tu taco — XL" price="10,90€" desc="3 carnes a elegir + salsas + gratinado. El taco frances mas grande de Espana. Con uno, tienes de sobra." tags={[{ label: "3 carnes", cls: "ty" }, { label: "XXL", cls: "tr" }]} />
        <MC name="Carnes disponibles" price="" desc="Pollo marinado, carne picada, merguez, cordon bleu, nuggets, carne kebab. Tenders (+1€). Mas de 200 combinaciones posibles." tags={[{ label: "Personalizable", cls: "tw" }]} />
        <MC name="Salsas" price="incluidas" desc="Algerienne, Biggy, Samourai, Brazil, Tasty, Andalouse, Harissa, Curry, Chili Thai, BBQ, Ketchup, Mayonesa. Elige hasta 2 salsas." tags={[{ label: "13 salsas", cls: "tg" }]} />
        <MC name="Extras & Gratinados" price="+1€" desc="Extras: Bacon, cebolla caramelizada, champinones, jalapenos, mozzarella, cheddar, boursin. Gratinados: Raclette, mozzarella, cheddar, queso de cabra. Toppings +0,20€: bacon de pavo, cebolla crispy." tags={[{ label: "Personalizable", cls: "tw" }]} />
      </div>

      {/* ENTRANTES */}
      <div className={`panel${active === "extras" ? " active" : ""}`}>
        <MC name="Patatas fritas" price="1,50€" desc="Racion de patatas fritas. Con cheddar 2,50€. Con salsa de queso 3€. Con salsa de queso + bacon 3,50€. Con raclette + bacon de pavo 3,50€." tags={[{ label: "Clasico", cls: "ty" }]} />
        <MC name="Nuggets" price="desde 3,50€" desc="Nuggets de pollo dorados con dip a elegir. x4: 3,50€ · x6: 5,20€ · x8: 6,50€." tags={[{ label: "x4 / x6 / x8", cls: "tw" }]} />
        <MC name="Cheese Jalapenos" price="desde 2,50€" desc="Jalapenos rellenos de queso fundido, rebozados y fritos. x4: 2,50€ · x6: 3,20€ · x8: 4,50€." tags={[{ label: "Picante", cls: "tw" }]} />
        <MC name="Chicken Wings" price="desde 3,90€" desc="Alitas crujientes con salsa a elegir. x4: 3,90€ · x6: 5,90€ · x8: 7,50€." tags={[{ label: "Favorito", cls: "ty" }]} />
        <MC name="Sticks Mozzarella" price="desde 2,90€" desc="Mozzarella rebozada, crujiente por fuera y fundida por dentro. x4: 2,90€ · x6: 3,90€ · x8: 5,50€." />
        <MC name="Tenders" price="desde 4,90€" desc="Tiras de pollo crujientes con dip a elegir. x4: 4,90€ · x6: 6,90€ · x8: 8,50€." />
      </div>

      {/* BEBIDAS */}
      <div className={`panel${active === "bebidas" ? " active" : ""}`}>
        <MC name="Hawaii Tropical" price="1,50€" desc="Refresco importado tropical. La favorita de la casa. Dificil de encontrar en Espana." tags={[{ label: "La mas pedida", cls: "ty" }]} />
        <MC name="Oasis Tropical" price="1,50€" desc="Refresco tropical importado de Francia. Diferente a todo lo que encuentras en otros restaurantes." />
        <MC name="Coca-Cola" price="1,50€" desc="El clasico que siempre acompana." />
        <MC name="7up Mojito" price="1,50€" desc="Refresco con sabor a mojito. Fresco y diferente." tags={[{ label: "Exclusiva", cls: "tg" }]} />
      </div>

      {/* POSTRES */}
      <div className={`panel${active === "postres" ? " active" : ""}`}>
        <MC name="Tarta Toblerone" price="3€" desc="Tarta de chocolate con topping de Toblerone. Dulce y contundente." tags={[{ label: "Favorito", cls: "ty" }]} />
        <MC name="Tarta Milka" price="3€" desc="Tarta de chocolate Milka. Cremosa y irresistible." />
        <MC name="Tiramisu Oreo" price="3€" desc="Tiramisu con base de galleta Oreo. La fusion perfecta." tags={[{ label: "Nuevo", cls: "tg" }]} />
        <MC name="Tiramisu Caramelo" price="3€" desc="Tiramisu con salsa de caramelo. Dulce y suave." tags={[{ label: "Nuevo", cls: "tg" }]} />
        <MC name="Ben & Jerry's" price="4,90€" desc="Helados premium: Cookie Dough, Chocolate Fudge Brownie, Strawberry Cheesecake, Vanilla Pecan Blondie." tags={[{ label: "Premium", cls: "tp" }]} />
      </div>

      {/* MENUS */}
      <div className={`panel${active === "menus" ? " active" : ""}`}>
        <MC name="Menu Estudiante" price="5,90€" desc="Taco + bebida. De martes a jueves, de 13:00 a 16:00, presentando justificante. La mejor relacion calidad-precio de Zaragoza." tags={[{ label: "Mar - Jue", cls: "ty" }, { label: "13:00 - 16:00", cls: "tw" }]} />
        <MC name="Menu Completo" price="desde 10,50€" desc="Taco + entrante + bebida. La experiencia completa de Tacos Street." />
        <MC name="Combo Para Dos" price="desde 18,00€" desc="2 tacos + entrante compartido + 2 bebidas. Para disfrutar en compania." tags={[{ label: "Para compartir", cls: "tg" }]} />
      </div>
    </section>
  );
}
