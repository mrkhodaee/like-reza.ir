import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     if (formRef.current) {
  //       gsap.fromTo(
  //         formRef.current,
  //         { opacity: 0, x: -50 },
  //         {
  //           opacity: 1,
  //           x: 0,
  //           duration: 1,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: formRef.current,
  //             start: "top 80%",
  //             once: true,
  //           },
  //         }
  //       );
  //     }
  //     if (infoRef.current) {
  //       gsap.fromTo(
  //         infoRef.current.children,
  //         { opacity: 0, y: 30 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.6,
  //           stagger: 0.12,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: infoRef.current,
  //             start: "top 80%",
  //             once: true,
  //           },
  //         }
  //       );
  //     }
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  const contactItems = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="3" />
          <path d="M22 7l-10 6L2 7" />
        </svg>
      ),
      label: "ایمیل",
      value: "mrkhodaee24@gmail.com",
      href: "mailto:mrkhodaee24@gmail.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: "تلفن",
      value: "+98 991 917 8860",
      href: "tel:+989919178860",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "مکان",
      value: "ایران، گلستان، گنبد کاووس",
      href: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.198 2.433a2.242 2.242 0 00-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 01-2.849 1.17l-.427.157a.524.524 0 00-.335.45l-.024.249a.673.673 0 00.087.337l.06.08a5.003 5.003 0 005.62 2.26l.12-.028.073-.015a3.003 3.003 0 012.178.637l.045.04a3.2 3.2 0 01.65 1.078l.08.214a.673.673 0 00.353.39l.247.082a.524.524 0 00.532-.165l.026-.033a6.33 6.33 0 003.163-5.455v-.186c0-.954-.282-1.878-.822-2.68a3.472 3.472 0 011.098-2.004l.002-.002a2.245 2.245 0 011.59-.662z" />
          <path d="M14.5 22l-.5-3-3-.5" />
        </svg>
      ),
      label: "تلگرام",
      value: "@like_reza",
      href: "https://t.me/like_reza_ir",
    },
  ];

  return (
    <section id="contact" ref={sectionRef}>
      <div className="container">
        <div className="section-head center">
          <span className="eyebrow">تماس</span>
          <h2>بیایید با هم صحبت کنیم</h2>
          <p style={{ marginInline: "auto" }}>
            آماده شنیدن ایده‌های شما هستم. فرم زیر را پر کنید یا از طریق کانال‌های زیر ارتباط برقرار کنید.
          </p>
        </div>

        <div className="contact-grid">
          <div ref={formRef} className="contact-form-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">نام و نام خانوادگی</label>
                  <div className="input-wrap">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <input type="text" id="name" placeholder="نام خود را وارد کنید" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">ایمیل</label>
                  <div className="input-wrap">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="3" />
                      <path d="M22 7l-10 6L2 7" />
                    </svg>
                    <input type="email" id="email" placeholder="ایمیل خود را وارد کنید" />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">موضوع</label>
                <div className="input-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <input type="text" id="subject" placeholder="موضوع پیام شما" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">پیام</label>
                <div className="input-wrap textarea-wrap">
                  <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                  </svg>
                  <textarea id="message" rows="5" placeholder="پیام خود را بنویسید..."></textarea>
                </div>
              </div>
              <button type="submit" className="contact-submit-btn magnetic">
                <span>ارسال پیام</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>

          <div ref={infoRef} className="contact-info-side">
            <div className="contact-info-header">
              <h3>راه‌های ارتباطی</h3>
              <p>از هر کدام که راحت‌تر هستید استفاده کنید</p>
            </div>
            <div className="contact-info-list">
              {contactItems.map((item, i) => (
                <div key={i} className="contact-info-item">
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} dir="ltr" target="_blank" rel="noopener noreferrer" className="contact-item-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-social-links">
              <a href="https://t.me/like_reza_ir" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="تلگرام">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
              <a href="https://instagram.com/like_reza.ir" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="اینستاگرام">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="https://github.com/mrkhodaee" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="گیت‌هاب">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* <a href="https://linkedin.com/in/like_reza" target="_blank" rel="noopener noreferrer" className="contact-social-link" aria-label="لینکدین">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
