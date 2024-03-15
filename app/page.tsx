import Image from "next/image";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Header from "./components/Header";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="flex flex-col justify-center">
      <Hero2 />
      <Features />
    </main>
  );
}
