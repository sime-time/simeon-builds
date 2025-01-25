import { ParentProps } from "solid-js";
import PersonalCard from "~/components/PersonalCard";

export default function RootLayout(props: ParentProps) {
  return (
    <main class="flex gap-8 p-16">
      <PersonalCard />
      {props.children}
    </main>
  );
}
