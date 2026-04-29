import FuzzyText from "@/components/FuzzyText";

export default function F26RushPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-24 text-center">
      <div className="flex justify-center">
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover>
          F26 Rush
        </FuzzyText>
      </div>
      <p className="mt-24 text-2xl md:text-3xl text-white/50">
        <em>loading...</em>
      </p>
    </main>
  );
}
