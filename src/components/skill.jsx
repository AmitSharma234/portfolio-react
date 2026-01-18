import { motion } from "framer-motion";

export default function Skill() {
  const programming = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
  ];

  const web = [
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
  ];

  const databases = [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
  ];

  const tools = [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "cPanel", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968872.png" },
    { name: "Web Hosting", icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png" }
  ];

  const concepts = [
    "Responsive UI/UX",
    "Problem Solving",
    "Web Performance Optimization",
    "Version Control",
    "Clean Code Practices"
  ];

  return (
    <>
      <style>{`
        .skills-section {
          width: 100%;
          padding: 120px 32px;
          background: linear-gradient(180deg, #eef7ff 0%, #e3f3ff 100%);
          position: relative;
        }

        .skills-container {
          max-width: 1350px;
          margin: 0 auto;
        }

        .skills-title {
          text-align: center;
          font-size: clamp(2.2rem, 6vw, 3rem);
          font-weight: 800;
          color: #0d67ff;
          margin-bottom: 6px;
        }

        .skills-subtitle {
          text-align: center;
          font-size: 16px;
          color: #48546d;
          margin-bottom: 50px;
        }

        .skill-group {
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid #d7e8ff;
          backdrop-filter: blur(12px);
          padding: 28px;
          border-radius: 18px;
          margin-bottom: 42px;
          transition: 0.3s ease;
        }

        .skill-group:hover {
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.07);
        }

        .skill-group-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 26px;
          color: #14233d;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .skill-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
          gap: 20px;
        }

        .skill-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          background: white;
          border: 1px solid #e1e8f5;
          border-radius: 12px;
          padding: 18px 12px;
          transition: 0.25s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .skill-card img {
          width: 42px;
          height: 42px;
        }

        .skill-card span {
          font-size: 14px;
          font-weight: 600;
          color: #303e59;
        }

        .concept-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 14px;
        }

        .concept-pill {
          background: white;
          border: 1px solid #d9e6ff;
          padding: 8px 14px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #354661;
        }
      `}</style>

      <section className="skills-section">
        <div className="skills-container">
          <motion.h2
            className="skills-title"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>

          <motion.div
            className="skills-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Tools, technologies & concepts I work with
          </motion.div>

          {/* CATEGORY GENERATOR */}
          {[
            { title: "Programming Languages", data: programming },
            { title: "Web Development", data: web },
            { title: "Databases", data: databases },
            { title: "Tools & Platforms", data: tools },
          ].map((block, idx) => (
            <div className="skill-group" key={idx}>
              <motion.div
                className="skill-group-title"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {block.title} →
              </motion.div>

              <div className="skill-grid">
                {block.data.map((s, i) => (
                  <motion.div
                    key={i}
                    className="skill-card"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                  >
                    <img src={s.icon} alt={s.name} />
                    <span>{s.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* CONCEPTS */}
          <div className="skill-group">
            <div className="skill-group-title">Core Concepts & Strengths →</div>
            <div className="concept-list">
              {concepts.map((c, i) => (
                <motion.div
                  key={i}
                  className="concept-pill"
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  {c}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
