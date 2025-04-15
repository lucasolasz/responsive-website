import Analytics from "./_components/analytics";
import Products from "./_components/products";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Newsletter from "./_components/newsletter";
import Footer from "./_components/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Responsive Website - Site Moderno e Responsivo",
  description:
    "Um site responsivo moderno desenvolvido com Next.js, React e TailwindCSS. Descubra funcionalidades incríveis e uma interface otimizada para todos os dispositivos.",
  keywords: [
    "Next.js",
    "React",
    "TailwindCSS",
    "Site Responsivo",
    "Desenvolvimento Web",
    "Interface Responsiva",
  ],
  authors: [{ name: "Lucas Andrade" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Responsive Website - Site Moderno e Responsivo",
    description:
      "Um site responsivo moderno desenvolvido com Next.js, React e TailwindCSS. Descubra funcionalidades incríveis e uma interface otimizada para todos os dispositivos.",
    url: "https://responsive-website-nine-jet.vercel.app/",
    siteName: "Responsive Website",
    images: [
      {
        url: "https://www.seguetech.com/wp-content/uploads/2013/12/segue-blog-css3-supports-developing-responsive-websites.png",
        width: 1200,
        height: 630,
        alt: "Imagem de destaque do site",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsive Website - Site Moderno e Responsivo",
    description:
      "Um site responsivo moderno desenvolvido com Next.js, React e TailwindCSS. Descubra funcionalidades incríveis e uma interface otimizada para todos os dispositivos.",
    images: [
      "https://www.seguetech.com/wp-content/uploads/2013/12/segue-blog-css3-supports-developing-responsive-websites.png",
    ],
  },
};

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
