import { TarievenTabel } from "@/components/TarievenTabel";
import { CallNowButton } from "@/components/CallNowButton";

export default function TarievenPage() {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">Tarieven</h1>
                    <p className="text-xl text-blue-200 mb-8">
                        Transparante prijzen zonder verborgen kosten
                    </p>
                </div>
            </section>

            <TarievenTabel />

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Direct een offerte?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Bel ons voor een vrijblijvende offerte. We vertellen u direct wat
                        het gaat kosten - geen verrassingen achteraf!
                    </p>
                    <CallNowButton />
                </div>
            </section>
        </div>
    );
}
