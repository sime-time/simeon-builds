import { JSX } from 'solid-js';

interface PersonalLinkProps {
  title: string;
  name: string;
  href?: string;
  icon: JSX.Element;
}

export default function PersonalLink(props: PersonalLinkProps) {
  return (
    <div class="flex items-center gap-4  hover:text-yellow-300 transition-all">
      <a href={props.href} target="_blank" class="border border-slate-100/20 rounded-xl p-3">
        {props.icon}
      </a>
      <div class="flex flex-col text-sm">
        <h3 class="uppercase text-xs text-white opacity-60">{props.title}</h3>
        <a href={props.href} target="_blank">{props.name}</a>
      </div>
    </div>
  );
}
