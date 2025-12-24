export function Alert({ children }) {
  return <div className="border rounded-lg p-4 bg-zinc-900">{children}</div>
}
export function AlertTitle({ children }) {
  return <h5 className="font-semibold mb-1">{children}</h5>
}
export function AlertDescription({ children }) {
  return <p className="text-sm text-zinc-400">{children}</p>
}
