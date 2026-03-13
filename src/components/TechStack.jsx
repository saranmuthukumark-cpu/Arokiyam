import './TechStack.css';

const techs = [
  { name: 'Electron', desc: 'Cross-platform desktop framework', icon: '⚛️', color: '#47848f' },
  { name: 'React', desc: 'Component-based UI library', icon: '⚛️', color: '#61dafb' },
  { name: 'TypeScript', desc: 'Type-safe JavaScript', icon: '🔷', color: '#3178c6' },
  { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', icon: '🎨', color: '#38bdf8' },
  { name: 'uiohook-napi', desc: 'Keyboard & mouse monitoring', icon: '⌨️', color: '#f59e0b' },
  { name: 'electron-builder', desc: 'Desktop packaging & distribution', icon: '📦', color: '#a78bfa' },
];

export default function TechStack() {
  return (
    <section className="tech-stack section-padding" id="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Built with Modern Technology</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Powered by the best tools in the ecosystem
          </p>
        </div>

        <div className="tech-grid">
          {techs.map((t, i) => (
            <div key={t.name} className={`glass-card tech-card fade-in fade-in-delay-${(i % 3) + 1}`}>
              <div
                className="tech-card-icon"
                style={{ background: `${t.color}18`, border: `1px solid ${t.color}33` }}
              >
                {t.icon}
              </div>
              <h3>{t.name}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
