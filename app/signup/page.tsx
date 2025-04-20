import AuthForm from '@/component/AuthForm';

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm type="signup" />
    </main>
  );
}
