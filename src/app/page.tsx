import { Navbar } from "@/components/ui/navbar";
import { Hero } from "@/components/ui/hero";
import { ComoTrabajamos } from "@/components/ui/como-trabajamos";
import { QueObtenes } from "@/components/ui/que-obtenes";
import { FAQ } from "@/components/ui/faq";
import { CTAFinal } from "@/components/ui/cta-final";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ComoTrabajamos />
      <QueObtenes />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
