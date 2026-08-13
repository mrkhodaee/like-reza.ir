import CardNav from "./CardNav";

import logo from "../assets/logo.png";
import myWork from "../assets/my-work1.jpg";

function Header() {
  return (
    <>
      <header className="hero" id="home">
        <div className="hero-bg">
          <div className="blob blob1"></div>
          <div className="blob blob2"></div>
          <div className="blob blob3"></div>
          <canvas id="particles"></canvas>
        </div>
        <div className="container hero-grid">
          {/* Left Side */}
          <div className="hero-copy">
            <span className="hero-badge">
              👋 <b>محمدرضا خدائی</b> — توسعه‌دهنده وب | مدرس برنامه‌نویسی | بنیان‌گذار Master Novin
            </span>
            <h1>
              از <span className="gradient-text">ایده </span>تا <span className="gradient-text">محصول </span>کنار شما هستم.
            </h1>
            <p className="lead">
              کمک می‌کنم کسب‌وکارها با نرم‌افزارهای حرفه‌ای رشد کنند و برنامه‌نویسان آینده با آموزش‌های عملی وارد بازار کار شوند.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary magnetic">
                شروع همکاری
              </a>
              <a href="#work" className="btn btn-outline magnetic">
                مشاهده پروژه ها
              </a>
            </div>
            <div className="hero-proof">
              <div className="avatar-stack">
                <span
                  style={{
                    "--c1": "#2563EB",
                    "--c2": "#06B6D4",
                  }}
                ></span>
                <span
                  style={{
                    "--c1": "#8B5CF6",
                    "--c2": "#2563EB",
                  }}
                ></span>

                <span
                  style={{
                    "--c1": "#06B6D4",
                    "--c2": "#8B5CF6",
                  }}
                ></span>
              </div>
              <div className="proof-text">
                <div className="stars">★★★★★</div>
                <span>مورد اعتماد بیش از ۲۰۰ بنیانگذار و تیم مهندسی</span>
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="portrait-wrap">
            <div className="portrait-glow"></div>
            <div className="portrait-glow two"></div>

            <div className="portrait-shapes">
              <div className="geo geo1"></div>
              <div className="geo geo2"></div>
              <div className="geo geo3"></div>
              <div className="geo geo4"></div>
            </div>
            <div className="portrait-card" id="portraitCard">
              <div className="portrait-inner">
                <img
                  src={myWork}
                  alt="Portrait of Adrian Voss, founder of Voss Digital"
                  loading="lazy"
                />

                <div className="portrait-reflection"></div>
              </div>

              <div className="portrait-tag">
                <i></i>

                <div>
                  <span>دورکاری در سراسر جهان</span>
                  <strong>برای پروژه های جدید موجود است</strong>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="scroll-indicator">
          <span>Scroll</span>
          <div className="line"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
