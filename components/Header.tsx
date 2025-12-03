import Link from "next/link";
import Image from "next/image";
import { CallNowButton } from "./CallNowButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-40 h-12">
            <Image
              src="/logo.png"
              alt="Sleutelspoedje Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-vista-dark hover:text-vista-green font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/diensten"
            className="text-vista-dark hover:text-vista-green font-medium transition-colors"
          >
            Diensten
          </Link>
          <Link
            href="/tarieven"
            className="text-vista-dark hover:text-vista-green font-medium transition-colors"
          >
            Tarieven
          </Link>
          <Link
            href="/over"
            className="text-vista-dark hover:text-vista-green font-medium transition-colors"
          >
            Over Ons
          </Link>
          <Link
            href="/contact"
            className="text-vista-dark hover:text-vista-green font-medium transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="tel:0648035685"
            className="hidden md:flex flex-col items-end text-vista-dark"
          >
            <span className="text-xs text-gray-500">24/7 Spoedservice</span>
            <span className="font-bold text-xl text-vista-green">06-48035685</span>
          </a>
          <CallNowButton />
        </div>
      </div>
    </header>
  );
}
