import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Mail, Github, Linkedin, FolderGit2 } from "lucide-react";
import ProfilePic from "../assets/p3.jpeg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        .hero {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #eef6ff 0%, #ddecff 100%);
          padding: 160px 32px 80px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-wrapper {
          max-width: 1350px;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 68px;
          flex-wrap: wrap;
          font-family: "Inter", sans-serif;
        }

        .left {
          flex: 1.2;
          min-width: 320px;
        }

        .tag {
          display: inline-block;
          background: #d6e7ff;
          padding: 7px 16px;
          border-radius: 40px;
          font-size: 14px;
          font-weight: 600;
          color: #0051d4;
          margin-bottom: 16px;
        }

        .title {
          font-size: clamp(2.8rem, 6vw, 4.8rem);
          font-weight: 800;
          line-height: 1.15;
          color: #0d0d0d;
          margin-bottom: 12px;
        }

        .title span {
          color: #0b6aff;
        }

        .role {
          font-size: clamp(1.3rem, 4vw, 1.7rem);
          font-weight: 600;
          color: #1a2530;
          margin-bottom: 22px;
        }

        .desc {
          width: 100%;
          max-width: 600px;
          font-size: 17px;
          line-height: 1.6;
          color: #495463;
          margin-bottom: 30px;
        }

        .btn-group {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .btn {
          padding: 13px 22px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: 0.28s ease;
        }

        .btn-primary {
          background: linear-gradient(135deg, #0b6aff, #0048d8);
          color: white;
        }
        .btn-primary:hover { opacity: 0.92; transform: translateY(-2px); }

        .btn-outline {
          background: white;
          color: #0b58ff;
          border: 1px solid #bdd4ff;
        }
        .btn-outline:hover { background: #f3f7ff; transform: translateY(-2px); }

        .socials {
          display: flex;
          gap: 14px;
        }

        .social-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: white;
          border: 1px solid #dce6ff;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: 0.3s ease;
        }
        .social-box:hover {
          transform: translateY(-3px);
          border-color: #0b6aff;
        }

        .right {
          flex: 1;
          min-width: 300px;
          display: flex;
          justify-content: center;
        }

        .photo {
          width: clamp(260px, 42vw, 420px);
          height: clamp(260px, 42vw, 420px);
          border-radius: 16px;
          overflow: hidden;
          border: 3px solid #b3ceff;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 10px 28px rgba(0,0,0,0.08);
        }

        .photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media(max-width: 980px) {
          .hero-wrapper { flex-direction: column; text-align: center; }
          .socials { justify-content: center; }
          .btn-group { justify-content: center; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-wrapper">

          {/* LEFT SIDE */}
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="tag">B.Sc. IT Undergraduate</div>

            <h1 className="title">
              Hello, I'm <br />
              <span>Amit M. Sharma</span>
            </h1>

            <div className="role">
              <Typewriter
                words={[
                  "Full Stack Web Developer",
                  "Frontend UI Engineer",
                  "Backend Developer",
                  "Problem Solver",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={65}
                deleteSpeed={45}
                delaySpeed={1300}
              />
            </div>

            <p className="desc">
              Motivated B.Sc. IT student with hands-on experience in full-stack web
              development, responsive UI systems, and scalable backend services.
              Passionate about building user-focused software solutions.
            </p>

            {/* Buttons */}
            <div className="btn-group">
              <button
                className="btn btn-primary"
                onClick={() => window.open("/Resume.pdf", "_blank")}
              >
                Download Resume
              </button>

              <button
                className="btn btn-outline"
                onClick={() => navigate("/projects")}
              >
                View Projects
              </button>

              <button
                className="btn btn-outline"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="socials">
              <div
                className="social-box"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/amitsharma1111", "_blank")
                }
              >
                <Linkedin size={22} color="#0b6aff" />
              </div>

              <div
                className="social-box"
                onClick={() =>
                  window.open("https://github.com/AmitSharma234", "_blank")
                }
              >
                <Github size={22} color="#222" />
              </div>

              <div
                className="social-box"
                onClick={() => (window.location = "mailto:amitsh2523@gmail.com")}
              >
                <Mail size={22} color="#e63900" />
              </div>

              <div
                className="social-box"
                onClick={() => navigate("/projects")}
              >
                <FolderGit2 size={22} color="#0b6aff" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="right"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="photo">
              <img src={ProfilePic} alt="Amit Sharma" />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
