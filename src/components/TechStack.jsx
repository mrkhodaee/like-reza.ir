import useReveal from '../hooks/useReveal';
import { SKILLS, TECHS } from '../data';
import '../App.css';

const iconSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
  </svg>
);

function TechStack() {
  useReveal();

  return (
<>
    {/* <section id="techstack">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">تکنولوژی‌ها</span>
          <h2>ابزارهایی که با آنها کار می‌کنم</h2>
        </div>
        <div className="tech-grid">
            <div key={i} className="tech-card reveal">
              <div className="t-icon">{iconSvg}</div>
              <span>{t}</span>
            </div>
        </div>
      </div>
    </section> */}

    {/* <div class="skill-row">
    <div class="skill-top"><span>${s.name}</span><span>${s.pct}%</span></div>
    <div class="skill-track"><div class="skill-fill" data-pct="${s.pct}"></div></div>
  </div> */}

    <section id="skills">
    <div className="container">
      <div className="section-head center reveal">
        <span className="eyebrow">مهارت‌ها و فناوری‌ها</span>
        <h2>ابزارها و فناوری‌هایی که پروژه‌هایم را با آن‌ها می‌سازم.</h2>
      </div>
      <div className="skills-grid">
        <div className="skill-bars reveal-left" id="skillBars">
          {SKILLS.map((s, i) => (
  <div key={i} className="skill-row">
    <div className="skill-top">
      <span>{s.name}</span>
      <span>{s.pct}%</span>
    </div>

    <div className="skill-track">
      <div
        className="skill-fill"
        style={{ width: `${s.pct}%` }}
      />
    </div>
  </div>
))}
        </div>
        <div className="tech-cards reveal-right" id="techCards">
          {TECHS.map((t, i) => (

<div key={i} class="tech-card">
    <div class="t-icon">{iconSvg}</div>
    <span>{t}</span>
  </div>
          ))}

        </div>
      </div>
    </div>
  </section>
</>

  );
}

export default TechStack;
