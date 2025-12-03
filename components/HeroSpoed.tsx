import { CallNowButton } from "./CallNowButton";

export function HeroSpoed() {
    return (
        <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Emergency badge */}
                    <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold mb-6 animate-bounce">
                        <span className="w-3 h-3 bg-white rounded-full animate-ping absolute"></span>
                        <span className="relative">🚨 SPOED SERVICE 24/7</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                        Buitengesloten?
                        <br />
                        <span className="text-yellow-400">Wij zijn er nu!</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-blue-100">
                        Professionele slotenmaker binnen 30 minuten bij u.
                        <br />
                        Geen voorrijkosten, geen verrassingen!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                        <CallNowButton />
                        <a
                            href="#diensten"
                            className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all"
                        >
                            Onze Diensten
                        </a>
                    </div>

                    {/* USPs */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold text-lg mb-2">Binnen 30 Minuten</h3>
                            <p className="text-blue-200 text-sm">
                                Snelle responstijd, altijd in de buurt
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-lg mb-2">Vaste Prijzen</h3>
                            <p className="text-blue-200 text-sm">
                                Transparant, geen verborgen kosten
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="font-bold text-lg mb-2">Gecertificeerd</h3>
                            <p className="text-blue-200 text-sm">
                                Erkend vakmanschap, verzekerd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
