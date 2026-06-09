import Link from 'next/link';

export default function Navbar(props) {
  return (
    <nav className="sticky top-0 z-50 bg-[#285A48] text-white p-4 border-b border-gray-100 w-full shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        
        <div className="flex items-center space-x-2 lg:space-x-4 shrink-0">
          <img src="images/logo.png" alt=" " className="w-20 md:w-24 lg:w-34" />
          <img src="images/regione.svg" alt=" " className="hidden md:block w-10 lg:w-15" />
        </div>

        <ul className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-6 px-2 flex-1 justify-center">
          <li>
            <Link href="/Progetti" className="text-[10px] lg:text-xs font-bold hover:text-blue-600 transition whitespace-nowrap uppercase px-1">
              {props.progetti}
            </Link>
          </li>
          <li className="hidden lg:block">
            <Link href="/Chisiamo" className="text-[10px] lg:text-xs font-bold hover:text-blue-600 transition whitespace-nowrap uppercase px-1">
              {props.noi}
            </Link>
          </li>
          <li className="hidden xl:block">
            <Link href="/Contatti" className="text-[10px] lg:text-xs font-bold hover:text-blue-600 transition whitespace-nowrap uppercase px-1">
              {props.contatti}
            </Link>
          </li>
          <li className="hidden 2xl:block">
            <Link href="/page.js" className="text-[10px] lg:text-xs font-bold hover:text-blue-600 transition whitespace-nowrap uppercase px-1">
              {props.homepage}
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-2 md:space-x-4 shrink-0">
          <div className="hidden md:block">
            <img src="https://flagcdn.com/w40/it.png" alt="Italia" className="w-5 h-auto border border-gray-100" />
          </div>

          <div className="flex items-center space-x-2 md:space-x-3">
            <button className="text-lg hover:opacity-70">👤</button>
          </div>

          <div className="h-6 w-[1px] bg-gray-300"></div>
        </div>

      </div>
    </nav>
  );
}