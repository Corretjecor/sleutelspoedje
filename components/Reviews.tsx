export function Reviews() {
    const reviews = [
        {
            name: "Maria de Vries",
            rating: 5,
            text: "Super snel geholpen! Binnen 20 minuten ter plaatse en de deur was binnen 5 minuten open. Geen schade, vriendelijke service!",
            date: "2 weken geleden",
        },
        {
            name: "Jan Bakker",
            rating: 5,
            text: "Eindelijk een eerlijke slotenmaker. Prijs zoals afgesproken, geen verrassingen. Aanrader!",
            date: "1 maand geleden",
        },
        {
            name: "Sophie Jansen",
            rating: 5,
            text: "Midden in de nacht buitengesloten. Binnen 30 minuten was er iemand en de prijs was heel redelijk. Top service!",
            date: "3 weken geleden",
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">
                    Wat Klanten Zeggen
                </h2>
                <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
                    Meer dan 500+ tevreden klanten in de regio
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white text-gray-900 p-6 rounded-xl shadow-xl"
                        >
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-400 text-xl">
                                        ⭐
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">&quot;{review.text}&quot;</p>
                            <div className="border-t pt-4">
                                <p className="font-bold">{review.name}</p>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                        <span className="text-2xl">⭐</span>
                        <span className="font-bold text-lg">4.9/5</span>
                        <span className="text-blue-200">• 500+ reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
