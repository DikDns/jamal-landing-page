import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            JAMAL
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            Journey for Agile Management and Analytical Leverage
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            An open-source desktop application for visual brainstorming and
            real-time collaboration. Built with TypeScript, React, and Tauri.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/dikdns/jamal-app/releases"
              className="rounded-full bg-primary px-8 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Latest Release
            </a>
            <a
              href="https://github.com/dikdns/jamal-app"
              className="rounded-full border border-solid border-input px-8 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Key Features
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground">
                Offline-First
              </h3>
              <p className="mt-2 text-muted-foreground">
                Work anywhere without internet. All core features work 100%
                offline.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground">
                Real-Time Collaboration
              </h3>
              <p className="mt-2 text-muted-foreground">
                Share your workspace and collaborate in real-time with others.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-card-foreground">
                Visual Tools
              </h3>
              <p className="mt-2 text-muted-foreground">
                Create diagrams, mind maps, and visual notes with intuitive
                tools.
              </p>
            </div>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="mt-32">
          <h2 className="text-center text-3xl font-bold tracking-tight text-black dark:text-zinc-50">
            Open Source
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-zinc-600 dark:text-zinc-400">
            JAMAL is free and open source software. We believe in transparency
            and community-driven development. Join us in making visual
            collaboration tools accessible to everyone.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/dikdns/jamal-app/blob/main/CONTRIBUTING.md"
              className="rounded-full border border-solid border-input px-8 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute
            </a>
            <a
              href="https://github.com/dikdns/jamal-app/issues"
              className="rounded-full border border-solid border-input px-8 py-3 transition-colors hover:bg-accent hover:text-accent-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              Report Issues
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted py-12">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} JAMAL Project. Released under the MIT
            License.
          </p>
        </div>
      </footer>
    </div>
  );
}
