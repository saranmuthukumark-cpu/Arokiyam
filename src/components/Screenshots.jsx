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
    <section className="relative py-[100px] md:py-[80px]" id="screenshots">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 md:mb-9">
          <h2 className="section-title fade-in">See Arokiyam in Action</h2>
          <p className="fade-in fade-in-delay-1 text-[1.05rem] max-w-[580px] mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Beautiful, non-intrusive overlays that protect your health while you code
          </p>
        </div>

        <div className="grid grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 gap-4">
          {screenshots.map((shot, i) => (
            <div
              key={shot.title}
              className={`screenshot-card fade-in fade-in-delay-${Math.min(i + 1, 5)} rounded-2xl overflow-hidden relative border cursor-pointer transition-all duration-300 group`}
              style={{ background: 'var(--bg-glass)', borderColor: 'var(--border-glass)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--border-glass-hover)';
                e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.boxShadow = '';
                e.currentTarget.style.transform = '';
              }}
            >
              <img
                src={shot.image}
                alt={shot.title}
                loading="lazy"
                className="w-full object-cover block transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05] max-[480px]:h-[200px]"
                style={{ height: 240 }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-[18px] py-[14px] opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.75))' }}>
                <h4 className="text-[0.85rem] font-semibold text-white">{shot.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
