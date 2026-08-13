import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "فروشگاه آنلاین",
    desc: "یک پلتفرم خرید و فروش مدرن با React و Node.js با قابلیت پرداخت آنلاین، مدیریت محصولات و پنل ادمین.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "#67e8f9",
  },
  {
    title: "سیستم مدیریت محتوا",
    desc: "CMS سفارشی با قابلیت مدیریت کاربران، نقش‌ها، محتوا و آپلود فایل با معماری ماژولار و مقیاس‌پذیر.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    color: "#22d3ee",
  },
  {
    title: "اپلیکیشن آب و هوا",
    desc: "برنامه پیش‌بینی آب و هوا با داده‌های لحظه‌ای، انیمیشن‌های پویا و پشتیبانی از موقعیت مکانی.",
    tags: ["React", "API", "GSAP"],
    color: "#2dd4bf",
  },
  {
    title: "وبسایت شخصی",
    desc: "این وبسایت! یک نمونه کار شخصی با طراحی مدرن، انیمیشن‌های روان و تجربه کاربری عالی.",
    tags: ["React", "Vite", "GSAP"],
    color: "#67e8f9",
  },
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);

  // useEffect(() => {
  //   const el = cardRef.current;
  //   if (!el) return;

  //   gsap.fromTo(
  //     el,
  //     { opacity: 0, y: 60 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: el,
  //         start: "top 85%",
  //         once: true,
  //       },
  //     }
  //   );
  // }, []);

  return (
    <div ref={cardRef} className="project-card" style={{ "--accent": project.color }}>
      <div className="project-card-glow" style={{ background: project.color }}></div>
      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-desc">{project.desc}</p>
      <div className="project-card-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">پروژه‌ها</h2>
        <p className="section-subtitle">نمونه کارهایی که انجام داده‌ام</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
