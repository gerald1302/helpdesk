import { Link } from "react-router-dom";
import AuthLayout from "@/components/layout/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />

      <div className="mt-8 text-center text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="text-[#0c5eb3]/80 font-bold">
          Sign in
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Register;
