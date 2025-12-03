import Link from "next/link";

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="bg-yellow-400 p-2 rounded-lg">
              <svg
                className="w-8 h-8 text-blue-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Sleutelspoedje</h1>
              <p className="text-sm text-blue-200">24/7 Slotenmaker</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/diensten"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Diensten
            </Link>
            <Link
              href="/tarieven"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Tarieven
            </Link>
            <Link
              href="/over"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Over Ons
            </Link>
            <Link
              href="/contact"
              className="hover:text-yellow-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href="tel:0612345678"
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-bold hover:bg-yellow-300 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              📞 Bel Direct
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <a
              href="tel:0612345678"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm"
            >
              📞 Bel
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
