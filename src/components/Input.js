export default function Input({ type, value, min, max, onChange }) {
  return (
    <input type={type} value={value} min={min} max={max} onChange={onChange} />
  )
}
