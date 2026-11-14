import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

interface SEOProps {
  titleKey?: string;
  title?: string;
  description?: string;
}

export default function SEO({ titleKey, title, description }: SEOProps) {
  const { t } = useTranslation();
  const defaultTitle = "Nguyễn Huỳnh Nguyên";
  const resolved = title || (titleKey ? t(titleKey) : "");
  const pageTitle = resolved ? `${resolved} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
}
