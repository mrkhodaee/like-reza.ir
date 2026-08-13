import useReveal from '../hooks/useReveal';
import { ACHIEVEMENTS } from '../data';
import '../App.css';

function Timeline() {
  useReveal();

  return (
  //   <section id="timeline">
  //   <div class="container">
  //     <div class="section-head center reveal">
  //       <span class="eyebrow">Achievements</span>
  //       <h2>A career, briefly</h2>
  //     </div>
  //     <div class="achieve-track" id="achieveTrack"></div>
  //   </div>
  // </section>

    <section id="timeline">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">مسیر حرفه‌ای</span>
          <h2>Achievements</h2>
        </div>
        <div className="achieve-track" id="achieveTrack">
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className="achieve-item reveal">
              <span className="year">{a.year}</span>
              <h4>{a.t}</h4>
              <p>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
