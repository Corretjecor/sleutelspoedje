import { CallNowButton } from "@/components/CallNowButton";

export default function OverPage() {
    return (
        <div>
            <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Over Sleutelspoedje</h1>
                    <p className="text-xl text-gray-300">
                        Uw betrouwbare partner in slotenservice
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6">Wie zijn wij?</h2>

                        <p className="text-gray-700 mb-6">
                            Sleutelspoedje is een professionele slotenmaker service die zich
                            richt op snelheid, kwaliteit en klanttevredenheid. Met jarenlange
                            ervaring in het vak helpen we dagelijks mensen die buitengesloten
                            zijn of hun beveiliging willen verbeteren.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 mt-8">Onze Missie</h3>
                        <p className="text-gray-700 mb-6">
                            Wij geloven dat niemand uren buiten zijn huis hoeft te staan of
                            zich zorgen hoeft te maken over veiligheid. Daarom zijn we 24/7
                            bereikbaar en streven we ernaar binnen 30 minuten ter plaatse te
                            zijn. Transparantie in prijzen en eerlijk advies staan bij ons
                            voorop.
                        </p>

                        <h3 className="text-2xl font-bold mb-4 mt-8">Waarom Kiezen voor Ons?</h3>
                        <ul className="space-y-3 mb-6">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700">
                                    <strong>Snelle service:</strong> Binnen 30 minuten ter
                                    plaatse bij spoedgevallen
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700">
                                    <strong>Transparante prijzen:</strong> U weet vooraf precies
                                    wat het kost
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700">
                                    <strong>Gecertificeerde monteurs:</strong> Vakbekwaam en
                                    betrouwbaar personeel
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700">
                                    <strong>Geen schade:</strong> We werken met moderne technieken
                                    om schade te voorkomen
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 text-xl mt-1">✓</span>
                                <span className="text-gray-700">
                                    <strong>A-merk materialen:</strong> Alleen topkwaliteit sloten
                                    en cilinders
                                </span>
                            </li>
                        </ul>

                        <div className="bg-green-50 p-8 rounded-xl mt-12 text-center">
                            <h3 className="text-2xl font-bold mb-4">Direct Hulp Nodig?</h3>
                            <p className="text-gray-700 mb-6">
                                Bel ons nu en onze monteur is binnen 30 minuten bij u!
                            </p>
                            <CallNowButton />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
