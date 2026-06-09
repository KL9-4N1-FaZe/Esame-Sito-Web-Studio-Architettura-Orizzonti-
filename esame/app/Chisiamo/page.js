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