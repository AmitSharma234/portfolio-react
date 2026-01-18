import { motion } from "framer-motion";
import ProfilePic from "../assets/p1.jpg"; // your image here

export default function About() {
  const techSkills = [
    "Python", "C", "C++", "PHP", "HTML", "CSS", "JavaScript", "MySQL"
  ];

  const softSkills = [
    "Teamwork", "Communication", "Problem-Solving", "Adaptability",
    "Time Management", "Creativity", "Attention to Detail", "Work Ethic"
  ];

  return (
    <>
      <style>{`
        .about-section {
          width: 100%;
          padding: 120px 32px;
          background: linear-gradient(180deg, #eef7ff 0%, #e3f3ff 100%);
          position: relative;
          overflow: hidden;
        }

        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://svgshare.com/i/14tG.svg');
          opacity: 0.35;
          pointer-events: none;
        }

        .geo-shape {
          position: absolute;
          width: 120px;
          height: 120px;
          background: rgba(135, 160, 185, 0.18);
          clip-path: polygon(25% 6%, 75% 6%, 94% 50%, 75% 94%, 25% 94%, 6% 50%);
          border-radius: 6px;
        }
        .geo-shape:nth-child(1) { top: 22%; left: 12%; }
        .geo-shape:nth-child(2) { top: 68%; left: 20%; transform: scale(0.85); }
        .geo-shape:nth-child(3) { top: 18%; left: 70%; transform: scale(1.2); }
        .geo-shape:nth-child(4) { bottom: 10%; left: 58%; transform: scale(1.1); }

        .about-container {
          max-width: 1350px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          align-items: flex-start;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 40px;
        }

        .about-title {
          width: 100%;
          text-align: center;
          font-size: clamp(2.4rem, 6vw, 3.2rem);
          font-weight: 800;
          color: #0d67ff;
          margin-bottom: 6px;
        }

        .about-subtitle {
          width: 100%;
          text-align: center;
          font-size: 17px;
          font-weight: 500;
          color: #4c5c77;
          margin-bottom: 52px;
        }

        .about-left {
          flex: 1.3;
          min-width: 300px;
          font-size: 17px;
          color: #344054;
          line-height: 1.65;
        }

        .about-left b { color: #202020; }

        .highlight {
          color: #0d67ff;
          font-weight: 600;
        }

        .skills-wrapper {
          margin-top: 28px;
          margin-bottom: 18px;
        }

        .skills-heading {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #1e1e1e;
        }

        .skill-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pill {
          background: #fff;
          border: 1px solid #e4e7ec;
          padding: 8px 14px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 500;
          color: #3a4b68;
          backdrop-filter: blur(4px);
        }

        .about-right {
          flex: 1;
          min-width: 280px;
          display: flex;
          justify-content: center;
        }

        .photo-box {
          width: clamp(240px, 28vw, 350px);
          height: clamp(240px, 28vw, 350px);
          background: #faf8e6;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 40px rgba(0,0,0,0.12);
        }

        .photo-box img {
          width: 85%;
          height: 85%;
          border-radius: 50%;
          object-fit: cover;
        }

        @media(max-width: 900px) {
          .about-left { text-align: center; }
        }
      `}</style>

      <section className="about-section">
        <div className="grid-bg"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>

        <div className="about-container">

          {/* TITLE */}
          <motion.h2
            className="about-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="about-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turning ideas into clean, scalable digital experiences.
          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              I’m <b>Amit M. Sharma</b>, a <b>B.Sc. Information Technology undergraduate</b> from Ahmedabad with hands-on
              experience in developing scalable web applications, responsive UI/UX layouts, and structured database systems.
            </p>
            <br />

            <p>
              With strong interests in <b>full-stack development</b>, I have built platforms such as interview preparation tools,
              tourism information systems, and e-commerce UIs—each focused on <b>performance, accessibility</b>, and
              user-centered design.
            </p>
            <br />

            <p>
              I enjoy solving real-world problems with clean code, intuitive workflows, and optimized architectures.
            </p>
            <br />

            <p>
              When I’m not coding, I improve my skills in <b>design thinking, UI/UX</b>, and modern web ecosystems to stay 
              aligned with industry trends.
            </p>

            {/* TECH SKILLS */}
            <div className="skills-wrapper">
              <div className="skills-heading">Technical Skills</div>
              <div className="skill-pills">
                {techSkills.map((s, i) => (
                  <span className="pill" key={i}>{s}</span>
                ))}
              </div>
            </div>

            {/* SOFT SKILLS */}
            <div className="skills-wrapper">
              <div className="skills-heading">Soft Skills</div>
              <div className="skill-pills">
                {softSkills.map((s, i) => (
                  <span className="pill" key={i}>{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="photo-box">
              <img src={ProfilePic} alt="Profile" />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
