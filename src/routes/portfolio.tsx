import PersonalCard from "~/components/PersonalCard";
import PageCard from "~/components/PageCard";

export default function Portfolio() {
  return (
    <main class="flex gap-8 p-16">
      <PersonalCard />
      <PageCard title="Portfolio"><p>Here stuff</p></PageCard>
    </main>
  );
}
