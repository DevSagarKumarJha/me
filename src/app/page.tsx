import Activities from "@/components/activity_components/Activities";
import { ActivityItem } from "@/components/activity_components/ActivityItem";
import DiscordStatusInline from "@/components/activity_components/Discord";
import IntroComponent from "@/components/page_components/IntroComponent";
import { FaDiscord } from "react-icons/fa6";


export default function Home() {
  return (
    <main className="max-w-5xl m-auto">
      <IntroComponent/>
      <Activities/>
    </main>
  );
}
