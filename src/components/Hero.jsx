import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaWindows, FaApple, FaLinux } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: 'var(--bg-primary)' }}
      id="hero"
    >
      {/* Gradient hero background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
      />

      {/* Ambient glow orbs */}
      <div
        className="hero-glow absolute rounded-full pointer-events-none"
        style={{
          width: 500,
          height: 500,
          background: 'var(--accent-primary)',
          top: -150,
          left: -100,
          opacity: 0.10,
          filter: 'blur(120px)',
        }}
      />
      <div
        className="hero-glow absolute rounded-full pointer-events-none"
        style={{
          width: 400,
          height: 400,
          background: 'var(--accent-purple)',
          bottom: -80,
          right: -100,
          opacity: 0.08,
          filter: 'blur(120px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-[1] w-full max-[768px]:pb-[60px] text-center">
        {/* Badge */}
        <div
          className="hero-badge fade-in inline-flex items-center gap-2 px-4 py-[7px] rounded-full text-[0.8rem] font-medium mb-8"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-glass)',
            color: 'var(--accent-primary-hover)',
            backdropFilter: 'var(--backdrop-blur)',
          }}
        >
          <img src="/logo.png" alt="" className="w-5 h-5 rounded-[5px] object-cover" />
          Open Source Desktop Wellness
        </div>

        {/* Title */}
        <h1
          className="fade-in fade-in-delay-1 font-bold mb-5 tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', lineHeight: 1.12 }}
        >
          Your Intelligent Desktop<br />
          <span
            style={{
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Wellness Companion
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="fade-in fade-in-delay-2 mb-9 leading-relaxed max-w-[520px] mx-auto"
          style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)', color: 'var(--text-secondary)' }}
        >
          Track stress, take smart breaks, and protect your health — all while you code.
        </p>

        {/* Buttons */}
        <div className="fade-in fade-in-delay-3 flex flex-row items-center justify-center gap-[14px] mb-12 flex-wrap max-[768px]:flex-col">
          <a href="#download" className="btn btn-primary inline-flex items-center gap-2 px-[26px] py-[13px] rounded-xl font-semibold text-[0.9rem]">
            <FiDownload size={16} />
            Download
          </a>
          <a
            href="https://github.com/anburocky3/arokiyam-app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary inline-flex items-center gap-2 px-[26px] py-[13px] rounded-xl font-semibold text-[0.9rem]"
          >
            <FaGithub size={16} />
            View on GitHub
          </a>
        </div>

        {/* Platforms */}
        <div
          className="fade-in fade-in-delay-4 flex items-center justify-center gap-3 text-[0.8rem]"
          style={{ color: 'var(--text-muted)' }}
        >
          <span className="flex items-center gap-[5px]"><FaWindows size={14} />Windows</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span className="flex items-center gap-[5px]"><FaApple size={14} />macOS</span>
          <span style={{ opacity: 0.4 }}>·</span>
          <span className="flex items-center gap-[5px]"><FaLinux size={14} />Linux</span>
        </div>
      </div>
    </section>
  );
}
