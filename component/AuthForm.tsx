'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface AuthFormProps {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [dob, setDob] = useState('');
  const [course, setCourse] = useState('');
  const [open, setOpen] = useState(false);
  const [year, setYear] = useState('');
  const yearValue = ["1", "2", "3", "4", "Alumni"]

  const isLogin = type === 'login';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isLogin ? 'Logging in' : 'Signing up'} with`, { email, password });
    // TODO: Call API here
  };

  return (
    <div>
      <h1 className="font-bold text-5xl mt-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-900">
        ALUM CONNECT
      </h1>

      <div className="w-11/12 md:w-screen max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {isLogin ? 'Welcome back 👋' : 'Create an account 🔐'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin ? (
            <>
              <Label className='flex flex-col items-start' htmlFor='collegeName'>
                College Name
                <Input
                  id='collegeName'
                  type="text"
                  placeholder="College name"
                  required
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='studenName'>
                Student Name
                <Input
                  id='studentName'
                  type="text"
                  placeholder="Student name"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='email'>
                Email
                <Input
                  id='email'
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='password'>
                Password
                <Input
                  id='password'
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='dob'>
                Date of Birth
                <Input
                  id='dob'
                  type="date"
                  placeholder="Date of Birth"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='course'>
                Course
                <Input
                  id='course'
                  type="text"
                  placeholder="Course"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='year'>
                Year
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <input
                      id='year'
                      type="text"
                      readOnly
                      placeholder="Year"
                      value={year}
                      onClick={() => setOpen(true)}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background
                  placeholder:text-muted-foreground focus-visible:outline-none
                  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
                    />
                  </PopoverTrigger>
                  <PopoverContent className="w-full">
                    {yearValue.map((item) => (
                      <div
                        key={item}
                        className="w-full p-2 cursor-pointer rounded-md hover:bg-muted"
                        onClick={() => {
                          setYear(item);
                          setOpen(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </PopoverContent>
                </Popover>
              </Label>
            </>
          ) : (
            <>
              <Label className='flex flex-col items-start' htmlFor='email'>
                Email
                <Input
                  id='email'
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Label>
              <Label className='flex flex-col items-start' htmlFor='password'>
                Password
                <Input
                  id='password'
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Label>
            </>
          )}
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
    </div>
  );
}
