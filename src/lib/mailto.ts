import { profile } from "@/models/profile";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export function buildMailto({ name, email, message }: ContactFields): string {
  const subject = `Portfolio inquiry from ${name.trim()}`;
  const body = [message.trim(), "", "---", `From: ${name.trim()} <${email.trim()}>`].join(
    "\n",
  );

  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return `mailto:${profile.email}?${query}`;
}
