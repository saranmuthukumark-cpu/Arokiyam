import './WhyDevelopers.css';

const EyeOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const DropletOffIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" opacity="0.4"/>
    <line x1="1" y1="1" x2="23" y2="23"/>
  </svg>
);

const DropletIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
);

const BatteryLowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/>
  </svg>
);

const BatteryFullIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="13" x2="23" y2="11"/>
    <rect x="4" y="9" width="11" height="6" rx="1" fill="currentColor" opacity="0.3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const ZapIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const rows = [
  { problem: 'Eye strain from long screen time', solution: 'Blink reminder overlays', pIcon: <EyeOffIcon />, sIcon: <EyeIcon /> },
  { problem: 'Dehydration during deep work', solution: 'Smart water reminders', pIcon: <DropletOffIcon />, sIcon: <DropletIcon /> },
  { problem: 'Mental and physical fatigue', solution: 'Health battery system', pIcon: <BatteryLowIcon />, sIcon: <BatteryFullIcon /> },
  { problem: 'Overworking without breaks', solution: 'Smart break alerts', pIcon: <ClockIcon />, sIcon: <ZapIcon /> },
];

export default function WhyDevelopers() {
  return (
    <section className="why-developers section-padding" id="why-developers">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Why Developers Love Arokiyam</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Real problems meet intelligent solutions
          </p>
        </div>

        <div className="comparison-grid fade-in fade-in-delay-2">
          <div className="comparison-header">
            <span>❌ Problem</span>
            <span></span>
            <span>✅ Solution</span>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`comparison-row fade-in fade-in-delay-${Math.min(i + 1, 5)}`}>
              <div className="comparison-problem">
                <span className="comparison-icon">{row.pIcon}</span>
                {row.problem}
              </div>
              <div className="comparison-arrow">→</div>
              <div className="comparison-solution">
                <span className="comparison-icon">{row.sIcon}</span>
                {row.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
