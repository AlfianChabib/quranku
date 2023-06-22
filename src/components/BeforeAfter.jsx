import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function BeforeAfter({ detail }) {
  return (
    <>
      <div className="flex flex-row gap-2 pt-4">
        <Link
          href={`/quran/${detail.data.suratSebelumnya.nomor}`}
          className="flex bg-gray-300 py-1 px-3 rounded-md"
        >
          <MdKeyboardArrowLeft />
          {detail.data.suratSebelumnya.namaLatin}
        </Link>
        <Link
          href={`/quran/${detail.data.suratSelanjutnya.nomor}`}
          className="flex bg-gray-300 py-1 px-3 rounded-md"
        >
          {detail.data.suratSelanjutnya.namaLatin}
          <MdKeyboardArrowRight />
        </Link>
      </div>
    </>
  );
}
