import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-vista-dark text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="relative w-48 h-16 mb-6 bg-white/10 rounded-lg p-2">
                            <Image
                                src="/logo-light.png"
                                alt="Sleutelspoedje Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-400 mb-4">
                            Uw betrouwbare partner voor sloten en sleutels. 24/7 bereikbaar
                            voor spoedgevallen in de hele regio.
                        </p>
                    </div>

                    {/* Snel naar */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-vista-green">Snel naar</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-400 hover:text-vista-green transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/diensten" className="text-gray-400 hover:text-vista-green transition-colors">
                                    Diensten
                                </Link>
                            </li>
                            <li>
                                <Link href="/tarieven" className="text-gray-400 hover:text-vista-green transition-colors">
                                    Tarieven
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-vista-green transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Diensten */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-vista-green">Diensten</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">Deur openen</li>
                            <li className="text-gray-400">Slot vervangen</li>
                            <li className="text-gray-400">Inbraakbeveiliging</li>
                            <li className="text-gray-400">Spoedservice</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-vista-green">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">📞</span>
                                <div>
                                    <p className="text-xs text-gray-500">24/7 Bereikbaar</p>
                                    <a
                                        href="tel:0648035685"
                                        className="text-xl font-bold hover:text-vista-green transition-colors"
                                    >
                                        06-48035685
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">✉️</span>
                                <a
                                    href="mailto:info@sleutelspoedje.nl"
                                    className="hover:text-vista-green transition-colors"
                                >
                                    info@sleutelspoedje.nl
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-2xl">📍</span>
                                <span className="text-gray-400">
                                    Werkzaam in uw hele regio
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Sleutelspoedje. Alle rechten
                        voorbehouden.
                    </p>
                </div>
            </div>
        </footer>
    );
}
