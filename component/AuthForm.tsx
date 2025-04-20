'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/component/input';
import { Button } from '@/component/button';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isLogin = type === 'login';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Logging in' : 'Signing up'} with`, { email, password });
    // TODO: Call API here
  };

  return (
    <div className="w-full max-w-md mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {isLogin ? 'Welcome back 👋' : 'Create an account 🔐'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" className="w-full">
          {isLogin ? 'Login' : 'Sign Up'}
        </Button>
      </form>

      <p className="mt-4 text-center text-sm text-gray-600">
        {isLogin ? (
          <>
            New here?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Create an account
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
