import { useEffect } from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default function Education() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />

      <style>{`
        .edu-wrapper {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #eef5ff 0%, #e1efff 100%);
          padding: 140px 8vw 100px;
          display: flex;
          justify-content: center;
          font-family: 'Inter', sans-serif;
        }

        .edu-container {
          width: 100%;
          max-width: 1150px;
        }

        .edu-title {
          text-align: center;
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #0b63ff;
          margin-bottom: 8px;
        }

        .edu-subtitle {
          text-align: center;
          color: #5c6f87;
          font-size: 16px;
          margin-bottom: 60px;
        }

        .timeline {
          position: relative;
          margin-left: 18px;
          border-left: 3px solid rgba(0, 102, 255, 0.45);
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          gap: 42px;
        }

        .timeline-item {
          position: relative;
        }

        .timeline-marker {
          width: 14px;
          height: 14px;
          background: #0b63ff;
          border-radius: 50%;
          position: absolute;
          left: -35px;
          top: 6px;
          box-shadow: 0 0 0 6px rgba(0, 102, 255, 0.15);
        }

        .edu-card {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 122, 255, 0.15);
          border-radius: 14px;
          padding: 22px 26px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.07);
          transition: 0.3s ease;
        }

        .edu-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.1);
        }

        .edu-degree {
          font-size: 20px;
          font-weight: 700;
          color: #1c1f23;
          margin-bottom: 6px;
        }

        .edu-institute {
          font-size: 16px;
          font-weight: 600;
          color: #0b63ff;
          margin-bottom: 4px;
        }

        .edu-year {
          font-size: 14px;
          font-weight: 500;
          color: #677a90;
          margin-bottom: 10px;
        }

        .edu-details {
          font-size: 14.5px;
          color: #394a5e;
          line-height: 1.52;
          margin-bottom: 8px;
        }

        .edu-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .edu-tag {
          background: rgba(10,118,255,0.12);
          color: #0b63ff;
          padding: 5px 12px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 600;
        }

        @media(max-width: 700px) {
          .timeline {
            margin-left: 8px;
            padding-left: 22px;
          }
          .timeline-marker {
            left: -28px;
          }
        }
      `}</style>

      <section className="edu-wrapper">
        <div className="edu-container">

          <h2 className="edu-title">Education</h2>
          <p className="edu-subtitle">
            My academic foundation and learning journey
          </p>

          <div className="timeline">

            {/* B.Sc IT */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="edu-card">
                <div className="edu-degree">B.Sc Information Technology</div>
                <div className="edu-institute">JG University, Ahmedabad</div>
                <div className="edu-year">2023 – 2026 (Ongoing)</div>
                <p className="edu-details">
                  Currently pursuing B.Sc in IT with focus on software development,
                  backend systems, and modern web technologies.
                </p>
                <div className="edu-tags">
                  <span className="edu-tag">Full Stack</span>
                  <span className="edu-tag">Programming</span>
                  <span className="edu-tag">Databases</span>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="edu-card">
                <div className="edu-degree">12th Standard (Science Stream)</div>
                <div className="edu-institute">Rajasthan School, Gujarat Board</div>
                <div className="edu-year">2021 – 2023</div>
                <p className="edu-details">
                  Completed higher secondary education with focus on
                  Mathematics & Science.
                </p>
                <div className="edu-tags">
                  <span className="edu-tag">Science</span>
                  <span className="edu-tag">GSEB Board</span>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="edu-card">
                <div className="edu-degree">10th Standard</div>
                <div className="edu-institute">Rajasthan School, Gujarat Board</div>
                <div className="edu-year">2019 – 2021</div>
                <p className="edu-details">
                  Completed secondary education with distinction under GSEB board.
                </p>
                <div className="edu-tags">
                  <span className="edu-tag">GSEB Board</span>
                  <span className="edu-tag">Matriculation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </>
  );
}
