import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default function Contact() {
  return (
    <>
      <Header />

      <style>{`
        .contact-section {
          width: 100%;
          min-height: 100vh;
          background: linear-gradient(180deg, #eef6ff, #dcecff);
          display: flex;
          justify-content: center;
          padding: 140px 20px 120px;
          font-family: "Inter", sans-serif;
        }

        .contact-container {
          width: 100%;
          max-width: 1300px;
          display: flex;
          flex-direction: column;
          gap: 70px;
        }

        .contact-header {
          text-align: center;
          max-width: 750px;
          margin: 0 auto;
        }

        .contact-header h2 {
          font-size: 44px;
          font-weight: 800;
          color: #1c4bab;
          margin-bottom: 6px;
        }

        .contact-header p {
          font-size: 15.5px;
          color: #586a85;
          line-height: 1.6;
        }

        .contact-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 35px;
          justify-content: center;
          width: 100%;
        }

        .contact-card {
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(255,255,255,0.45);
          border-radius: 22px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
          padding: 35px 38px;
          max-width: 540px;
          flex: 1;
          min-width: 330px;
        }

        /* FORM */
        .form-card label {
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 6px;
          display: block;
          color: #475369;
        }

        .form-card input,
        .form-card textarea {
          width: 100%;
          padding: 13px 15px;
          margin-bottom: 18px;
          border-radius: 10px;
          border: 1px solid #d6e3fa;
          font-size: 15px;
          background: #fff;
          transition: 0.25s;
        }

        .form-card input:focus,
        .form-card textarea:focus {
          border-color: #2b6cff;
          outline: none;
          box-shadow: 0 0 0 2px rgba(43,108,255,0.20);
        }

        .form-card textarea {
          min-height: 150px;
          resize: none;
        }

        .form-card button {
          width: 100%;
          padding: 13px;
          background: linear-gradient(135deg, #2b6cff, #1f52d1);
          color: white;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          transition: 0.28s;
        }

        .form-card button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(43,108,255,0.35);
        }

        /* SOCIAL */
        .social-desc {
          font-size: 15px;
          color: #586a85;
          margin-bottom: 24px;
          line-height: 1.55;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 6px;
          margin-bottom: 6px;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          transition: 0.25s;
          color: inherit;
        }

        .social-item:hover {
          background: #f1f5ff;
          transform: translateX(4px);
        }

        .social-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-icon.linkedin { background: #e0ecff; color: #2b6cff; }
        .social-icon.github { background: #e7e7e7; color: #000; }
        .social-icon.instagram { background: #ffe0f3; color: #d62976; }
        .social-icon.mail { background: #ffe8d4; color: #e37400; }

        .social-title {
          font-weight: 700;
          font-size: 15.5px;
          color: #202a3d;
        }

        .social-sub {
          font-size: 13px;
          color: #596578;
        }

        @media(max-width: 900px) {
          .contact-header h2 { font-size: 36px; }
        }
      `}</style>

      <section className="contact-section">
        <div className="contact-container">

          {/* HEADING */}
          <div className="contact-header">
            <h2>Let's Connect</h2>
            <p>
              Have a project, collaboration request, or just want to say hello?
              I’d love to hear from you. I reply to every message.
            </p>
          </div>

          <div className="contact-grid">

            {/* FORM */}
            <div className="contact-card form-card">
              <label>Your Name</label>
              <input type="text" placeholder="John Doe" />

              <label>Your Email</label>
              <input type="email" placeholder="example@gmail.com" />

              <label>Message</label>
              <textarea placeholder="Write your message..."></textarea>

              <button>Send Message</button>
            </div>

            {/* SOCIAL */}
            <div className="contact-card">
              <p className="social-desc">
                You can also reach me on these platforms — I’m always open to networking, collaboration, or mentorship.
              </p>

              <a href="https://www.linkedin.com/in/amitsharma1111" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon linkedin">
                  <Linkedin size={22} />
                </div>
                <div>
                  <p className="social-title">LinkedIn</p>
                  <p className="social-sub">@amitsharma1111</p>
                </div>
              </a>

              <a href="https://github.com/AmitSharma234" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon github">
                  <Github size={22} />
                </div>
                <div>
                  <p className="social-title">GitHub</p>
                  <p className="social-sub">@AmitSharma234</p>
                </div>
              </a>

              <a href="https://www.instagram.com/i.amits_7" target="_blank" rel="noreferrer" className="social-item">
                <div className="social-icon instagram">
                  <Instagram size={22} />
                </div>
                <div>
                  <p className="social-title">Instagram</p>
                  <p className="social-sub">@i.amits_7</p>
                </div>
              </a>

              <div className="social-item">
                <div className="social-icon mail">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="social-title">Email</p>
                  <p className="social-sub">amitsh2523@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
