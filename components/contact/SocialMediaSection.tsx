import ContactSection from "./ContactSection";
import type { ContactItemProps } from "./ContactItem";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const items: ContactItemProps[] = [
  { title: "LinkedIn", href: "https://www.linkedin.com/in/georgio-feghali", Icon: FaLinkedin },
  { title: "X", href: "https://x.com/georgiofe", Icon: FaXTwitter },
  { title: "Github", href: "https://github.com/GeorgioFe", Icon: FaGithub },
];

export default function SocialMediaSection() {
  return <ContactSection title="Social Media" items={items} />;
}
