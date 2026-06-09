import Link from 'next/link';

export default function Bannerone1(props) {
  return (
    <div className="relative w-full bg-amber-950 overflow-hidden">
      <div className="w-full h-auto">
        <img 
          src="images/team.png" 
          alt="" 
          className="w-full h-auto block object-cover min-h-[400px] md:min-h-0" 
        />
      </div>
      <div className="absolute inset-0 flex items-center z-10">
        <div className="container px-6 md:px-12 w-1/2">
          <div className="max-w-3xl flex flex-col items-start text-left text-[#408A71]">                 
            <div className="flex justify-start w-full">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}