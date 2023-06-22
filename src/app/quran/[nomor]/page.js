import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import AyatCards from "../../../components/AyatCards";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

async function fetchSurahDetail(nomor) {
  const res = await fetch(`https://equran.id/api/v2/surat/${nomor}`);
  return res.json();
}

export default async function Page({ params }) {
  const detail = await fetchSurahDetail(params.nomor);
  console.log(detail);

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-gray-800 relative md:px-8 px-0">
      <Navbar />
      <div className="flex w-full min-h-screen flex-col items-center pt-20 md:pb-16 pb-28">
        <div className="flex text-white space-x-3 text-2xl">
          <h2>{detail.data.namaLatin}</h2>
          <span>-</span>
          <h2 className="arab">{detail.data.nama}</h2>
        </div>
        <div className="text-white text-md font-extralight flex space-x-4">
          <p>Jumlah ayat : {detail.data.jumlahAyat}</p>
          <p>Tempat turun : {detail.data.tempatTurun}</p>
          <audio src={detail.data.audioFull[0]}>play</audio>
        </div>
        <div className="flex flex-wrap w-full justify-between">
          <div className="flex flex-wrap mt-8 md:px-12 px-4 gap-4">
            {detail.data.ayat.map((ayah, index) => (
              <AyatCards key={index} ayah={ayah} detail={detail} />
            ))}
          </div>
        </div>
        {/* <BeforeAfter detail={detail} /> */}
        <div className="flex flex-row gap-2 pt-4">
          <Link
            href={`/quran/${detail.data.suratSebelumnya.nomor}`}
            className="flex items-center bg-gray-300 py-1 px-3 rounded-md"
          >
            <MdKeyboardArrowLeft />
            {detail.data.suratSebelumnya.namaLatin}
          </Link>
          <Link
            href={`/quran/${detail.data.suratSelanjutnya.nomor}`}
            className="flex items-center bg-gray-300 py-1 px-3 rounded-md"
          >
            {detail.data.suratSelanjutnya.namaLatin}
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
