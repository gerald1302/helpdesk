import { Link } from "react-router-dom";
import AuthLayout from "@/components/layout/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <AuthLayout>
      <LoginForm />

      <div className="mt-8 text-center text-slate-500">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#0c5eb3]/80 font-bold">
          Create one
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;
