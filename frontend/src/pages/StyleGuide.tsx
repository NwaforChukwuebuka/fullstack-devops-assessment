import React from 'react';

const TokenRow = ({ name, value, swatch }: { name: string; value: string; swatch?: string }) => (
  <div className="token-row">
    {swatch && <span className="token-swatch" style={{ background: `var(${swatch})` }} />}
    <code style={{ width: 140 }}>{name}</code>
    <span className="muted">{value}</span>
  </div>
);

const StyleGuide: React.FC = () => {
  return (
    <div style={{ padding: 24 }}>
      <h2 style={{ marginBottom: 12 }}>Design Tokens</h2>
      <TokenRow name="--bg" value="#F7F8FA" swatch="--bg" />
      <TokenRow name="--panel" value="#FFFFFF" swatch="--panel" />
      <TokenRow name="--text" value="#162029" swatch="--text" />
      <TokenRow name="--muted" value="#9AA3AD" swatch="--muted" />
      <TokenRow name="--accent" value="#0EA5A4" swatch="--accent" />
      <TokenRow name="--border" value="#E6E9EE" swatch="--border" />
      <div style={{ height: 24 }} />

      <h3 style={{ marginBottom: 12 }}>Components</h3>
      <div className="section-card" style={{ maxWidth: 440 }}>
        <div className="section-title">
          <span>Section Title</span>
          <button role="switch" aria-checked={true} className="toggle">
            <span className="toggle-knob" />
          </button>
        </div>
        <div className="field-row">Field row example</div>
        <div className="drag-placeholder" style={{ marginTop: 12 }}>Drag or Drop</div>
      </div>

      <div style={{ height: 24 }} />
      <h3>Buttons</h3>
      <div style={{ display: 'flex', gap: 12 }}>
        <button className="ui-btn-primary">Primary</button>
        <button className="ui-btn-outline">Outline</button>
      </div>

      <div style={{ height: 24 }} />
      <h3>Accessibility</h3>
      <p className="muted">All interactive controls show a teal focus ring for keyboard users.</p>
    </div>
  );
};

export default StyleGuide;


