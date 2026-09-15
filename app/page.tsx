import Header from '@/components/ui/Header';
import CinematicHero from '@/components/cinematic/CinematicHero';
import SilhouettesLookbook from '@/components/editorial/SilhouettesLookbook';
import CollectionEditorial from '@/components/editorial/CollectionEditorial';
import SavoirFaire from '@/components/editorial/SavoirFaire';
import AtelierBespoke from '@/components/editorial/AtelierBespoke';
import LuxeFooter from '@/components/editorial/LuxeFooter';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-[#e8e2d9]">
      {/* Absolute Cinematic Header */}
      <Header />

      {/* 00. Cinematic Fashion Hero Viewport */}
      <div id="hero">
        <CinematicHero />
      </div>

      {/* 01. Sección 02: Siluetas en Movimiento (El Porte Real y escala cotidiana) */}
      <SilhouettesLookbook />

      {/* 02. Sección 03: Serie 01 · Catálogo de Autor (Esculturas Portables) */}
      <CollectionEditorial />

      {/* 03. Sección 04: Savoir-Faire & Trazabilidad (El Tiempo como Materia Prima) */}
      <SavoirFaire />

      {/* 04. Sección 05: Encargos Privados (Atelier VEVIVA) */}
      <AtelierBespoke />

      {/* 05. Footer Minimalista de Alta Gama */}
      <LuxeFooter />
    </main>
  );
}
