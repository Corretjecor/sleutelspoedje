import { DienstenGrid } from "@/components/DienstenGrid";
import { CallNowButton } from "@/components/CallNowButton";

export default function DienstenPage() {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Onze Diensten</h1>
                    <p className="text-xl text-blue-200 mb-8">
                        Professionele slotenservice voor particulier en zakelijk
                    </p>
                    <CallNowButton />
                </div>
            </section>

            <DienstenGrid />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8">Waarom Sleutelspoedje?</h2>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="text-4xl">✓</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Erkend Vakmanschap</h3>
                                <p className="text-gray-600">
                                    Al onze monteurs zijn gecertificeerd en hebben jarenlange ervaring
                                    in het vak.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl">✓</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Geen Schade Garantie</h3>
                                <p className="text-gray-600">
                                    We werken altijd met de nieuwste technieken om schade aan uw
                                    deur te voorkomen.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl">✓</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">Verzekerd & Bondig</h3>
                                <p className="text-gray-600">
                                    Volledig verzekerd voor uw gemoedsrust. Aangesloten bij de
                                    branchevereniging.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="text-4xl">✓</div>
                            <div>
                                <h3 className="text-xl font-bold mb-2">A-Merk Materialen</h3>
                                <p className="text-gray-600">
                                    We werken alleen met topkwaliteit sloten en cilinders van
                                    gerenommeerde merken.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
