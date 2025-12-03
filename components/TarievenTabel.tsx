export function TarievenTabel() {
    const tarieven = [
        {
            dienst: "Deur openen (standaard)",
            prijs: "€89,-",
            opmerking: "Incl. aanrijden",
        },
        {
            dienst: "Deur openen avond/nacht/weekend",
            prijs: "€129,-",
            opmerking: "18:00-08:00 & weekend",
        },
        {
            dienst: "Cilinder vervangen",
            prijs: "vanaf €49,-",
            opmerking: "Excl. materiaal",
        },
        {
            dienst: "Compleet slot vervangen",
            prijs: "vanaf €89,-",
            opmerking: "Excl. materiaal",
        },
        {
            dienst: "Sleutel bijmaken",
            prijs: "vanaf €9,-",
            opmerking: "Per sleutel",
        },
        {
            dienst: "Veiligheidsadvies",
            prijs: "GRATIS",
            opmerking: "Vrijblijvend",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Transparante Tarieven
                </h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Geen verborgen kosten - u weet vooraf waar u aan toe bent
                </p>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-green-900 text-white">
                                        <th className="px-6 py-4 text-left">Dienst</th>
                                        <th className="px-6 py-4 text-left">Prijs</th>
                                        <th className="px-6 py-4 text-left">Opmerking</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tarieven.map((tarief, index) => (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 0 ? "bg-white" : "bg-green-50"
                                                } hover:bg-green-100 transition-colors`}
                                        >
                                            <td className="px-6 py-4 font-medium">
                                                {tarief.dienst}
                                            </td>
                                            <td className="px-6 py-4 font-bold text-green-900">
                                                {tarief.prijs}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-600">
                                                {tarief.opmerking}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                        <p className="text-sm text-gray-700">
                            <strong>💡 Let op:</strong> Alle prijzen zijn inclusief BTW.
                            Materiaalkosten (sloten, cilinders) worden tegen inkoopprijs
                            doorberekend.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
