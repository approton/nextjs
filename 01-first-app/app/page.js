import Link from "next/link"
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>Evertything on Github</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
