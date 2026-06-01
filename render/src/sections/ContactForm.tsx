import { useState, type FormEvent } from "react";
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
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = t("contact.validation_required");
    if (!form.email.trim()) {
      newErrors.email = t("contact.validation_required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("contact.validation_email");
    }
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
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">
          {t("contact.name_label")}
        </label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder={t("contact.name_placeholder")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-800/50 border ${
            errors.name ? "border-red-500" : "border-zinc-700"
          } text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">
          {t("contact.email_label")}
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder={t("contact.email_placeholder")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-800/50 border ${
            errors.email ? "border-red-500" : "border-zinc-700"
          } text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">
          {t("contact.subject_label")}
        </label>
        <input
          type="text"
          value={form.subject}
          onChange={(e) => handleChange("subject", e.target.value)}
          placeholder={t("contact.subject_placeholder")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-800/50 border ${
            errors.subject ? "border-red-500" : "border-zinc-700"
          } text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors`}
        />
        {errors.subject && <p className="mt-1 text-sm text-red-400">{errors.subject}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">
          {t("contact.message_label")}
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => handleChange("message", e.target.value)}
          placeholder={t("contact.message_placeholder")}
          className={`w-full px-4 py-3 rounded-xl bg-zinc-800/50 border ${
            errors.message ? "border-red-500" : "border-zinc-700"
          } text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors resize-none`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 disabled:opacity-50"
      >
        <FiSend size={16} />
        {status === "sending" ? t("contact.sending") : t("contact.submit")}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-400 text-center">{t("contact.success")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">{t("contact.error")}</p>
      )}
    </form>
  );
}
