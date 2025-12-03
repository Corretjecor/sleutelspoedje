import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        const {
            name,
            phone,
            email,
            address,
            jobType,
            preferredDate,
            notes,
        } = data;

        // Validation
        if (!name || !phone || !jobType) {
            return NextResponse.json(
                { error: "Naam, telefoon en type klus zijn verplicht." },
                { status: 400 }
            );
        }

        // TODO: Later koppel je hier een mail-service (Resend, SendGrid, etc.)
        // Voor nu loggen we alleen naar de console
        console.log("=== NIEUWE AFSPRAAK AANVRAAG ===");
        console.log("Naam:", name);
        console.log("Telefoon:", phone);
        console.log("Email:", email || "Niet opgegeven");
        console.log("Adres:", address || "Niet opgegeven");
        console.log("Type klus:", jobType);
        console.log("Gewenste datum:", preferredDate || "Niet opgegeven");
        console.log("Opmerkingen:", notes || "Geen");
        console.log("================================");

        // Later voeg je hier email functionaliteit toe:
        // await sendMail({
        //   to: process.env.NOTIFY_EMAIL,
        //   subject: `Nieuwe afspraak via Sleutelspoedje`,
        //   text: `
        //     Naam: ${name}
        //     Telefoon: ${phone}
        //     Email: ${email || 'Niet opgegeven'}
        //     Adres: ${address || 'Niet opgegeven'}
        //     Type klus: ${jobType}
        //     Gewenste datum: ${preferredDate || 'Niet opgegeven'}
        //     Opmerkingen: ${notes || 'Geen'}
        //   `
        // });

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Error processing appointment:", err);
        return NextResponse.json(
            { error: "Er ging iets mis, probeer het later opnieuw." },
            { status: 500 }
        );
    }
}
