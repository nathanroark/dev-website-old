import { GitHubIcon, ArrowIcon, LinkedInIcon, DiscordIcon } from '@/components/icons';
import Link from 'next/link';
export default function AboutPage() {
  return (
    <section className="pb-64">
      <div className="flex justify-between text-transparent">
        <div className="bg-clip-text bg-gradient-to-br from-blue-300 to-purple-500">
          <h1 className="text-5xl font-mono leading-none pb-4 font-extrabold sm:text-[2rem] lg:text-[3rem]">
            Links
          </h1>
        </div>
      </div>
      <h3 id="about-description" className="py-4 text-xl pb-16 pt-8">
        Links to places you can find me on the internet.
      </h3>
      <div className="flex flex-col gap-2 md:flex-row md:gap-2 pt-16">
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/nathan-roark/"
          className="flex w-full border border-sky-500 rounded-lg p-4 no-underline items-center text-sky-200 
            hover:shadow-lg hover:shadow-sky-500 transition-all justify-between"
        >
          <div className="flex items-center">
            <LinkedInIcon />
            <div className="ml-3">LinkedIn</div>
          </div>
          <ArrowIcon />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/nathanroark"
          className="flex w-full border border-emerald-500 rounded-lg p-4 no-underline items-center text-emerald-200 
           hover:shadow-lg hover:shadow-emerald-500  transition-all justify-between"
        >
          <div className="flex items-center">
            <GitHubIcon />
            <div className="ml-3">GitHub</div>
          </div>
          <ArrowIcon />
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://discordapp.com/users/nroark"
          className="flex w-full border border-indigo-500 rounded-lg p-4 no-underline items-center text-indigo-200 
           hover:shadow-lg hover:shadow-indigo-500  transition-all justify-between"
        >
          <div className="flex items-center">
            <DiscordIcon />
            <div className="ml-3">Discord</div>
          </div>
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
