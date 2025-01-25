import PersonalLink from "./PersonalLink";
import { AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { FiMail } from "solid-icons/fi";
import { IoLocationOutline } from 'solid-icons/io';

export default function PersonalCard() {
  return (
    <section class="glass-container px-8 py-12 flex flex-col gap-5">
      <div class="flex items-center justify-center">
        <img src="/images/headshot.png" width="400" height="400" class="size-40 rounded-3xl border border-slate-100/20" />
      </div>
      <div class="flex flex-col gap-3 items-center">
        <h1 class="text-3xl font-semibold">Simeon Dunn</h1>
        <p class="bg-slate-500/40 text-gray-300 text-xs text-center p-1 px-3 rounded-lg w-fit">Full Stack Developer</p>
      </div>
      <div class="flex flex-col gap-4 border-t border-slate-100/20 pt-5">
        <PersonalLink
          title="email"
          name="1simeondunn@gmail.com"
          href="mailto:1simeondunn@gmail.com"
          icon={<FiMail size="24" />}
        />
        <PersonalLink
          title="github"
          name="sime-time"
          href="https://github.com/sime-time"
          icon={<AiFillGithub size="24" />}
        />
        <PersonalLink
          title="linkedin"
          name="Simeon Dunn"
          href="https://www.linkedin.com/in/simeondunn/"
          icon={<AiFillLinkedin size="24" />}
        />
        <PersonalLink
          title="location"
          name="Indianapolis, IN, USA"
          icon={<IoLocationOutline size="24" />}
        />
      </div>
    </section>
  );
}
