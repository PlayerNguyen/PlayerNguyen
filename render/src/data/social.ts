import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { SocialLink } from "@/types";

export const socialLinks: SocialLink[] = [
  {
    icon: FiGithub,
    label: "GitHub",
    url: "https://github.com/PlayerNguyen",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/okuranguyen/",
  },
  {
    icon: FiMail,
    label: "Mail",
    url: "mailto:nhnguyen.forwork@gmail.com",
  },
];
