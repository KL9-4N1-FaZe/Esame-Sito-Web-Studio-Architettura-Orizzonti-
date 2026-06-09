import Navbar from "@/components/Navbar";
import Bannerone from "@/components/Bannerone"
import Footer from "@/components/Footer"
import Link from 'next/link';

export default function Homepage() {
  return (
    <>
      <Navbar 
        progetti="I NOSTRI LAVORI" 
        noi="CHI SIAMO" 
        contatti="CONTATACI" 
        lavora="LAVORA CON NOI" 
      />

       <Bannerone 
        titolo={<>Progettiamo lo spazio <br />immaginiamo il futuro.</>}
        descrizione="Studio Orizzonti unisce estetica minimale e sostenibilità ambientale per creare architetture che dialogano con il territorio."
        bottone="I NOSTRI PROGETTI"
      />
            <Footer 
        testoNewsletter="Scopri tutto in Anticipo da oggi"
        bottoneNewsletter="ISCRIVITI"
        copyright="© 2026 Studio Architettura Orizzonti"
      />

    </>
  );
}