export default function AyatCards({ ayah, detail }) {
  return (
    <>
      <div className="flex flex-wrap w-full relative bg-gray-300 p-4 rounded-lg space-y-6">
        <p className="flex md:w-16 w-14 md:h-8 h-6  items-center justify-center bg-gray-600 md:text-base text-xs  text-gray-300 rounded-md gap-1">
          {detail.data.nomor}
          <span>:</span>
          {ayah.nomorAyat}
        </p>
        <p className="text-right arab w-full text-2xl leading-loose">
          {ayah.teksArab}
        </p>
        <p className="w-full text-sm">{ayah.teksIndonesia}</p>
      </div>
    </>
  );
}
