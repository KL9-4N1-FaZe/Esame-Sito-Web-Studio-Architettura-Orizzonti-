export default function Progetti(props) {
  const displayClass = props.soloDesktop ? "hidden lg:flex" : "flex";

  return (
    <div className={`${displayClass} w-full lg:w-[31%] flex-col bg-[#091413] rounded-[40px] shadow-sm border border-gray-100 overflow-hidden mb-12 bg-white`}>
      
      <div className="relative w-full">
        <img 
          src={props.immagine} 
          alt={props.titolo} 
          className="w-full h-[250px] object-cover" 
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-gray-800 text-xl font-bold leading-tight mb-6 min-h-[60px]">
          {props.titolo}
        </h2>
        
        <div className="space-y-2 mb-8 text-sm text-gray-700">
          <p> <span className="font-bold">{props.descrizione}</span></p>
          <p>Dov'è situata: <span className="font-bold">{props.dove}</span></p>
        </div>

        <div className="mt-auto flex justify-between items-center">
          <a 
            href={props.link} 
            className="bg-[#408A71] text-white px-6 py-3 rounded-full text-xs font-bold uppercase hover:bg-green-600 transition-colors"
          >
            Scopri di più
          </a>
          <div className="text-right">
            <span className="text-[10px] text-gray-500 block uppercase">Gia in costruzione</span>
            <span className="text-xl font-black text-gray-900"></span>
          </div>
        </div>
      </div>
    </div>
  );
}