import Navigation from '../sections/Navigation';
import Hero from '../sections/Hero';
import PaiSection from '../sections/PaiSection';
import NivelesSection from '../sections/NivelesSection';
import FasesSection from '../sections/FasesSection';
import CamposSection from '../sections/CamposSection';
import EstructuraSection from '../sections/EstructuraSection';
import EjemplosSection from '../sections/EjemplosSection';
import ResumenSection from '../sections/ResumenSection';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <PaiSection />
      <NivelesSection />
      <FasesSection />
      <CamposSection />
      <EstructuraSection />
      <EjemplosSection />
      <ResumenSection />
      <Footer />
    </div>
  );
}
