import Analytics from "./_components/analytics";
import CardProducts from "./_components/cardsProducts";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Newsletter from "./_components/newsletter";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <CardProducts />
    </div>
  );
}
