import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
// import { useState } from "react";

async function fetchSurahs() {
  const res = await fetch("https://equran.id/api/v2/surat");
  return res.json();
}

export default async function Page() {
  const data = await fetchSurahs();
  // const [search, setSearch] = useState("");
  // const [listSurahBaru, setListSurahBaru] = useState([]);

  // function handleInput(e) {
  //   e.prevendefault();
  //   setSearch(e.target.value);

  //   if (search.length > 2) {
  //     const listSurahTemp = data.data.filter((surah) => {
  //       surah.namaLatin.toLowercase().includes(search.toLowerCase());
  //     });
  //     setListSurahBaru(listSurahTemp);
  //   }
  // }

  return (
    <>
      <div className="flex min-h-screen w-full flex-col items-center bg-gray-800 relative md:px-8 px-0">
        <Navbar />
        <div className="flex w-full min-h-screen flex-col items-center pt-20 pb-24">
          <div>
            <input
              type="search"
              placeholder="Cari Surat..."
              className="flex py-2 px-4 w-80 rounded-full focus:outline-none"
              // onChange={(e) => handleInput(e)}
            />
          </div>
          <div className="flex flex-wrap w-full md:justify-between justify-center">
            <div className="flex flex-wrap mt-8 px-12 gap-4">
              {data.data.map((data) => (
                <Card key={data.nomor} data={data} />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
