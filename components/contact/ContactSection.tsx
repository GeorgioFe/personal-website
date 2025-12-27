import type { ContactItemProps } from "./ContactItem";
import ContactItem from "./ContactItem";

type ContactSectionProps = {
  title: string;
  items: ContactItemProps[];
};

export default function ContactSection({ title, items }: ContactSectionProps) {
  return (
    <div>
      <h3 className="text-lg text-white">{title}</h3>
      <div className="mt-6">
        {items.map((item) => (
          <ContactItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

