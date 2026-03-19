export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">
        Aigentia AI Software Tools
      </h1>

      <p className="text-lg mb-6">
        Practical AI-powered tools for image optimisation, video compression,
        and business automation. Built to solve real problems.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Featured Tools
      </h2>

      <ul className="space-y-3">
        <li>
          <a
            href="/products/drone-video-compressor"
            className="text-blue-600 underline"
          >
            Drone Video Compressor
          </a>
        </li>
      </ul>
    </main>
  );
}