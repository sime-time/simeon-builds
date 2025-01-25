import PersonalCard from "~/components/PersonalCard";
import PageCard from "~/components/PageCard";

export default function Home() {
  return (
    <main class="flex gap-8 p-16">
      <PersonalCard />
      <PageCard title="About Me"><p>Hewllo</p></PageCard>
    </main>
  );
}
