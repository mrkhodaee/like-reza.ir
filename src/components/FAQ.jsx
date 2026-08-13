import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { FAQS } from '../data';
import '../App.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">سوالات متداول</span>
          <h2>FAQ</h2>
        </div>
        <div className="faq-list" id="faqList">
          {/* <div class="faq-item reveal" data-i="${i}">
    <button class="faq-q"><span>${f.q}</span><span class="plus"></span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div> */}
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? ' open' : ''}`} data-i={i}>
              <button className="faq-q" onClick={() => toggle(i)}>
                <span>{f.q}</span>
                <span className="plus"></span>
              </button>
              <div className="faq-a" style={{ maxHeight: openIndex === i ? '200px' : null }}>
                <p>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
