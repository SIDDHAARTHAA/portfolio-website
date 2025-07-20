// import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="p-6 space-y-6 flex flex-col min-h-screen bg-background text-text-main font-main">
      <h1 className="text-4xl text-text-hero font-bold">Hero Text (H1)</h1>
      <h2 className="text-2xl text-text-hero-sub font-semibold">Hero Subtext (H2)</h2>

      <p className="text-text-main font-sub">Main Text (p)</p>
      <span className="text-text-sub">Subtext (span)</span>

      <div className="p-4 rounded border border-card-border bg-card text-text-main font-sub">
        This is a Card with Border and Card BG
      </div>

      <button className="bg-button-bg text-button-text px-4 py-2 rounded">
        Button Text
      </button>

      <pre className="font-sub text-code bg-gray-100 dark:bg-gray-800 p-2 rounded">
        <code>console.log("Code snippet")</code>
      </pre>

      {/* <ThemeToggle />  */}
      <h1>Hi, this is Sid</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, cumque quidem dicta repudiandae odit nobis perferendis dolores laboriosam porro labore consequatur quam, vitae maiores necessitatibus. Vero ullam maiores esse ea.</p>
      <div className="border p-4 rounded border-card-border bg-card text-[8px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam harum est sunt vero quisquam impedit eligendi, numquam vel fuga? Laudantium corporis maiores vitae maxime debitis est iusto cum itaque quia.
      </div>
    </main>
  );
}
