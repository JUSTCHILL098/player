import { cn } from "@/lib/utils"

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200",
        className
      )}
      {...props}
    />
  )
}
