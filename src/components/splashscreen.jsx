import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(false), 2200);
    const t2 = setTimeout(() => onFinish && onFinish(), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onFinish]);

  return (
    <>
      <style>{`
        .splash {
          position: fixed;
          inset: 0;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
          overflow: hidden;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .slide-up {
          animation: slideUp 0.6s ease-in forwards;
        }

        .content {
          text-align: center;
          opacity: 0;
          animation: fadeText 0.9s ease forwards;
          animation-delay: 0.3s;
          transform: translateY(10px);
          font-family: "Inter", sans-serif;
        }

        .name {
          font-size: clamp(2.8rem, 7vw, 4.8rem);
          font-weight: 800;
          color: #111;
          letter-spacing: 1px;
          margin-bottom: 12px;
        }

        .role {
          font-size: clamp(1rem, 3vw, 1.2rem);
          font-weight: 400;
          color: #333;
          opacity: 0;
          animation: fadeText 0.9s ease forwards;
          animation-delay: 0.9s;
          backdrop-filter: blur(6px);
          padding: 6px 14px;
          border-radius: 8px;
          display: inline-block;
          border: 1px solid rgba(0,0,0,0.07);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes fadeText {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideUp {
          from { transform: translateY(0%); }
          to { transform: translateY(-100%); }
        }
      `}</style>

      {show && (
        <div className={`splash ${!show ? "slide-up" : ""}`}>
          <div className="content">
            <div className="name">AMIT SHARMA</div>
            <div className="role">Full-Stack Web Developer</div>
          </div>
        </div>
      )}
    </>
  );
}
