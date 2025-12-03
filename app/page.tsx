import { HeroSpoed } from "@/components/HeroSpoed";
import { DienstenGrid } from "@/components/DienstenGrid";
import { TarievenTabel } from "@/components/TarievenTabel";
import { Reviews } from "@/components/Reviews";
import { CallNowButton } from "@/components/CallNowButton";

export default function Home() {
  return (
    <>
      <HeroSpoed />
      <DienstenGrid />
      <TarievenTabel />
      <Reviews />

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Heeft u direct hulp nodig?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bel nu en wij zijn er binnen 30 minuten!
          </p>
          <CallNowButton />
        </div>
      </section>
    </>
  );
}
