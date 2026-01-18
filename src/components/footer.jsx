import { Link } from "react-router-dom";
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          width: 100%;
          background: rgba(243, 247, 255, 0.65);
          backdrop-filter: blur(10px);
          padding: 34px 28px;
          border-top: 1px solid rgba(217, 229, 245, 0.85);
          font-family: "Inter", sans-serif;
          box-shadow: 0 -2px 22px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
        }

        .footer-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          min-width: 240px;
        }

        .footer-title {
          font-size: 15px;
          font-weight: 700;
          color: #2a3c57;
          margin-bottom: 4px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-link {
          text-decoration: none;
          font-size: 14px;
          color: #63748a;
          transition: 0.25s ease;
        }

        .footer-link:hover {
          color: #0d67ff;
        }

        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 6px;
        }

        .social-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: #e7efff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .social-icon:hover {
          background: #d6e5ff;
          transform: translateY(-2px);
        }

        .resume-btn {
          padding: 8px 14px;
          background: linear-gradient(135deg, #0d67ff, #004de0);
          color: white;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(13,103,255,0.25);
          transition: 0.25s ease;
          text-align: center;
        }

        .resume-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(13,103,255,0.35);
        }

        .footer-bottom {
          width: 100%;
          text-align: center;
          font-size: 13px;
          font-weight: 500;
          color: #7c8ba1;
          padding-top: 14px;
          border-top: 1px solid rgba(220,230,245,0.8);
          margin-top: 12px;
        }

        @media(max-width: 700px) {
          .footer {
            text-align: center;
          }
          .footer-col {
            align-items: center;
          }
          .footer-social {
            justify-content: center;
          }
        }
      `}</style>

      <footer className="footer">

        {/* Column 1: Navigation */}
        <div className="footer-col">
          <div className="footer-title">Navigation</div>
          <div className="footer-links">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/experience" className="footer-link">Experience</Link>
            <Link to="/education" className="footer-link">Education</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/skills" className="footer-link">Skills</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>

        {/* Column 2: Socials */}
        <div className="footer-col">
          <div className="footer-title">Connect</div>
          <div className="footer-social">
            <div className="social-icon" onClick={() => window.open("https://www.linkedin.com/in/amitsharma1111", "_blank")}>
              <Linkedin size={19} color="#0A66C2" />
            </div>
            <div className="social-icon" onClick={() => window.open("https://github.com/AmitSharma234", "_blank")}>
              <Github size={19} />
            </div>
            <div className="social-icon" onClick={() => window.open("https://www.instagram.com/i.amits_7", "_blank")}>
              <Instagram size={19} color="#d62976" />
            </div>
            <div className="social-icon" onClick={() => window.open("mailto:amitsh2523@gmail.com")}>
              <Mail size={19} color="#E36A01" />
            </div>
          </div>
        </div>

        {/* Column 3: Resume */}
        <div className="footer-col">
          <div className="footer-title">Resume</div>
          <button
            className="resume-btn"
            onClick={() => window.open("/Resume.pdf", "_blank")}
          >
            View Resume
          </button>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Amit Sharma™ · All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
