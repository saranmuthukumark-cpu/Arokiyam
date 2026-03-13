import './Screenshots.css';

const screenshots = [
  { title: 'App Dashboard', image: '/screenshots/1.png' },
  { title: 'Rest Your Eyes', image: '/screenshots/2.png' },
  { title: 'Reset Your Energy', image: '/screenshots/3.png' },
  { title: 'Hydration Reminder', image: '/screenshots/4.png' },
  { title: 'Focus Drink', image: '/screenshots/5.png' },
  { title: 'Preferences', image: '/screenshots/6.png' },
];

export default function Screenshots() {
  return (
    <section className="screenshots section-padding" id="screenshots">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">See Arokiyam in Action</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Beautiful, non-intrusive overlays that protect your health while you code
          </p>
        </div>

        <div className="screenshots-grid">
          {screenshots.map((shot, i) => (
            <div key={shot.title} className={`screenshot-card fade-in fade-in-delay-${Math.min(i + 1, 5)}`}>
              <img src={shot.image} alt={shot.title} loading="lazy" />
              <div className="screenshot-overlay">
                <h4>{shot.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
