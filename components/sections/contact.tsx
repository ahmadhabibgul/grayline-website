"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/container";
import { LayersIcon, SparkIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const openMailClientFallback = (name: string, email: string, message: string) => {
    const subject = encodeURIComponent(`New inquiry from ${name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email || "-"}\n\nProject details:\n${message || "-"}`
    );
    window.location.href = `mailto:studiosgrayline@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (!response.ok) {
        const data = (await response.json()) as { error?: string };
        if (data.error?.includes("SMTP is not configured")) {
          openMailClientFallback(name, email, message);
          setStatus("success");
          return;
        }
        throw new Error(data.error || "Could not send message. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Could not send message. Please try again.");
    }
  };

  return (
    <section id="contact" className="section-shell section-muted section-star star-right star-soft star-tilt-a">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <SectionHeading
              label="Contact"
              title={
                <>
                  Let’s build your <span className="split-highlight">next product</span>
                </>
              }
              description="Tell us what you are building and we will come back with a clear next step."
            />

            <div className="mt-8 space-y-4">
              <div className="surface-card p-5">
                <div className="flex items-start gap-4">
                  <span className="icon-badge">
                    <SparkIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-[-0.02em] text-ink-soft">Usually replies within 24 hours</p>
                    <p className="support-copy mt-2">We keep the first conversation simple, practical, and focused on scope.</p>
                  </div>
                </div>
              </div>

              <div className="surface-card p-5">
                <div className="flex items-start gap-4">
                  <span className="icon-badge">
                    <LayersIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-[-0.02em] text-ink-soft">Best for websites and product builds</p>
                    <p className="support-copy mt-2">Share your goals, timeline, and any existing brand or product context.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="surface-card grid-overlay p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <input type="text" name="name" required placeholder="Your name" className="input-shell" />
              <input type="email" name="email" required placeholder="Email address" className="input-shell" />
            </div>

            <textarea
              name="message"
              rows={6}
              required
              placeholder="Tell us about your project"
              className="input-shell mt-4 min-h-[10rem] resize-y"
            />

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="button-primary w-full disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
              >
                {status === "loading" ? "Sending..." : "Contact Us"}
              </button>
              <p className="text-sm text-muted">Prefer email? studiosgrayline@gmail.com works too.</p>
            </div>

            {status === "success" ? <p className="mt-4 text-sm text-brand">Message sent successfully. We will reply soon.</p> : null}
            {status === "error" ? <p className="mt-4 text-sm text-red-600">{errorMessage}</p> : null}
          </form>
        </div>
      </Container>
    </section>
  );
}
