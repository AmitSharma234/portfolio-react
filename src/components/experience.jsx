import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <>
      <style>{`
        .exp-section {
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
          background: rgba(135,160,185,0.18);
          clip-path: polygon(25% 6%,75% 6%,94% 50%,75% 94%,25% 94%,6% 50%);
          border-radius: 6px;
        }
        .geo-shape:nth-child(1){ top:20%; left:10%; }
        .geo-shape:nth-child(2){ top:65%; left:75%; transform:scale(.9); }
        .geo-shape:nth-child(3){ top:10%; left:55%; transform:scale(1.2); }
        .geo-shape:nth-child(4){ bottom:20%; left:20%; transform:scale(.8); }

        .exp-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .exp-title {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #0d67ff;
          margin-bottom: 6px;
        }

        .exp-subtitle {
          font-size: 16px;
          color: #4c5c77;
          margin-bottom: 60px;
        }

        /* Empty State Card */
        .empty-box {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px;
          border-radius: 16px;
          background: rgba(255,255,255,0.55);
          border: 1px solid #e3eaf5;
          backdrop-filter: blur(6px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.06);
        }

        .empty-title {
          font-size: 20px;
          font-weight: 700;
          color: #2a364d;
          margin-bottom: 10px;
        }

        .empty-text {
          font-size: 15px;
          color: #51627f;
          line-height: 1.6;
        }

        .empty-hint {
          margin-top: 16px;
          font-size: 14px;
          color: #597095;
          font-style: italic;
        }
      `}</style>

      <section className="exp-section">

        {/* Background Layers */}
        <div className="grid-bg"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>

        <div className="exp-container">

          <motion.h2
            className="exp-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional Experience
          </motion.h2>

          <motion.div
            className="exp-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My professional journey and key achievements
          </motion.div>

          {/* EMPTY STATE VIEW */}
          <motion.div
            className="empty-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="empty-title">No Experience Added Yet</div>
            <div className="empty-text">
              I am currently building my experience in software development and continuously improving my skills.
            </div>
            <div className="empty-hint">
              Check back soon — new achievements will be updated here.
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
