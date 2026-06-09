import Navbar from "@/components/Navbar";
import Bannerone1 from "@/components/Bannerone1";
import Mappa from "@/components/Mappa";
import Footer from "@/components/Footer";


export default function Contatti() {
  return (
    <>
    
         <Navbar 
           progetti="I NOSTRI LAVORI" 
           noi="CHI SIAMO" 
           contatti="CONTATACI" 
           homepage="Homepage" 
         />
          

         <Bannerone1/>
  <div className="w-full pt-16 pb-20 px-6 md:px-16 lg:px-20">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-12 uppercase tracking-tighter">
                CHI  <span className="text-[#285A48]">SIAMO</span>
              </h2>
              <p className="text-black">Dietro ogni grande progetto c'è una sinergia perfetta di talenti. Fondato nel 2015, il nostro studio unisce visione artistica, precisione tecnica e innovazione digitale.

Direzione Creativa: L'Architetto alla guida dello studio, mente visionaria che coordina il concept e la filosofia di ogni opera.

Concept & Design: Un team di 6 Progettisti e Progettiste focalizzato sulla ricerca dei materiali, lo studio del colore e il dettaglio d'interni.

Sviluppo Tecnico: I nostri 2 Geometri, specialisti del cantiere e della precisione millimetrica sul campo.

Digital & Innovation: L'IT Specialist, che governa le tecnologie d'avanguardia, i sistemi BIM e i render fotorealistici.

Management & Customer Care: La Segreteria di Direzione, il cuore organizzativo che cura le relazioni con i clienti e l'efficienza dello studio.

Crediamo che ogni materiale abbia una voce e ogni luce un'emozione. La nostra squadra è lo strumento che le trasforma in realtà.</p>
            </div>
                  <Mappa 
        titolo="Dove ci troviamo"
        descrizione="Studio Orizzonti è un esclusivo laboratorio di progettazione con sede a Milano, situato nella prestigiosa e futuristica cornice di CityLife. Nel cuore dell'architettura d'avanguardia milanese, lo studio fonde innovazione, eleganza e sostenibilità per dare vita a progetti d'interni e soluzioni urbane capaci di ridefinire il concetto di abitare contemporaneo."
        maps="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6148.887165355496!2d9.150626997570836!3d45.47790233429655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c16d022012b5%3A0xc4687e6c2fe807c5!2sCityLife%2C%20Milano%20MI!5e1!3m2!1sit!2sit!4v1779101654672!5m2!1sit!2sit"
      />    

            <Footer 
            testoNewsletter="Scopri tutto in Anticipo da oggi"
            bottoneNewsletter="ISCRIVITI"
            copyright="© 2026 Studio Architettura Orizzonti"
          />

          </>
  );
}