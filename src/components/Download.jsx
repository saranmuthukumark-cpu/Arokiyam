import { FiDownload } from 'react-icons/fi';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

const downloads = [
  {
    platform: 'Windows',
    type: 'Installer (.exe)',
    icon: <FaWindows size={30} />,
    os: 'windows',
    color: '#0078d4',
    url: 'https://github.com/anburocky3/arokiyam-app/releases/download/v1.0.6/arokiyam-1.0.6-setup.exe',
  },
  {
    platform: 'macOS',
    type: 'DMG Package',
    icon: <FaApple size={30} />,
    os: 'macos',
    color: '#a3aaae',
    url: 'https://github.com/anburocky3/arokiyam-app/releases/download/v1.0.6/arokiyam-1.0.6.dmg',
  },
  {
    platform: 'Linux',
    type: 'AppImage',
    icon: <FaLinux size={30} />,
    os: 'linux-appimage',
    color: '#f59e0b',
    url: 'https://github.com/anburocky3/arokiyam-app/releases/download/v1.0.6/arokiyam-1.0.6.AppImage',
  },

];

export default function Download() {
  return (
    <section
      className="relative py-[100px] md:py-[80px]"
      style={{ background: 'var(--gradient-section)' }}
      id="download"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 md:mb-9">
          <h2 className="section-title fade-in">Download Arokiyam</h2>
          <p className="fade-in fade-in-delay-1 text-[1.05rem] max-w-[580px] mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Get started with Arokiyam on your favorite platform
          </p>
        </div>

        <div className="grid grid-cols-3 max-[768px]:grid-cols-2 max-[480px]:grid-cols-1 gap-8 max-w-[700px] mx-auto max-[480px]:max-w-[320px]">
          {downloads.map((item, i) => (
            <a
              key={item.os}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`download-card fade-in fade-in-delay-${i + 1} flex flex-col items-center text-center cursor-pointer no-underline transition-all duration-300 py-4 px-3 group`}
              style={{ color: 'inherit' }}
            >
              <div
                className="w-16 h-16 mb-4 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-[1.08]"
                style={{
                  background: `${item.color}18`,
                  color: item.color,
                }}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-[1rem] mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{item.platform}</h3>
              <p className="text-[0.78rem] mb-4" style={{ color: 'var(--text-muted)' }}>{item.type}</p>
              <span
                className="inline-flex items-center gap-[6px] px-5 py-[9px] rounded-[10px] text-[0.8rem] font-semibold text-white transition-all duration-300 group-hover:opacity-90"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow: '0 2px 12px var(--accent-glow)',
                }}
              >
                <FiDownload size={14} />
                Download
              </span>
            </a>
          ))}
        </div>

        <p className="fade-in text-center mt-8 text-[0.85rem]" style={{ color: 'var(--text-muted)' }}>
          Latest stable release: <strong>v1.0.6</strong>
        </p>
      </div>
    </section>
  );
}
