const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="brand">
                <span className="brand-mark">IR</span>
                Like Reza
              </a>

              <p>
                مهندسی و طراحی محصول ممتاز، با هدایت مستقیم «مستر نوین» — برای بنیان‌گذارانی که می‌خواهند کار از همان ابتدا به درستی انجام شود.
              </p>

              <div className="footer-social">
                <a href="#" aria-label="X">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4l16 16M20 4L4 20" />
                  </svg>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <line x1="8" y1="10" x2="8" y2="16" />
                    <line x1="8" y1="7" x2="8" y2="7.01" />
                    <path d="M12 16v-4a2 2 0 0 1 4 0v4" />
                  </svg>
                </a>

                <a href="#" aria-label="YouTube">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="6" width="20" height="12" rx="3" />
                    <path d="M10 9l5 3-5 3z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="footer-col">
              <h5>دسترسی سریع</h5>
              <ul>
                <li>
                  <a href="#founder">درباره</a>
                </li>
                <li>
                  <a href="#services">خدمات</a>
                </li>
                <li>
                  <a href="#work">نمونه کارها</a>
                </li>
                <li>
                  <a href="#pricing">قیمت ها</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>شرکت</h5>
              <ul>
                <li>
                  <a href="#timeline">تایم لاین</a>
                </li>
                <li>
                  <a href="#testimonials">نظرات مشتریان</a>
                </li>
                <li>
                  <a href="#faq">سوالات</a>
                </li>
                <li>
                  <a href="#">بلاگ</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>تماس</h5>

              <p className="contact-line">mrkhodaee24@gmail.com</p>
              <p className="contact-line">ایران - گلستان - گنبد کاووس</p>

              <form className="newsletter-form" id="newsletterForm">
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  aria-label="Email address"
                />
                <button type="submit">Join</button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© ۲۰۲۶ Master Novin. تمامی حقوق محفوظ است.</span>

            <span style={{ display: "flex", gap: "22px" }}>
              <a href="#">حریم خصوصی</a>
              <a href="#">شرایط</a>
            </span>
          </div>
        </div>
      </footer>
      <button className="back-to-top" id="backToTop" aria-label="Back to top">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </>
  );
};

export default Footer;
