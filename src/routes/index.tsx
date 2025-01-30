import RootLayout from "~/layouts/RootLayout";
import PageCard from "~/components/PageCard";

export default function Home() {
  return (
    <RootLayout>
      <PageCard title="About Me">
        <h2>What I Do</h2>
        <h2>Skills</h2>
      </PageCard>
    </RootLayout>
  );
}
