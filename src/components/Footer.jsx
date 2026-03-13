import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="Arokiyam" className="footer-logo-img" />
              Arokiyam
            </div>
            <p>
              Your intelligent desktop wellness companion.
              Built for developers, by developers.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Downloads</a></li>
                <li><a href="#screenshots">Screenshots</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="https://github.com/anburocky3/arokiyam-app" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://github.com/anburocky3/arokiyam-app#readme" target="_blank" rel="noopener noreferrer">Documentation</a></li>
                <li><a href="https://github.com/anburocky3/arokiyam-app/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">License (MIT)</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Made with ❤️ by <a href="https://anbuselvan-annamalai.com" target="_blank" rel="noopener noreferrer">Anbuselvan Annamalai</a></p>
          <p>All Rights Reserved © 2026</p>
        </div>
      </div>
    </footer>
  );
}
