export default function AyatCard({ ayah, detail }) {
  return (
    <>
      <div className="flex flex-wrap relative flex-col-reverse md:flex-row w-full justify-between p-8 bg-gray-300 rounded-xl gap-x-5">
        <p className="flex absolute top-4 gap-1">
          {detail.data.nomor} <span>:</span> {ayah.nomorAyat}
        </p>
        <div className="flex flex-col ayat md:mr-4 mr-0  border-gray-500">
          <p className="text-transparent md:text-gray-300">
            {detail.data.nomor} <span>:</span> {ayah.nomorAyat}
          </p>
          <p>{ayah.teksIndonesia}</p>
        </div>
        <div className="flex flex-col ayat md:ml-4 ml-0">
          <p className="text-right text-xl arab pb-4">{ayah.teksArab}</p>
          <p className="text-right text-gray-600">{ayah.teksLatin}</p>
        </div>
      </div>
    </>
  );
}
