import Image from "next/image";
import {
  Layers,
  Users,
  FolderOpen,
  Wifi,
  WifiOff,
  Download,
  Image as ImageIcon,
  Share2,
  Type,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Layers,
      title: "Infinite Canvas",
      description:
        "Unlimited workspace powered by TLDraw. Draw, sketch, and visualize ideas with a grid-enabled canvas that scales with your creativity.",
    },
    {
      icon: Users,
      title: "Real-Time Collaboration",
      description:
        "Work together seamlessly with WebSocket-powered live editing. See collaborators' cursors and changes instantly with presence awareness.",
    },
    {
      icon: FolderOpen,
      title: "Multi-Tab Interface",
      description:
        "Work on multiple drawings at once with a familiar tabbed interface. Switch between projects without losing your progress.",
    },
    {
      icon: WifiOff,
      title: "Offline-First",
      description:
        "Full functionality without internet. Work anywhere, anytime. Changes sync automatically when you're back online.",
    },
    {
      icon: Download,
      title: "Save & Open Files",
      description:
        "Native file system integration via Tauri. Save your work locally with the .jamal format and open them anytime.",
    },
    {
      icon: ImageIcon,
      title: "Export to PNG & SVG",
      description:
        "Export your drawings as high-quality PNG images or scalable SVG vectors for use in presentations, documents, or web.",
    },
    {
      icon: Share2,
      title: "Publish & Share",
      description:
        "Publish your canvas to the cloud and share with a simple room link. Invite collaborators to join your creative session.",
    },
    {
      icon: Type,
      title: "Text Formatting",
      description:
        "Rich text tools with bold, italic, underline, and more. Create beautiful annotations and labels for your diagrams.",
    },
  ];

  const techStack = [
    { name: "Tauri", color: "bg-yellow-500/20 text-yellow-400" },
    { name: "React", color: "bg-cyan-500/20 text-cyan-400" },
    { name: "TypeScript", color: "bg-blue-500/20 text-blue-400" },
    { name: "TLDraw", color: "bg-purple-500/20 text-purple-400" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Jamal Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-foreground">Jamal</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/DikDns/jamal-app"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://github.com/DikDns/jamal-app/releases"
                className="flex items-center gap-2 rounded-full bg-[#094CA8] px-5 py-2 text-white font-medium hover:bg-[#0B5CD5] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-32 pb-20">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
              <div className="animate-float">
                <Image
                  src="/logo.svg"
                  alt="Jamal Logo"
                  width={120}
                  height={120}
                  className="rounded-2xl animate-glow"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
              Welcome to{" "}
              <span className="gradient-text">Jamal</span>
            </h1>
            <p className="mt-4 text-xl text-[#094CA8] font-medium">
              Journey for Agile Management and Analytical Leverage
            </p>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Create beautiful drawings and collaborate in real-time, even offline.
              An open-source desktop application built for visual brainstorming,
              mind mapping, and creative collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/DikDns/jamal-app/releases"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#094CA8] px-8 py-4 text-lg font-semibold text-white hover:bg-[#0B5CD5] transition-all hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Latest Release
              </a>
              <a
                href="https://github.com/DikDns/jamal-app"
                className="flex items-center justify-center gap-3 rounded-full border border-border bg-card/50 px-8 py-4 text-lg font-semibold text-foreground hover:bg-card transition-all hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            </div>

            {/* Tech Stack Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <span
                  key={tech.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              Powerful Features
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need for visual brainstorming and collaboration,
              packed into a lightweight desktop app.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`feature-card rounded-xl border border-border bg-card/50 p-6 opacity-0 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
                style={{ animationFillMode: "forwards" }}
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#094CA8]/20">
                  <feature.icon className="w-6 h-6 text-[#0B5CD5]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started in seconds. Create, collaborate, and share your ideas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#094CA8]/20 text-2xl font-bold text-[#0B5CD5]">
                1
              </div>
              <h3 className="text-xl font-semibold">Create</h3>
              <p className="mt-2 text-muted-foreground">
                Start a new canvas or open an existing drawing. Your infinite workspace awaits.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#094CA8]/20 text-2xl font-bold text-[#0B5CD5]">
                2
              </div>
              <h3 className="text-xl font-semibold">Collaborate</h3>
              <p className="mt-2 text-muted-foreground">
                Publish to cloud and share the room link. Invite others to join your session.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#094CA8]/20 text-2xl font-bold text-[#0B5CD5]">
                3
              </div>
              <h3 className="text-xl font-semibold">Export</h3>
              <p className="mt-2 text-muted-foreground">
                Save your work locally or export as PNG/SVG to use anywhere.
              </p>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section className="mt-32 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-border bg-card/30 p-12 text-center">
            <Github className="mx-auto w-16 h-16 text-muted-foreground mb-6" />
            <h2 className="text-4xl font-bold tracking-tight">
              Open Source
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Jamal is free and open source software released under the MIT License.
              We believe in transparency and community-driven development.
              Join us in making visual collaboration tools accessible to everyone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://github.com/DikDns/jamal-app/blob/main/CONTRIBUTING.md"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-3 font-medium text-foreground hover:bg-card transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Contribute
              </a>
              <a
                href="https://github.com/DikDns/jamal-app/issues"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-3 font-medium text-foreground hover:bg-card transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Report Issues
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Jamal Logo"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Jamal Project. Released under the MIT License.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/DikDns/jamal-app"
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
