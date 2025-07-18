import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <main className="p-6 space-y-4 flex flex-col">
      <h1>This is H1</h1>
      <p>This is a paragraph.</p>
      <code>console.log("using JetBrains Mono")</code>
      <ThemeToggle />
    </main>
  );
}
