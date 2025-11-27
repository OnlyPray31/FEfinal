export default function Home() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#4a2f23] mb-6">
          To-do-List
        </h1>

        <p className="text-[#8b5e3c] text-lg md:text-xl mb-10 leading-relaxed">
          Help you to track your activities, so you can become <br />
          more organized and productive.
        </p>

        <a
          href="#todo"
          className="inline-block px-8 py-3 rounded-full bg-[#8b5e3c] text-white shadow-md hover:bg-[#4a2f23] transition"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}