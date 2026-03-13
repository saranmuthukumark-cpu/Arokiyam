import { FiDownload } from 'react-icons/fi';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import './Download.css';

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
  {
    platform: 'Linux',
    type: 'DEB Package',
    icon: <FaLinux size={30} />,
    os: 'linux-deb',
    color: '#f59e0b',
    url: 'https://github.com/anburocky3/arokiyam-app/releases/download/v1.0.6/arokiyam-1.0.6-amd64.deb',
  },
];

export default function Download() {
  return (
    <section className="download section-padding" id="download">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title fade-in">Download Arokiyam</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">
            Get started with Arokiyam on your favorite platform
          </p>
        </div>

        <div className="download-grid">
          {downloads.map((item, i) => (
            <a
              key={item.os}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`download-card fade-in fade-in-delay-${i + 1}`}
            >
              <div className="download-card-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="download-card-title">{item.platform}</h3>
              <p className="download-card-type">{item.type}</p>
              <span className="download-card-btn">
                <FiDownload size={14} />
                Download
              </span>
            </a>
          ))}
        </div>

        <p className="download-version fade-in">Latest stable release: <strong>v1.0.6</strong></p>
      </div>
    </section>
  );
}
