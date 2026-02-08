import ForgotForm from "@/components/auth/ForgotForm";
import AuthHeader from "@/components/auth/AuthHeader";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200/50 text-[#111418]">
      <AuthHeader showLoginLink={true} />

      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-[480px] bg-white rounded-xl shadow-sm border border-[#dbe0e6] p-8 md:p-10">
          <ForgotForm />
        </div>

        <footer className="mt-8 text-center px-4">
          <p className="text-gray-500 text-xs">
            © 2024 Enterprise Support Platform. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default ForgotPassword;
