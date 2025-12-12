import React from "react";
import { IconType } from "react-icons";
import { AnimatedContactWrapper } from "./ui/AnimatedContactWrapper";

interface LinkItem {
  icon: IconType;
  url: string;
}

interface LinkProps {
  links: LinkItem[];
}

const ContactComponent: React.FC<LinkProps> = ({ links }) => {
  return (
    <AnimatedContactWrapper>
      <div className="flex gap-3 ">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <div key={link.url}>
              <a
                href={link.url}
                className={`text-2xl hover:opacity-90`}
              >
                <Icon className=""/>
              </a>
            </div>
          );
        })}
      </div>
    </AnimatedContactWrapper>
  );
};

export default ContactComponent;
