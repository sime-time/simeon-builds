import { ParentProps } from "solid-js";
import PersonalCard from "~/components/PersonalCard";

export default function RootLayout(props: ParentProps) {
  return (
    <main class="flex flex-col md:flex-row gap-8 p-6 md:p-16 ">
      <PersonalCard />
      {props.children}
    </main>
  );
}
