"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { LinkedinIcon } from "./icons";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import { profile, contactFormAccessKey } from "@/data/portfolio";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    cta: "Send an email",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/[^\d+]/g, "")}`,
    icon: Phone,
    cta: "Give me a call",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/zecil-jain",
    href: profile.linkedin,
    icon: LinkedinIcon,
    cta: "Connect with me",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", contactFormAccessKey);
    formData.append("subject", `New message from ${formData.get("name")} via portfolio site`);

    try {
      // Sent as multipart FormData (the browser's default for a FormData body,
      // no custom Content-Type) rather than JSON: Web3Forms's JSON response
      // mode requires an application/json request, but that triggers a CORS
      // preflight their API doesn't answer, so it fails outright in a real
      // browser. The multipart request is a CORS-simple request (no preflight)
      // and Web3Forms answers it with an HTML "thank you" page instead of
      // JSON, so success is read from the HTTP status, not the body.
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <SectionHeading section="contact" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <FadeIn className="flex flex-col gap-4 lg:col-span-2">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <a
                key={method.label}
                href={method.href}
                target={method.label === "LinkedIn" ? "_blank" : undefined}
                rel={method.label === "LinkedIn" ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-surface-2 bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 active:scale-[0.98]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted">{method.label}</p>
                  <p className="truncate text-sm font-medium text-ink">{method.value}</p>
                </div>
                <span className="shrink-0 text-xs text-muted transition-colors group-hover:text-accent">
                  {method.cta} →
                </span>
              </a>
            );
          })}
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 rounded-2xl border border-surface-2 bg-surface p-6 sm:p-8"
          >
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-surface-2 bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-surface-2 bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-lg border border-surface-2 bg-bg px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] hover:bg-primary/90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70 disabled:active:scale-100"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>

            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-accent">
                <CheckCircle2 size={16} />
                Thanks! Your message is on its way — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
