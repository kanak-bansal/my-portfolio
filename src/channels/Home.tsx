import React, { useState, useEffect } from 'react';

export function HomeChannel() {
  const tagline = "> SYSTEM.READY // INITIALIZING CREATIVE PROTOCOLS...";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(tagline.slice(0, i));
      i++;
      if (i > tagline.length) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-col flex-center" style={{ height: '100%', gap: '1rem', textAlign: 'center' }}>
      <h1 className="text-cyan display-text" style={{ fontSize: '4rem', margin: 0, textShadow: '0 0 10px var(--neon-cyan)' }}>KANAK BANSAL</h1>
      <h2 className="text-magenta" style={{ fontSize: '2rem', margin: 0 }}>SOFTWARE DEVELOPER</h2>
      <div style={{ marginTop: '2rem', fontSize: '1.2rem', minHeight: '1.5em' }}>
        <span className="text-green">{displayText}</span>
        <span className="text-green cursor-blink">_</span>
      </div>
    </div>
  );
}
