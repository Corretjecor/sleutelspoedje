export function DienstenGrid() {
    const diensten = [
        {
            icon: "🚪",
            title: "Deur Openen",
            description: "Buitengesloten? Wij openen uw deur snel en zonder schade.",
            spoed: true,
        },
        {
            icon: "🔐",
            title: "Slot Vervangen",
            description: "Nieuwe cilinders en sloten van A-merken geplaatst.",
            spoed: false,
        },
        {
            icon: "🔑",
            title: "Sleutels Bijmaken",
            description: "Duplicaat sleutels while-you-wait service.",
            spoed: false,
        },
        {
            icon: "🏠",
            title: "Veiligheidsadvies",
            description: "Gratis inspectie en advies voor optimale beveiliging.",
            spoed: false,
        },
        {
            icon: "🔓",
            title: "Inbraakschade",
            description: "24/7 beschikbaar voor schade na inbraak.",
            spoed: true,
        },
        {
            icon: "⚙️",
            title: "Onderhoud",
            description: "Preventief onderhoud aan sloten en deuren.",
            spoed: false,
        },
    ];

    return (
        <section id="diensten" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Onze Diensten</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                    Van spoedopeningen tot preventief onderhoud - wij staan voor u klaar
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {diensten.map((dienst, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-2 border-transparent hover:border-green-500"
                        >
                            {dienst.spoed && (
                                <div className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full font-bold mb-3">
                                    SPOED 24/7
                                </div>
                            )}
                            <div className="text-5xl mb-4">{dienst.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{dienst.title}</h3>
                            <p className="text-gray-600">{dienst.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
