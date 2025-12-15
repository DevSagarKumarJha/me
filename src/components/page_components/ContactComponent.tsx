import React from "react";
import { IconType } from "react-icons";
import { AnimatedContactWrapper } from "../wrappers/AnimatedContactWrapper";

interface LinkItem {
  icon: IconType;
  url: string;
  title: string
}

interface LinkProps {
  links: LinkItem[];
}

const ContactComponent: React.FC<LinkProps> = ({ links }) => {
  return (
    <AnimatedContactWrapper>
      <div className="flex gap-3">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.url}>
              <a href={link.url} target="_blank" aria-label={link.title} className={`text-2xl`}>
                <Icon className="p-1  rounded-md hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black text-4xl transition-colors shadow border" />
              </a>
            </div>
          );
        })}
      </div>
    </AnimatedContactWrapper>
  );
};

export default ContactComponent;
