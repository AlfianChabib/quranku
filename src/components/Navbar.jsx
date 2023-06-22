import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header className="flex w-full justify-center px-8 py-3 bg-zinc-950 text-white absolute top-0">
        <nav className="flex w-full max-w-[1400px] items-center justify-between">
          <div>
            <Link href={"/"} className="text-2xl font-semibold">
              Quran.ku
            </Link>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/quran"}>Baca</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
