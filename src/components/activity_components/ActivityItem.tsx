import { IconType } from "react-icons";

interface ActivityItemProps{
    icon: IconType;
    label: string;
    children: React.ReactNode;
}

export function ActivityItem({icon,label, children}: ActivityItemProps){
    const Icon = icon;
    return (
      <div className="flex items-center gap-2 text-sm font-mono">
        <Icon />
        <span className="font-semibold">{label}:</span>
        <span>{children}</span>
      </div>
    );
}