import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "فرانت‌اند",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    title: "ابزارها",
    skills: [
      { name: "Git", level: 85 },
      { name: "Webpack/Vite", level: 80 },
      { name: "Figma", level: 60 },
      { name: "Docker", level: 50 },
      { name: "GSAP", level: 85 },
    ],
  },
  {
    title: "سایر مهارت‌ها",
    skills: [
      { name: "Responsive Design", level: 90 },
      { name: "UI/UX", level: 75 },
      { name: "REST API", level: 80 },
      { name: "Performance", level: 70 },
      { name: "Team Work", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, index }) => {
  const barRef = useRef(null);

  // useEffect(() => {
  //   const bar = barRef.current;
  //   if (!bar) return;

  //   gsap.fromTo(
  //     bar,
  //     { width: "0%" },
  //     {
  //       width: `${level}%`,
  //       duration: 1.5,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: bar,
  //         start: "top 85%",
  //         once: true,
  //       },
  //     }
  //   );
  // }, [level]);

  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-percent">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div ref={barRef} className="skill-bar-fill" style={{ width: "0%" }}></div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">مهارت‌ها</h2>
        <p className="section-subtitle">تکنولوژی‌ها و ابزارهایی که با آنها کار می‌کنم</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((cat, catIdx) => (
          <div key={catIdx} className="skill-category">
            <h3 className="skill-category-title">{cat.title}</h3>
            <div className="skill-bars">
              {cat.skills.map((skill, skIdx) => (
                <SkillBar key={skIdx} name={skill.name} level={skill.level} index={skIdx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
