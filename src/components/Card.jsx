import Link from "next/link";

export default function Card({ data }) {
  return (
    <>
      <Link
        href={`/quran/${data.nomor}`}
        className="link flex rounded-md justify-between items-center overflow-hidden border border-gray-600 hover:border-green-500 text-white"
      >
        <div className="flex p-4 space-x-8 items-center">
          <span className="w-10 h-10 rotate-45 relative rounded-md bg-gray-600">
            <p className="flex absolute -rotate-45 w-10 h-10 items-center justify-center">
              {data.nomor}
            </p>
          </span>
          <h1>{data.namaLatin}</h1>
        </div>
        <div className="p-4 arab">
          <p>{data.nama}</p>
        </div>
      </Link>
      ;
    </>
  );
}
