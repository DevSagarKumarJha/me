import Activities from "@/components/activity_components/Activities";
import IntroComponent from "@/components/page_components/IntroComponent";


export default function Home() {
  return (
    <main className="max-w-5xl m-auto">
      <IntroComponent/>
      <Activities/>
    </main>
  );
}
