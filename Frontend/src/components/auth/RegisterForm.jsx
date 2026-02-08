import { useState } from "react";
import Input from "../common/Input";
import PasswordField from "../common/PasswordField";
import PasswordIndicator from "../common/PasswordIndicator";
import Button from "../common/Button";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <>
      <header className="mb-8">
        <h2 className="text-3xl font-black">Create your account</h2>
        <p className="text-slate-500 mt-2">
          Join thousands of enterprise teams
        </p>
      </header>

      <form className="space-y-4">
        <Input label="Full Name" placeholder="John Doe" />
        <Input label="Work Email" type="email" placeholder="john@company.com" />
        <Input label="Company Name" placeholder="Acme Inc." />

        <div>
          <PasswordField
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
          />

          {/* Password Strength Indicator */}
          <PasswordIndicator password={password} />
        </div>

        <div>
          <PasswordField
            label="Confirm Password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="••••••••"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-slate-500">
          <input type="checkbox" className="mt-1 rounded text-primary" />I agree
          to the Terms & Privacy Policy
        </label>

        <Button type="submit">Create Account</Button>
      </form>
    </>
  );
};

export default RegisterForm;
