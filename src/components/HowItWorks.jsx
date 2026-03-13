import { FiActivity, FiTrendingUp, FiBattery, FiZap, FiLayers } from 'react-icons/fi';
import './HowItWorks.css';

const steps = [
  {
    icon: <FiActivity size={22} />,
    title: 'Activity Monitoring',
    desc: 'Arokiyam monitors keyboard and mouse activity in real-time.',
    color: '#6366f1',
  },
  {
    icon: <FiTrendingUp size={22} />,
    title: 'Stress Pattern Analysis',
    desc: 'It analyzes activity stress patterns to understand your work intensity.',
    color: '#22d3ee',
  },
  {
    icon: <FiBattery size={22} />,
    title: 'Health Battery Drains',
    desc: 'A health battery drains during continuous work without breaks.',
    color: '#f43f5e',
  },
  {
    icon: <FiZap size={22} />,
    title: 'Wellness Triggers',
    desc: 'Wellness activities trigger automatically when stress increases.',
    color: '#10b981',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Guided Overlays',
    desc: 'Overlays guide users to blink, hydrate, and reset energy levels.',
    color: '#f59e0b',
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works section-padding" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">How It Works</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Arokiyam intelligently protects your health while you work
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.title} className={`step-card fade-in fade-in-delay-${Math.min(i + 1, 5)}`}>
              <div className="step-number-badge">{String(i + 1).padStart(2, '0')}</div>
              <div className="step-icon" style={{ color: step.color, background: `${step.color}15`, border: `1px solid ${step.color}30` }}>
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
