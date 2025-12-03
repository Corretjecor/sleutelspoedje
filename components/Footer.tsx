import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="mb-4">
                            <Image
                                src="/logo-light.png"
                                alt="Sleutelspoedje Logo"
                                width={150}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </div>
                        <p className="text-gray-400">
                            Uw betrouwbare 24/7 slotenmaker voor alle spoedreparaties en
                            sleutelservice.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Snelle Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/diensten"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Diensten
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/tarieven"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Tarieven
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/over"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Over Ons
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-400 hover:text-green-400 transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <a
                                    href="tel:0648035685"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    06-48035685
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>✉️</span>
                                <a
                                    href="mailto:info@sleutelspoedje.nl"
                                    className="hover:text-green-400 transition-colors"
                                >
                                    info@sleutelspoedje.nl
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>🕐</span>
                                <span>24/7 bereikbaar</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>
                        &copy; {new Date().getFullYear()} Sleutelspoedje. Alle rechten
                        voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}
