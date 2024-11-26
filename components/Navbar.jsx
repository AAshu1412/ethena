import Link from 'next/link';
import { ConnectKitButton } from "connectkit";

export default function Navbar() {
  return (
    <div className='w-full h-[10vh] mb-3 border-8 border-black border-double'>
    <nav className="h-full grid grid-cols-[5rem_0.8fr_2fr_1fr_10rem] text-xl    ">
    <div className="col-start-2 col-span-1 flex flex-col justify-center items-center">
      <Link
        href="/"
        className="flex flex-row  items-center gap-5 text-4xl font-bold	"
      >
                <h1>Ethena</h1>
      </Link>
    </div>
    <div className=" col-start-3 col-span-1 flex flex-col justify-center">
      <ul className="flex flex-row gap-10">
        {/* <li>
          <Link href="/">Home</Link>
        </li> */}
        <li>
          <Link href="/distribution">Distribution</Link>
        </li>
        <li>
          <Link href="/stream">Stream</Link>
        </li>
        {/* <li>
          <Link href="/about">About Us</Link>
        </li> */}
      </ul>
    </div>
    <div className=" col-start-4 col-span-1 flex flex-col justify-center items-center pl-40">
      <ConnectKitButton />
    </div>
  </nav></div>
   );
}
