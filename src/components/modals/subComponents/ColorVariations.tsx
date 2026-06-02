export default function ColorVariations() {
  return (
    <div className="d-flex gap-2 flex-wrap">
      {['#111827', '#dc2626', '#2563eb', '#16a34a'].map(color => (
        <span
          key={color}
          title={color}
          style={{ width: 24, height: 24, borderRadius: '50%', background: color, display: 'inline-block', border: '1px solid rgba(0,0,0,0.15)' }}
        />
      ))}
    </div>
  );
}