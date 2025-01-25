import PersonalCard from "~/components/PersonalCard";
import PageCard from "~/components/PageCard";

export default function Resume() {
  return (
    <main class="flex gap-8 p-16">
      <PersonalCard />
      <PageCard title="Resume"><p>Experience</p></PageCard>
    </main>
  );
}
