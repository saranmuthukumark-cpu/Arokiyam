import { FiDownload } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import './CallToAction.css';

export default function CallToAction() {
  return (
    <section className="cta section-padding" id="cta">
      <div className="cta-glow"></div>
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title fade-in">
            Start Building Healthier Work Habits Today
          </h2>
          <p className="cta-description fade-in fade-in-delay-1">
            Let Arokiyam protect your health while you focus on building great software.
          </p>
          <div className="cta-buttons fade-in fade-in-delay-2">
            <a href="#download" className="btn btn-primary">
              <FiDownload size={16} />
              Download Arokiyam
            </a>
            <a href="https://github.com/anburocky3/arokiyam-app" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <FaGithub size={16} />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
