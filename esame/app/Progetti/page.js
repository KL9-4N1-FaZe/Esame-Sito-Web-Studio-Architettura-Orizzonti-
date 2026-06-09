import Navbar from "@/components/Navbar";
import Tariffe from "@/components/Progetti";
import Footer from "@/components/Footer";
import Link from 'next/link';

export default function Modelli() {
  return (
    <>
    <div className="bg-white">
      <Navbar 
        progetti="I NOSTRI LAVORI" 
        noi="CHI SIAMO" 
        contatti="CONTATACI" 
        homepage="Homepage" 
      />

      <div className="w-full pt-16 pb-20 px-6 md:px-16 lg:px-20">
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 uppercase tracking-tighter">
          OLTRE  <span className="text-[#285A48]">IL</span> COSTRUITO
        </h2>
        <p className="text-black">Fondato nel 2015, Studio Orizzonti è un laboratorio di progettazione con sede a Milano. La nostra missione è trasformare le necessità funzionali in esperienze spaziali uniche. Crediamo che ogni materiale abbia una voce e ogni luce un'emozione.</p>
        <div className="flex flex-wrap justify-between gap-y-12 m-3">
          <Tariffe immagine="images/villa_luce.png" titolo="VILLA LUCE" descrizione="Residenza unifamiliare esclusiva sul Lago di Como, definita da grandi pareti vetrate e progettata per fondersi armoniosamente con il suggestivo paesaggio lacustre." dove="Lago di Como"/>
          <Tariffe immagine="images/loft_berlino.png" titolo="URBAN LOFT" descrizione="Innovativo open-space a Berlino nato dalla riconversione di un ex spazio industriale, ripensato per ospitare uffici creativi dinamici e contemporanei." dove="Berlino"/>
          <Tariffe immagine="images/Green_madrid.png" titolo="GREEN PAVILLION" descrizione="Padiglione temporaneo nel cuore di Madrid, un'opera sostenibile realizzata interamente in legno riciclato e materiali naturali a basso impatto ambientale." dove="Madrid"/>
        </div>
      </div>

</div>

        <Footer 
        testoNewsletter="Scopri tutto in Anticipo da oggi"
        bottoneNewsletter="ISCRIVITI"
        copyright="© 2026 Studio Architettura Orizzonti"
      />

          </>
  );
}