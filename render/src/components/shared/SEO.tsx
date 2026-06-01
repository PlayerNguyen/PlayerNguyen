import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  titleKey?: string;
  description?: string;
}

export default function SEO({ titleKey, description }: SEOProps) {
  const { t } = useTranslation();
  const defaultTitle = "Player Nguyen";
  const pageTitle = titleKey ? `${t(titleKey)} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
