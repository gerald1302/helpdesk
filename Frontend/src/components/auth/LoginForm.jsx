import Input from "../common/Input";
import PasswordField from "../common/PasswordField";
import Button from "../common/Button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <header className="mb-8">
        <h2 className="text-3xl font-black">Sign In</h2>
        <p className="text-slate-500 mt-2">
          Please enter your credentials to access your secure account.
        </p>
      </header>

      <form className="space-y-4">
        <Input
          label="Email Address"
          type="email"
          placeholder="john@company.com"
        />

        <PasswordField
          label="Password"
          placeholder="••••••••"
        />

        <div className="flex justify-between items-center text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded text-[#0c5eb3]" />
            Remember me
          </label>

          <Link to="/forgot-password" className="text-[#0c5eb3]/80 font-semibold">
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="flex items-center justify-center">
            Sign In
            <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </form>
    </>
  );
}

export default LoginForm;
