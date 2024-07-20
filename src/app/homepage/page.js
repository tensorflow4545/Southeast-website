import Hero from "@/components/Home Page/Hero";
import Navbar from "@/components/Music/Navbar";

export default function Home() {
  return (
   <>
      <div className="sm:grid hidden">
      <Navbar/>
      <Hero/>
      </div>
   </>
  );
}
