import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-300 relative">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
