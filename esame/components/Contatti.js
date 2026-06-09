export default function Contatti(props) {
  return (
    <contatti className="w-full bg-white pt-16 pb-8 border-t border-gray-100 flex flex-col items-center text-center px-6">
      <img src={props.logo} alt="Logo" className="h-20 w-auto mb-4" />
      <h2 className="text-[#285A48] text-2xl font-bold mb-1">{props.nomeSocieta}</h2>
      <p className="text-gray-500 text-sm mb-12">{props.indirizzo}</p>
    <p className="text-gray-500 text-sm mb-12">{props.indirizzo2}</p>

        <div>
          <h3 className="text-[#285A48] font-bold mb-4 uppercase text-sm tracking-widest">{props.titolo1}</h3>
          <div className="space-y-2 text-gray-700 font-light">
            <p>Tel: {props.tel1}</p>
            <p>Fax: {props.fax1}</p>
            <p className="text-[#285A48] font-normal">{props.email1}</p>
          </div>
        </div>
      <div className="mb-12">
        <h3 className="text-[#285A48] font-bold mb-auto uppercase text-sm tracking-widest">Seguici</h3>
        <div className="flex gap-20">
          <div className="w-25 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#285A48] hover:text-white transition-all cursor-pointer"> 
        <img src="images/ig.svg" alt=" " className="w-5 md:w-5 lg:w-10" />
          Instagram
          </div>
        
        
          <div className="w-25 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#285A48] hover:text-white transition-all cursor-pointer">
          <img src="images/linkeldin.png" alt=" " className="w-5 md:w-5 lg:w-10" />

            Linkedln</div>
          <div className="w-25 h-10 border border-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#285A48] hover:text-white transition-all cursor-pointer">
          <img src="images/BE.png" alt=" " className="w-5 md:w-5 lg:w-10" />
            Behance</div>
        </div>
      </div>
    </contatti>
  );
}