import myWork from '../assets/my-work1.jpg'
import '../App.css';

const About = () => {
  return (
    <section id="founder">
    <div className="container founder-grid">
      <div className="founder-visual reveal-left">
        <img src={myWork}
          alt="Adrian Voss working at his desk" loading="lazy"/>
        <div className="founder-credentials">
          <span className="credential-chip">12+   سال تجربه</span>
          <span className="credential-chip">نواری سابق، خطی سابق</span>
          <span className="credential-chip">40k+ دانشجو</span>
        </div>
      </div>
      <div className="founder-copy reveal-right">
        <span className="eyebrow">درباره بنیانگذار</span>
        <h2>من ۱۲ سال را صرف ساخت محصولاتی کرده‌ام که دیگر مهندسان روی آن‌ها مطالعه می‌کنند.</h2>
        <p>من به‌عنوان یک مهندس بک‌اند شروع به کار کردم، پنج سال را صرف ساخت زیرساخت در استارت‌آپ‌های با رشد سریع کردم و در نهایت، کاری را که واقعاً می‌خواستم انجام دهم پیدا کردم: ساخت محصولات درجه‌یک و آموزش به افرادی که می‌خواستند همین مسیر را دنبال کنند.</p>
        <p>Master Novin همان ایده‌ای است که به یک شرکت تبدیل شد؛ مجموعه‌ای که با تیمی کوچک، اما با استانداردهای بالا، نرم‌افزارهای مدرن، وب‌سایت‌های حرفه‌ای و راهکارهای دیجیتال را با دقت، کیفیت و تعهد توسعه می‌دهد.</p>
        <div className="founder-quote">"«فناوری زمانی ارزشمند است که زندگی انسان‌ها را ساده‌تر کند.»"</div>
        <div className="founder-stats">
          <div><strong>12+</strong><span>سال تجربه</span></div>
          <div><strong>90+</strong><span>پروژه</span></div>
          <div><strong>40k+</strong><span>دانشجو</span></div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
