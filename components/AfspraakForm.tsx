"use client";

import { useState } from "react";

export function AfspraakForm() {
    const [loading, setLoading] = useState(false);
    const [done, setDone] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const body = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/afspraak", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            setLoading(false);

            if (!res.ok) {
                const data = await res.json();
                setError(data.error ?? "Onbekende fout");
                return;
            }

            setDone(true);
            e.currentTarget.reset();
        } catch (err) {
            setLoading(false);
            setError("Er ging iets mis. Probeer het later opnieuw.");
        }
    }

    if (done) {
        return (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Afspraak Aangevraagd!
                </h3>
                <p className="text-green-700">
                    Bedankt! Ik neem zo snel mogelijk contact met je op.
                </p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-xl shadow-xl p-8">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded">
                <p className="text-sm text-gray-700">
                    <strong>⚠️ Voor spoed:</strong> Bel direct naar{" "}
                    <a
                        href="tel:0648035685"
                        className="text-green-600 font-bold underline"
                    >
                        06-48035685
                    </a>
                    <br />
                    Dit formulier is alleen voor <strong>niet-spoed</strong> afspraken.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Naam <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="name"
                        required
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Uw naam"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Telefoonnummer <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="phone"
                        required
                        type="tel"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="06-48035685"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                        name="email"
                        type="email"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="uw.email@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Adres</label>
                    <input
                        name="address"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Straat 123, Plaats"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Soort klus <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="jobType"
                        required
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                    >
                        <option value="">Maak een keuze</option>
                        <option value="deur-openen">Deur openen (geen spoed)</option>
                        <option value="slot-vervangen">Slot / cilinder vervangen</option>
                        <option value="sleutel-bijmaken">Sleutel(s) bijmaken</option>
                        <option value="veiligheidscheck">
                            Veiligheidscheck / advies
                        </option>
                        <option value="anders">Anders</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">
                        Gewenste datum/tijd
                    </label>
                    <input
                        name="preferredDate"
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="bijv. morgen 14:00"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-2">Opmerkingen</label>
                    <textarea
                        name="notes"
                        rows={4}
                        className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-green-500 focus:outline-none transition-colors"
                        placeholder="Extra informatie..."
                    />
                </div>

                {error && (
                    <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 text-red-700">
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg px-6 py-4 font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                    {loading ? "Verzenden..." : "📅 Afspraak Aanvragen"}
                </button>
            </form>
        </div>
    );
}
