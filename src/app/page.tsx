export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white p-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4">Serge Alhalbi</h1>
      <h2 className="text-2xl text-gray-600 mb-6">AI & Robotics Consultant</h2>
      <p className="text-lg text-gray-700 max-w-xl mb-8">
        I build intelligent systems that blend automation, machine learning, and control theory to solve real-world problems.
      </p>
      <div className="flex gap-4">
        <a
          href="https://your-resume-link.com"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition"
        >
          View Resume
        </a>
        <a
          href="mailto:your@email.com"
          className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full transition"
        >
          Contact Me
        </a>
      </div>
    </main>
  );
}
