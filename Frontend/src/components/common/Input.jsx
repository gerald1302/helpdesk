import { cn } from "@/lib/cn";

export default function Input({ label, className, ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5 opacity-80">
        {label}
      </label>
      <input
        {...props}
        className={cn(
          "w-full h-12 px-4 rounded-lg border border-slate-300/50 bg-transparent focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-gray-700",
          className
        )}
      />
    </div>
  );
}
