"use client";

import { useState } from "react";
import { buildMailto } from "@/lib/mailto";
import { links } from "@/models/links";
import { profile } from "@/models/profile";

type Status = { kind: "idle" } | { kind: "error"; message: string } | { kind: "ready" };

export function ContactComposer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  function validate(): string | null {
    if (!name.trim()) return "Enter your name.";
    if (!email.trim()) return "Enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return "Enter a valid email address.";
    }
    if (!message.trim()) return "Enter a message.";
    return null;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const error = validate();
    if (error) {
      setStatus({ kind: "error", message: error });
      return;
    }
    const url = buildMailto({ name, email, message });
    window.location.href = url;
    setStatus({ kind: "ready" });
  }

  async function copyMessage() {
    const error = validate();
    if (error) {
      setStatus({ kind: "error", message: error });
      return;
    }
    try {
      await navigator.clipboard.writeText(message.trim());
      setCopyStatus("Message copied.");
      setStatus({ kind: "idle" });
    } catch {
      setCopyStatus("Could not copy. Select the message and copy manually.");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied.");
    } catch {
      setCopyStatus(`Could not copy. Email: ${profile.email}`);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <div>
          <label
            htmlFor="contact-name"
            className="text-text mb-1 block text-sm font-medium"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border-border bg-surface text-text min-h-11 w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="contact-email"
            className="text-text mb-1 block text-sm font-medium"
          >
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border-border bg-surface text-text min-h-11 w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label
            htmlFor="contact-message"
            className="text-text mb-1 block text-sm font-medium"
          >
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border-border bg-surface text-text w-full rounded border px-3 py-2"
          />
        </div>
        <p className="text-text-subtle text-sm">
          Continue to email opens your mail app with this message. Nothing is stored or
          sent by this site.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="bg-primary text-primary-fg inline-flex min-h-11 items-center rounded px-5 text-sm font-medium"
          >
            Continue to email
          </button>
          <button
            type="button"
            onClick={copyMessage}
            className="border-border bg-surface text-text hover:border-primary inline-flex min-h-11 items-center rounded border px-4 text-sm"
          >
            Copy message
          </button>
          <button
            type="button"
            onClick={copyEmail}
            className="border-border bg-surface text-text hover:border-primary inline-flex min-h-11 items-center rounded border px-4 text-sm"
          >
            Copy email
          </button>
        </div>
        <div aria-live="polite" className="min-h-5 text-sm">
          {status.kind === "error" ? (
            <p className="text-danger">{status.message}</p>
          ) : status.kind === "ready" ? (
            <p className="text-success">Opening your email application…</p>
          ) : null}
          {copyStatus ? <p className="text-success">{copyStatus}</p> : null}
        </div>
      </form>

      <div className="space-y-4">
        <p className="text-text-muted text-sm">
          Prefer another channel? Reach out directly.
        </p>
        <ul className="space-y-2" role="list">
          <li>
            <a
              href={`mailto:${links.email}`}
              className="text-accent hover:text-primary inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              {links.email}
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-primary inline-flex min-h-11 items-center underline-offset-4 hover:underline"
            >
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
        </ul>
        <p className="text-text-subtle text-sm">
          Facebook is omitted until a verified owner link is provided.
        </p>
      </div>
    </div>
  );
}
