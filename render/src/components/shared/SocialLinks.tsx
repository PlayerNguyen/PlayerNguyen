import type { SocialLink } from "@/types";

interface SocialLinksProps {
  links: SocialLink[];
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
};

export default function SocialLinks({ links, size = "md" }: SocialLinksProps) {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${sizeMap[size]} text-mute hover:text-primary transition-colors`}
          aria-label={link.label}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
