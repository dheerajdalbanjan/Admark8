import Image from "next/image";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Team from "./_components/Team";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Team />
    </div>
  );
}
