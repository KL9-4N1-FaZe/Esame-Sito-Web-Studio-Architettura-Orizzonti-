import Navbar from "@/components/Navbar";
import Bannerone3 from "@/components/Bannerone3";
import Contatti from "@/components/Contatti";
import Footer from "@/components/Footer";

export default function Venezia() {
  return (
    <main className="min-h-screen bg-black">
     
            <Navbar 
              progetti="I NOSTRI LAVORI" 
              noi="CHI SIAMO" 
              contatti="CONTATACI" 
              homepage="Homepage" 
            />  

        
        <Bannerone3/>
     
      <Contatti 
        logo="images/logo2.png"
        nomeSocieta="Studio Architettura ORIZZONTI"
        indirizzo="Via delle Idee 42, 20121 Milano (MI): Uffici"
        indirizzo2="Milano City Live:(MI) Studio"
        titolo1="Contatti diretti"
        tel1="+39 041 670 21 09"
        fax1="+39 041 877 67 22"
        email1="info@studioorizzonti.it"
      />

        <Footer 
        testoNewsletter="Scopri tutto in Anticipo da oggi"
        bottoneNewsletter="ISCRIVITI"
        copyright="© 2026 Studio Architettura Orizzonti"
      />

    </main>
  );
}