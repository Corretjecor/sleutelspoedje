import { CallNowButton } from "@/components/CallNowButton";
import { AfspraakForm } from "@/components/AfspraakForm";

export default function ContactPage() {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Contact</h1>
                    <p className="text-xl text-blue-200 mb-8">
                        24/7 bereikbaar voor al uw vragen
                    </p>
                    <CallNowButton />
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Neem Contact Op</h2>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <span className="text-2xl">📞</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Telefonisch</h3>
                                            <a
                                                href="tel:0612345678"
                                                className="text-blue-600 text-xl font-bold hover:underline"
                                            >
                                                06-12345678
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Voor spoed altijd direct bereikbaar, 24 uur per dag, 7 dagen
                                        per week
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <span className="text-2xl">✉️</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">E-mail</h3>
                                            <a
                                                href="mailto:info@sleutelspoedje.nl"
                                                className="text-blue-600 hover:underline"
                                            >
                                                info@sleutelspoedje.nl
                                            </a>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Voor niet-spoed vragen beantwoorden we e-mails binnen 24 uur
                                    </p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="bg-blue-100 p-3 rounded-lg">
                                            <span className="text-2xl">🕐</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold">Openingstijden</h3>
                                            <p className="text-gray-900">24/7 bereikbaar</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                        Spoed: altijd direct
                                        <br />
                                        Afspraken: ma-vr 08:00-18:00
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Appointment Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Afspraak Maken</h2>
                            <AfspraakForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
