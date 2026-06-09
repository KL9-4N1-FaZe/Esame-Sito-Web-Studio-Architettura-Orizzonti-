export default function Mappa(props) {
  return (
    <section className="w-full py-12 px-6 md:px-16 lg:px-20 bg-white"> 
    <div className="w-full h-[400px] md:h-[500px] rounded-[40px] overflow-hidden shadow-lg border border-gray-100">
        <iframe
          src={props.maps}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          title="Mappa Posizione"
        ></iframe>
      </div>
      <div className="mb-8">
        <h2 className="text-[#408A71] text-3xl font-bold mb-2">
          {props.titolo}
        </h2>
        <p className="text-gray-600 font-light">
          {props.descrizione}
        </p>
      </div>
    </section>
  );
}