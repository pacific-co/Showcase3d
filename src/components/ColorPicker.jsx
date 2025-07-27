import { useState } from 'react';

export default function ColorPicker({ color, onChange }) {
  const [inputValue, setInputValue] = useState(color);

  const handleChange = (e) => {
    const val = e.target.value;
    if (/^#[0-9A-F]{0,6}$/i.test(val)) {
      setInputValue(val);
      if (val.length === 7) onChange(val);
    }
  };

  return (
    <input
      type="text"
      value={inputValue}
      onChange={handleChange}
      maxLength={7}
      style={{
        padding: '0.5rem',
        background: '#111',
        color: '#fff',
        border: '1px solid #333',
        fontFamily: 'SF Mono, monospace',
        width: '80px',
      }}
    />
  );
}
