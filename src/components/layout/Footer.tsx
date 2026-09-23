import { profile } from "@/models/profile";

export function Footer() {
  return (
    <footer className="border-border bg-bg border-t">
      <div className="container-shell text-text-subtle flex flex-col gap-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.publicName}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
