import Link from 'next/link';

export default function Footer(props) {
  return (
    <footer className="bg-[#091413] text-amber-900 py-10 px-6 font-sans">
      <div className="container mx-auto flex flex-wrap justify-between gap-8">
        
        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-4 uppercase text-sm flex justify-between">CORPORATE <span className="md:hidden">+</span></h3>
          <div className="hidden md:flex flex-col gap-2 text-[11px] text-white uppercase">
            <a href="#">Chi siamo</a>
            <a href="#">News</a>
            <a href="#">Eventi</a>
            <a href="#">Stampa</a>
            <a href="#">Brochures</a>
            <a href="#">Lavora con noi</a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-4 uppercase text-sm flex justify-between">NEWS!! <span className="md:hidden">+</span></h3>
          <div className="hidden md:flex flex-col gap-2 text-[11px] text-white uppercase">
            <a href="#">Soluzioni Business</a>
            <a href="#">Sistemi nuovi a venire</a>
            <a href="#">Partnership</a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-4 uppercase text-sm flex justify-between">Anche su mobile <span className="md:hidden">+</span></h3>
          <div className="hidden md:flex flex-col gap-2 text-[11px] text-white uppercase">
            <a href="#">App mobili</a>
          </div>
        </div>

        <div className="w-full md:w-auto">
          <h3 className="font-bold mb-4 uppercase text-sm flex justify-between">SUPPORTO <span className="md:hidden">+</span></h3>
          <div className="hidden md:flex flex-col gap-2 text-[11px] text-white uppercase">
            <a href="#">FAQ</a>
            <a href="#">Supporto clienti</a>
          </div>
        </div>

        <div className="w-full md:max-w-xs">
          <h3 className="font-bold mb-2 uppercase text-sm">NEWSLETTER</h3>
          <p className="text-[14px] leading-tight text-white mb-4">{props.testoNewsletter}</p>
          <input type="text" placeholder="Inserisci la tua e-mail" className="w-full p-3 text-white mb-2 outline-none text-xs" />
          <button className="w-full bg-white py-3 font-bold italic uppercase text-sm hover:bg-[#408A71] transition-colors">
            {props.bottoneNewsletter}
          </button>
          
     
        </div>

      </div>

      <div className="container mx-auto mt-10 pt-6 border-t border-zinc-900 flex flex-wrap justify-between items-center gap-4 text-[10px] text-white uppercase font-bold">
        <div className="border border-zinc-700 px-3 py-1 flex items-center">
          <span className="mr-2 italic">IT</span> ITALY (ITALIAN)
        </div>
        <p>{props.copyright}</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
          <a href="#" className="hover:text-white transition-colors">Legali</a>
        </div>
      </div>
    </footer>
  );
}