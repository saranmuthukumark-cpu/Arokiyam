import { useState } from 'react';

const screenshots = [
  { id: 1, title: 'App Dashboard', image: '/screenshots/1.png' },
  { id: 2, title: 'Rest Your Eyes', image: '/screenshots/2.png' },
  { id: 3, title: 'Reset Your Energy', image: '/screenshots/3.png' },
  { id: 4, title: 'Hydration', image: '/screenshots/4.png' },
  { id: 5, title: 'Focus Drink', image: '/screenshots/5.png' },
  { id: 6, title: 'Preferences', image: '/screenshots/6.png' },
];

export default function Screenshots() {
  const [activeTab, setActiveTab] = useState(screenshots[0]);

  return (
    <section className="relative py-[100px] md:py-[80px] overflow-hidden" id="screenshots">
      {/* Background glow for the laptop */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[140px] opacity-[0.15] pointer-events-none"
        style={{ background: 'var(--accent-primary)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-title fade-in mb-4">See Arokiyam in Action</h2>
          <p className="fade-in fade-in-delay-1 text-[1.05rem] max-w-[580px] mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Beautiful, non-intrusive overlays that protect your health while you code
          </p>
        </div>

        {/* Tab Selectors */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 fade-in fade-in-delay-2 relative z-20">
          {screenshots.map((tab) => {
            const isActive = activeTab.id === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-[10px] rounded-full text-[0.85rem] font-medium transition-all duration-300"
                style={{
                  background: isActive ? 'var(--gradient-primary)' : 'var(--bg-glass)',
                  color: isActive ? '#fff' : 'var(--text-primary)',
                  boxShadow: isActive ? '0 4px 20px var(--accent-glow)' : 'none',
                  border: isActive ? '1px solid transparent' : '1px solid var(--border-glass)',
                  backdropFilter: isActive ? 'none' : 'var(--backdrop-blur)'
                }}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {/* Laptop Mockup */}
        <div className="fade-in fade-in-delay-3 max-w-[900px] mx-auto relative pt-4">
          {/* Laptop Screen Frame */}
          <div
            className="relative rounded-[20px] md:rounded-[28px] p-[10px] md:p-3 pb-8 md:pb-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto"
            style={{
              background: '#2d3340', // Metallic gray
              border: '2px solid rgba(255,255,255,0.08)',
              borderBottom: 'none'
            }}
          >
            {/* Camera dot */}
            <div className="absolute top-[12px] md:top-[16px] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1e232d] border border-[#3e4658] z-10"></div>

            {/* Screen Inner */}
            <div className="relative rounded-[10px] md:rounded-[16px] overflow-hidden aspect-[16/10] bg-[#000] ">
              {screenshots.map((shot) => (
                <img
                  key={shot.id}
                  src={shot.image}
                  alt={shot.title}
                  className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: activeTab.id === shot.id ? 1 : 0,
                    pointerEvents: activeTab.id === shot.id ? 'auto' : 'none',
                    filter: activeTab.id === shot.id ? 'none' : 'blur(4px)',
                    transform: activeTab.id === shot.id ? 'scale(1)' : 'scale(1.02)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Laptop Base (Keyboard area projection) */}
          <div className="relative w-[115%] left-1/2 -translate-x-1/2 h-[12px] md:h-[18px] rounded-b-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            style={{
              background: 'linear-gradient(to bottom, #394050 0%, #222732 100%)',
              borderTop: '1px solid rgba(255,255,255,0.15)'
            }}
          >
            {/* Trackpad notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[15%] h-[4px] md:h-[6px] bg-[#1a1d25] rounded-b-[4px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
