import ColorPicker from './ColorPicker';

export default function Toolbar({ color, setColor, scale, setScale }) {
  const handleCopyColor = () => navigator.clipboard.writeText(color);

  return (
    <div style={{
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      display: 'flex',
      gap: '1rem',
      background: '#0d1117',
      padding: '0.5rem 1rem',
      borderRadius: '8px',
      color: '#fff',
      fontFamily: 'SF Mono, monospace',
      alignItems: 'center',
      zIndex: 10
    }}>
      <ColorPicker color={color} onChange={setColor} />
      <button onClick={handleCopyColor}>Copy HEX</button>

      <div>
        <label>Size:</label>
        <input
          type="number"
          step="0.1"
          min="0.1"
          max="10"
          value={scale}
          onChange={(e) => setScale(Number(e.target.value))}
          style={{
            width: '50px',
            marginLeft: '0.5rem',
            background: '#111',
            color: '#fff',
            border: '1px solid #333',
            padding: '0.25rem',
          }}
        />
      </div>
    </div>
  );
}
