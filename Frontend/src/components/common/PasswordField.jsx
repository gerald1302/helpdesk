import { useState } from "react";
import { cn } from "@/lib/cn";
import { Eye, EyeOff } from "lucide-react";

export default function PasswordField({
  label,
  placeholder,
  className,
  inputClassName,
  ...props
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={cn("space-y-1.5", className)}>
      {label && (
        <label className="block text-sm font-semibold opacity-80">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          {...props}
          type={visible ? "text" : "password"}
          placeholder={placeholder}
          className={cn(
            "w-full h-12 px-4 rounded-lg",
            "border border-slate-300/50",
            "bg-transparent text-gray-700",
            "focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "outline-none transition-all",
            "placeholder:text-slate-400",
            inputClassName,
          )}
        />

        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          aria-label={visible ? "Hide password" : "Show password"}
        >
          {visible ? (
            <EyeOff className="w-5 h-5" />
          ) : (
            <Eye className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
}
