import AuthForm from '@/component/AuthForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm type="login" />
    </main>
  );
}
