import { useMemo } from "react";

function getPasswordScore(pw = "") {
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) score++;
  if (/\d/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  return score; // 0..4
}

export default function PasswordIndicator({ password = "" }) {
  const score = useMemo(() => getPasswordScore(password), [password]);

  const strengthLabel =
    score === 0 ? "" : score === 1 ? "Weak" : score === 2 ? "Moderate" : "Strong";
  const strengthColor =
    score <= 1
      ? "bg-rose-500"
      : score === 2
        ? "bg-amber-400"
        : "bg-emerald-500";

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Password Strength
        </span>
        <span className="text-[11px] font-bold uppercase tracking-wider">
          <span
            className={
              score >= 3
                ? "text-emerald-500"
                : score === 2
                  ? "text-amber-500"
                  : "text-rose-500"
            }
          >
            {strengthLabel}
          </span>
        </span>
      </div>

      <div className="flex gap-1 h-1.5 w-full">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`flex-1 rounded-full ${i < score ? strengthColor : "bg-slate-200"}`}
          />
        ))}
      </div>
    </div>
  );
}
