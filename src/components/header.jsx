import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  // Close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Experience", to: "/experience" },
    { name: "Education", to: "/education" },
    { name: "Projects", to: "/projects" },
    { name: "Skills", to: "/skills" },
  ];

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 72px;
          backdrop-filter: blur(10px);
          background: rgba(248, 250, 255, 0.55);
          border-bottom: 1px solid rgba(215,225,245,0.6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          font-family: "Inter", sans-serif;
          z-index: 3000;
          transition: 0.25s ease;
        }

        .header-scrolled {
          background: rgba(248, 250, 255, 0.85);
          box-shadow: 0 2px 20px rgba(0,0,0,0.08);
        }

        .brand {
          font-size: 21px;
          font-weight: 800;
          color: #0d4fff;
          cursor: pointer;
          user-select: none;
        }

        .nav {
          display: flex;
          gap: 26px;
          align-items: center;
        }

        .nav-link {
          text-decoration: none;
          color: #45546a;
          font-size: 15px;
          font-weight: 500;
          padding: 6px 10px;
          border-radius: 8px;
          transition: 0.25s ease;
        }

        .nav-link:hover {
          background: rgba(0, 100, 255, 0.1);
          color: #0d4fff;
        }

        .active {
          background: linear-gradient(135deg, #0d66ff, #0046e4);
          color: white !important;
        }

        /* Contact Button Desktop */
        .contact-btn {
          background: linear-gradient(135deg, #006eff, #0052ff);
          padding: 9px 18px;
          color: white;
          border-radius: 10px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          transition: 0.25s ease;
        }

        .contact-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .menu-btn {
          display: none;
        }

        /* Mobile Styles */
        @media(max-width: 980px) {
          .nav, .contact-btn {
            display: none;
          }

          .menu-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 9px 18px;
            font-size: 15px;
            font-weight: 600;
            color: white;
            border-radius: 50px;
            border: none;
            background: linear-gradient(135deg, #0d73ff, #0098ff);
            box-shadow: 0 4px 14px rgba(0,0,0,0.15);
            cursor: pointer;
          }

          .menu-panel {
            position: fixed;
            top: 80px;
            right: 20px;
            width: 270px;
            background: rgba(255,255,255,0.75);
            backdrop-filter: blur(12px);
            border-radius: 18px;
            border: 1px solid rgba(210,220,240,0.7);
            padding: 18px;
            display: flex;
            flex-direction: column;
            gap: 4px;
            box-shadow: 0 10px 28px rgba(0,0,0,0.18);
            animation: menuFade 0.3s ease forwards;
          }

          .menu-item {
            padding: 12px 14px;
            border-radius: 10px;
            font-size: 15px;
            font-weight: 500;
            color: #334155;
            text-decoration: none;
            transition: 0.25s ease;
          }

          .menu-item:hover {
            background: rgba(0,100,255,0.12);
            color: #0d4fff;
          }

          .menu-active {
            background: linear-gradient(135deg, #0d66ff, #0046e4);
            color: white !important;
          }

          @keyframes menuFade {
            from { opacity: 0; transform: translateY(-6px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>

      <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
        <div className="brand" onClick={() => (window.location.href = "/")}>
          Amit Sharma
        </div>

        {/* Desktop Navigation */}
        <nav className="nav">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className={
                location.pathname === item.to ? "nav-link active" : "nav-link"
              }
            >
              {item.name}
            </Link>
          ))}

          {/* Contact Button */}
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
        </nav>

        {/* Mobile Button */}
        <button className="menu-btn" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div className="menu-panel" ref={menuRef}>
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              onClick={() => setOpen(false)}
              className={
                location.pathname === item.to
                  ? "menu-item menu-active"
                  : "menu-item"
              }
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "menu-item menu-active"
                : "menu-item"
            }
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
