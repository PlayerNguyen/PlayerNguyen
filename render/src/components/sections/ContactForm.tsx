import { type FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiSend } from "react-icons/fi";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t("contact.validation_required");
    if (!form.email.trim()) newErrors.email = t("contact.validation_required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = t("contact.validation_email");
    if (!form.subject.trim()) newErrors.subject = t("contact.validation_required");
    if (!form.message.trim()) newErrors.message = t("contact.validation_required");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const mailtoUrl = `mailto:nhnguyen.forwork@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    try {
      window.location.href = mailtoUrl;
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {(["name", "email", "subject"] as const).map((field) => (
        <div key={field}>
          <label htmlFor={field} className="block text-body-sm text-body mb-1">
            {t(`contact.${field}_label`)}
          </label>
          <input
            id={field}
            type={field === "email" ? "email" : "text"}
            value={form[field]}
            onChange={(e) => handleChange(field, e.target.value)}
            placeholder={t(`contact.${field}_placeholder`)}
            className={`w-full px-4 py-3 rounded-sm bg-canvas-soft border ${
              errors[field] ? "border-primary" : "border-hairline"
            } text-ink placeholder-mute text-body-sm focus:outline-none focus:border-primary transition-colors`}
          />
          {errors[field] && <p className="mt-1 text-body-sm text-primary">{errors[field]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="block text-body-sm text-body mb-1">
          {t("contact.message_label")}
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder={t("contact.message_placeholder")}
          className={`w-full px-4 py-3 rounded-sm bg-canvas-soft border ${
            errors.message ? "border-primary" : "border-hairline"
          } text-ink placeholder-mute text-body-sm focus:outline-none focus:border-primary transition-colors resize-none`}
        />
        {errors.message && <p className="mt-1 text-body-sm text-primary">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 rounded-sm bg-primary text-canvas font-sans text-button-md border border-primary transition-all duration-200 active:scale-[0.98] disabled:opacity-50"
      >
        <FiSend size={16} />
        {status === "sending" ? t("contact.sending") : t("contact.submit")}
      </button>
      {status === "success" && (
        <p className="text-body-sm text-center text-primary">{t("contact.success")}</p>
      )}
      {status === "error" && (
        <p className="text-body-sm text-center text-primary">{t("contact.error")}</p>
      )}
    </form>
  );
}
