import { cn } from "@/lib/cn";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "w-full h-12 bg-[#0c5eb3] hover:bg-[#0c5eb3]/90 text-white font-bold rounded-lg transition-all shadow-md shadow-primary/20 active:scale-[0.98]",
        className
      )}
    >
      {children}
    </button>
  );
}
