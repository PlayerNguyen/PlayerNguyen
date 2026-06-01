import { useTranslation } from "react-i18next";

interface SectionHeadingProps {
  titleKey: string;
  subtitleKey?: string;
}

export default function SectionHeading({ titleKey, subtitleKey }: SectionHeadingProps) {
  const { t } = useTranslation();

  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {t(titleKey)}
      </h2>
      {subtitleKey && (
        <p className="mt-3 text-lg text-zinc-400">{t(subtitleKey)}</p>
      )}
    </div>
  );
}
