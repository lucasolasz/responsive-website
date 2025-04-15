import Analytics from "./_components/analytics";
import Products from "./_components/products";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Newsletter from "./_components/newsletter";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Products />
      <Footer />
    </div>
  );
}
