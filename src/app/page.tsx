import Analytics from "./_components/analytics";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
    </div>
  );
}
