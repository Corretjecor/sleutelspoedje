import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-light.png"
              alt="Sleutelspoedje Logo"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/diensten"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Diensten
            </Link>
            <Link
              href="/tarieven"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Tarieven
            </Link>
            <Link
              href="/over"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:0648035685"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📞 Bel Direct
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="tel:0648035685"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm"
            >
              📞 Bel
            </a>
          </div>
        </div>
      </div >
    </header >
  );
}
