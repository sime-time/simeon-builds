import { useLocation, A } from "@solidjs/router";

export default function Nav() {
  const location = useLocation();
  const active = (path: string) =>
    path == location.pathname ? "border-yellow-300" : "border-transparent hover:border-yellow-300";

  return (
    <nav>
      <ul class="container flex items-center p-3">
        <li class={`border-b-2 ${active("/")} mx-1.5 sm:mx-6`}>
          <A href="/">About</A>
        </li>
        <li class={`border-b-2 ${active("/resume")} mx-1.5 sm:mx-6`}>
          <A href="/resume">Resume</A>
        </li>
        <li class={`border-b-2 ${active("/portfolio")} mx-1.5 sm:mx-6`}>
          <A href="/portfolio">Portfolio</A>
        </li>
        <li class={`border-b-2 ${active("/contact")} mx-1.5 sm:mx-6`}>
          <A href="/contact">Contact</A>
        </li>
      </ul>
    </nav>
  );
}
