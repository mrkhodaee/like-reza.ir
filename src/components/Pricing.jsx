import useReveal from '../hooks/useReveal';
import { PRICING } from '../data';
import '../App.css';

const checkSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" width="18" height="18">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

function Pricing() {
  useReveal();

  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">قیمت‌گذاری</span>
          <h2>Pricing</h2>
        </div>
        <div className="pricing-grid" id="pricingGrid">
          {PRICING.map((p, i) => (
            <div key={i} className={`price-card reveal${p.highlight ? ' highlight' : ''}`}>
              {p.highlight && <div className="price-badge">MOST POPULAR</div>}
              <h3>{p.name}</h3>
              <div className="price-amount">
                {p.price}
                <span>{p.period}</span>
              </div>
              <p className="price-desc">{p.desc}</p>
              <ul className="price-features">
                {p.features.map((f, j) => (
                  <li key={j}>
                    {checkSvg}
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`btn ${p.highlight ? 'btn-primary' : 'btn-ghost'} magnetic`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
