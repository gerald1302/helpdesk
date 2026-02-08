import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | sent

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    // simulate send
    setState("sent");
  }

  if (state === "sent") {
    return (
      <div className="flex flex-col">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 12l5 5L22 2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-2">Check your email</h1>
          <p className="text-sm text-slate-500">
            We've sent instructions to reset your password to{" "}
            <strong>{email}</strong>.
          </p>
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => window.open("mailto:" + email)}
            className="w-full"
          >
            Open Mail App
          </Button>

          <div className="text-sm text-slate-500 text-center">
            Didn't receive the email?{" "}
            <button
              className="text-[#137fec] font-bold ml-1"
              onClick={() => {
                // demo resend
                setState("idle");
                setTimeout(() => setState("sent"), 300);
              }}
            >
              Click to resend
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-[#137fec] text-sm font-bold"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-16 h-16 bg-[#137fec]/10 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-[#137fec]"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M12 17a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <rect
              x="4"
              y="10"
              width="16"
              height="10"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10V8a4 4 0 118 0v2"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-2">Reset your password</h1>
        <p className="text-sm text-slate-500">
          Enter the email address associated with your account and we'll send
          you a link to reset your password.
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Input
            label="Email Address"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <Button type="submit">Send Reset Link</Button>
      </form>

      <div className="mt-6 pt-6 border-t border-slate-100 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-[#137fec] text-sm font-bold"
        >
          ← Back to Login
        </Link>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
