import RootLayout from "~/layouts/RootLayout";
import PageCard from "~/components/PageCard";

export default function Home() {
  return (
    <RootLayout>
      <PageCard title="About Me"><p>Hewllo</p></PageCard>
    </RootLayout>
  );
}
