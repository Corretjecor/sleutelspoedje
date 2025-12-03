import { CallNowButton } from "./CallNowButton";

export function HeroSpoed() {
    return (
        <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white py-20 overflow-hidden">
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
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">⚡</div>
                            <h3 className="font-bold text-lg mb-2">Binnen 30 Minuten</h3>
                            <p className="text-gray-300 text-sm">
                                Snelle responstijd, altijd in de buurt
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">💰</div>
                            <h3 className="font-bold text-lg mb-2">Vaste Prijzen</h3>
                            <p className="text-gray-300 text-sm">
                                Transparant, geen verborgen kosten
                            </p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                            <div className="text-4xl mb-3">✅</div>
                            <h3 className="font-bold text-lg mb-2">Gecertificeerd</h3>
                            <p className="text-gray-300 text-sm">
                                Erkend vakmanschap, verzekerd
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
