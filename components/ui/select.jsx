export function Select({ children, value, onValueChange }) {
  return <select value={value} onChange={e => onValueChange(e.target.value)} className="w-full bg-zinc-900 border p-2 rounded">{children}</select>
}
export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>
}
export function SelectTrigger({ children }) {
  return children
}
export function SelectContent({ children }) {
  return children
}
export function SelectValue() {
  return null
}
