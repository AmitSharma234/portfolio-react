import { motion } from "framer-motion";
import ProfilePic1 from "../assets/Ganeshlogo.png";
import ProfilePic2 from "../assets/cholislogo.jpg";
import ProfilePic3 from "../assets/interviewlogo.png";


export default function ProjectsSection() {
  const projects = [
    {
      title: "InterviewQuestions.co.in",
      img: ProfilePic3,
      desc: "A production-grade interview preparation platform offering curated questions, coding prompts, structured topics, and fast search. Optimized for SEO and user acquisition with thousands of indexed pages on Google.",
      tags: ["Next.js", "SEO", "Tailwind CSS", "Static Rendering"],
      live: "https://interviewquestions.co.in",
      featured: true
    },
    {
      title: "Ganesh Tourism",
      img: ProfilePic1,
      desc: "Tourism & travel website offering tour insights, destination highlights, and cultural information. Responsive layouts, mobile navigation, and fast image/CDN delivery ensure strong UX across devices.",
      tags: ["React.js", "Responsive UI", "Dynamic Routing", "Images CDN"],
      live: "https://www.ganeshtourism.com/",
      featured: true
    },
    {
      title: "Cholis.in",
      img: ProfilePic2,
      desc: "Modern eCommerce fashion storefront with product listings, category filters, and smooth UX flow for browsing fashion apparel. Optimized checkout flow and visually clean shopping experience.",
      tags: ["React.js", "E-Commerce UI", "CSS", "Filters"],
      live: "https://cholis.in/",
      featured: true
    }
  ];

  return (
    <>
      <style>{`
        .proj-section {
          width: 100%;
          padding: 120px 32px;
          background: linear-gradient(180deg, #eef7ff 0%, #e3f3ff 100%);
          position: relative;
          overflow: hidden;
        }

        .proj-container {
          max-width: 1350px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .proj-title {
          text-align: center;
          font-size: clamp(2.4rem, 6vw, 3rem);
          font-weight: 800;
          color: #0d67ff;
          margin-bottom: 8px;
        }

        .proj-subtitle {
          text-align: center;
          font-size: 16px;
          color: #4c5c77;
          margin-bottom: 60px;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }

        .proj-card {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(14px);
          border-radius: 20px;
          border: 1px solid #dde7f9;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          transition: 0.35s ease;
        }

        .proj-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.10);
        }

        .proj-img {
          width: 100%;
          height: 210px;
          object-fit: cover;
          border-radius: 14px;
          margin-bottom: 16px;
        }

        .badge {
          background: #ff9800;
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          margin-bottom: 10px;
          display: inline-block;
          font-weight: 600;
        }

        .proj-card h3 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #202020;
        }

        .proj-card p {
          font-size: 15px;
          line-height: 1.55;
          color: #43526a;
          margin-bottom: 18px;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 22px;
        }

        .tag {
          background: rgba(13,103,255,0.1);
          color: #0d67ff;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
        }

        .proj-btns {
          display: flex;
          gap: 10px;
        }

        .proj-btn {
          padding: 8px 16px;
          border-radius: 6px;
          border: 1px solid #0d67ff;
          color: #0d67ff;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }

        .proj-btn:hover {
          background: #0d67ff;
          color: white;
        }

      `}</style>

      <section className="proj-section">
        <div className="proj-container">

          <motion.h2
            className="proj-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="proj-subtitle"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Real-world applications showcasing my development experience
          </motion.div>

          <div className="proj-grid">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="proj-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {proj.featured && <span className="badge">Featured</span>}
                <img className="proj-img" src={proj.img} alt={proj.title} />
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>

                <div className="tags">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>

                <div className="proj-btns">
                  <a href={proj.live} target="_blank" className="proj-btn">Live Preview</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
