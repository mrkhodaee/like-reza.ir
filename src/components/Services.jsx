import { SERVICES } from '../data';
import '../App.css';

const iconSvg = (path) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

function Services() {

  return (
    <section id="services">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">خدمات</span>
          <h2>شش راهی که می‌توانیم با هم کار کنیم</h2>
          <p style={{ marginInline: 'auto' }}>
            از ساخت یک محصول واحد گرفته تا یک همکاری فنی مداوم - سطح مشارکتی را که مناسب است انتخاب کنید.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card reveal">
              <div className="service-icon">{iconSvg(s.icon)}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
