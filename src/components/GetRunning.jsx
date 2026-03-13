import './GetRunning.css';

export default function GetRunning() {
  return (
    <section className="get-running section-padding" id="get-running">
      <div className="container">
        <div className="get-running-wrapper">
          <div className="get-running-card fade-in">
            <h2>Get Running in Minutes</h2>
            <p>Built on Bun for blazing-fast installs and a familiar developer workflow from day one.</p>

            <div className="terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
              </div>
              <div className="terminal-body">
                <div className="terminal-comment"># Clone and install</div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">git clone</span> <span className="arg">github.com/anburocky3/arokiyam-app</span>
                </div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun install</span>
                </div>

                <div className="terminal-separator"></div>

                <div className="terminal-comment"># Start development</div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun run dev</span>
                </div>

                <div className="terminal-separator"></div>

                <div className="terminal-comment"># Build for your platform</div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun run</span> <span className="arg">build:win</span>
                </div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun run</span> <span className="arg">build:mac</span>
                </div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun run</span> <span className="arg">build:linux</span>
                </div>

                <div className="terminal-separator"></div>

                <div className="terminal-comment"># Publish a new release</div>
                <div className="terminal-cmd">
                  <span className="prompt">$</span>
                  <span className="command">bun run</span> <span className="arg">release:patch</span>
                </div>
                <div className="terminal-success"><span className="check">✔</span> Bumped to v1.0.7 · Tag pushed</div>
                <div className="terminal-success"><span className="check">✔</span> GitHub Actions CI triggered</div>
                <div className="terminal-success"><span className="check">✔</span> All lint &amp; type checks passed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
