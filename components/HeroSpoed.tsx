import { CallNowButton } from "./CallNowButton";

export function HeroSpoed() {
    return (
        <section className="relative bg-vista-dark text-white py-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 2px 2px, #aac527 1px, transparent 0)",
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="inline-block bg-red-600 text-white font-bold px-4 py-1 rounded-full mb-6 animate-pulse">
                        🚨 24/7 SPOEDSERVICE
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Buitengesloten? <br />
                        <span className="text-vista-green">Wij zijn er binnen 30 minuten!</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8">
                        Professionele slotenmaker in uw regio. Geen voorrijkosten, vaste
                        tarieven en 100% schadevrij openen.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <CallNowButton />
                        <div className="flex items-center gap-2 text-gray-300">
                            <span className="text-vista-green">✓</span> Erkend Politie Keurmerk
                            <span className="hidden md:inline mx-2">|</span>
                            <span className="text-vista-green">✓</span> Pin & Contant
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
