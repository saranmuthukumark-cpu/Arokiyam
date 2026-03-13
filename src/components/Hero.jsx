import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-glow hero-glow-1"></div>
      <div className="hero-glow hero-glow-2"></div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge fade-in">
            <img src="/logo.png" alt="" className="hero-badge-logo" /> Open Source Desktop Wellness
          </div>

          <h1 className="hero-title fade-in fade-in-delay-1">
            Your Intelligent Desktop<br />
            <span>Wellness Companion</span>
          </h1>

          <p className="hero-subtitle fade-in fade-in-delay-2">
            Track stress, take smart breaks, and protect your health — all while you code.
          </p>

          <div className="hero-buttons fade-in fade-in-delay-3">
            <a href="#download" className="btn btn-primary">
              <FiDownload size={16} />
              Download
            </a>
            <a href="https://github.com/anburocky3/arokiyam-app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGithub size={16} />
              View on GitHub
            </a>
          </div>

          <div className="hero-platforms fade-in fade-in-delay-4">
            <span className="hero-platform">
              <FaWindows size={14} />
              Windows
            </span>
            <span className="hero-platform-dot">·</span>
            <span className="hero-platform">
              <FaApple size={14} />
              macOS
            </span>
            <span className="hero-platform-dot">·</span>
            <span className="hero-platform">
              <FaLinux size={14} />
              Linux
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
