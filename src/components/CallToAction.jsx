import { FiDownload } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-[100px] md:py-[80px]" id="cta">
      {/* Ambient glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'var(--accent-primary)',
          filter: 'blur(120px)',
          opacity: 0.08,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center max-w-[700px] mx-auto">
          <h2
            className="cta-title section-title fade-in mb-5"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)' }}
          >
            Start Building Healthier Work Habits Today
          </h2>
          <p
            className="fade-in fade-in-delay-1 text-[1.05rem] mb-9 leading-[1.7]"
            style={{ color: 'var(--text-secondary)' }}
          >
            Let Arokiyam protect your health while you focus on building great software.
          </p>
          <div className="fade-in fade-in-delay-2 flex items-center justify-center gap-4 flex-wrap max-[768px]:flex-col">
            <a href="#download" className="btn btn-primary inline-flex items-center gap-2 px-[26px] py-[13px] rounded-xl font-semibold text-[0.9rem]">
              <FiDownload size={16} />
              Download Arokiyam
            </a>
            <a
              href="https://github.com/anburocky3/arokiyam-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary inline-flex items-center gap-2 px-[26px] py-[13px] rounded-xl font-semibold text-[0.9rem]"
            >
              <FaGithub size={16} />
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
