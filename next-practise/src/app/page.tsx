"use client"; // ✅ this makes sure your button can call API from the client

export default function Home() {
  const createUser = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
    });
    const data = await res.json();
    alert(`User Created: ${data.name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-2xl">This is a Next.js 13.4 app with TypeScript.</p>
      <p className="text-xl">It uses Tailwind CSS for styling.</p>

      <button
        onClick={createUser}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create a Random User
      </button>
    </main>
  );
}
