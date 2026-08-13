import useReveal from '../hooks/useReveal';
import { TESTIMONIALS } from '../data';
import '../App.css';

function Testimonials() {
  useReveal();

  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">نظرات مشتریان</span>
          <h2>What Clients Say</h2>
        </div>
        <div className="testi-grid" id="testiGrid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card reveal">
              <div className="stars">★★★★★</div>
              <p className="quote">"{t.quote}"</p>
              <div className="testi-person">
                <div className="testi-avatar" style={{ '--c1': t.c1, '--c2': t.c2 }}></div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
