import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { PORTFOLIO } from '../data';
import '../App.css';

const FILTERS = [
  { label: 'همه', value: 'all' },
  { label: 'ممحصول', value: 'product' },
  { label: 'برند', value: 'brand' },
  { label: 'پلتفرم', value: 'platform' },
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  useReveal();

  const filtered = activeFilter === 'all'
    ? PORTFOLIO
    : PORTFOLIO.filter((p) => p.cat === activeFilter);

  return (
    
    <section id="work">
  <div className="container">
    <div className="section-head center reveal">
      <span className="eyebrow">نمونه کارها</span>
      <h2>محصولاتی که برای رشد کسب‌وکارها ساخته‌ام</h2>
    </div>

    <div className="filters">
      {FILTERS.map((item) => (
        <button
          key={item.value}
          className={`filter-btn ${
            activeFilter === item.value ? "active" : ""
          }`}
          onClick={() => setActiveFilter(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>

    <div className="masonry">
      {filtered.map((p, i) => (
        <div
          key={i}
          className="mason-item reveal"
          style={{
            "--c1": p.c1,
            "--c2": p.c2,
            "--ratio": p.ratio,
          }}
        >
          <div className="thumb"></div>

          <div className="mason-overlay">
            <span className="cat">{p.label}</span>
            <h4>{p.title}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  );
}

export default Portfolio;
