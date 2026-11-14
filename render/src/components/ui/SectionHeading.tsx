import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  titleKey: string;
  subtitleKey?: string;
}

export default function SectionHeading({ titleKey, subtitleKey }: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <div className="mb-12 text-center">
      <h2 className="text-display-lg text-ink-strong">{t(titleKey)}</h2>
      {subtitleKey && <p className="mt-3 text-body-lg text-body">{t(subtitleKey)}</p>}
    </div>
  );
}
