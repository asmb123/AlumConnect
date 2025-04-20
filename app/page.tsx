// app/landing/page.tsx
export default function Landing() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to AlumConnect 🎓</h1>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
          A secure platform connecting college students and alumni. No outsiders, only verified people.
        </p>
        <div className="flex gap-4">
          <a href="/login">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700">Login</button>
          </a>
          <a href="/signup">
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50">Sign Up</button>
          </a>
        </div>
      </div>
    );
  }
  