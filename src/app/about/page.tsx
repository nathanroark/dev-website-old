import { GitHubIcon, ArrowIcon, LinkedInIcon, DiscordIcon } from '@/components/icons';
import Link from 'next/link';
export default function AboutPage() {
  return (
    <section className="pb-32">
      <div className="flex justify-between text-transparent">
        <div className="bg-clip-text bg-gradient-to-br from-blue-300 to-purple-500">
          <h1 className="text-5xl font-mono leading-none pb-4 font-extrabold sm:text-[2rem] lg:text-[3rem]">
            About
          </h1>
        </div>
      </div>

      <p className="my-5">Hey, I'm Nathan</p>
      <div>
        <p className="my-4">
          I'm currently a <b>Software Engineer at</b>{' '}
          <Link href={'https://www.trideum.com/'} className="font-bold text-blue-400">
            Trideum
          </Link>
          , where I build tools for engineers, assist with the design and creation of{' '}
          <b>Modeling and Simulation</b> software for testing future military technology, and own
          the frontend of many of our applications.
        </p>
        <hr />
        <p className="my-4">
          I'm passionate about my health, fitness, food, music, science, and of course, coding. I
          frequently gain and drop hobbies, but I always come back to these.
        </p>
        <p className="my-4">
          I enjoy hiking, camping, and being outdoors. I was in boyscouts for my entire childhood,
          and I'm an Eagle Scout. I still enjoy being outdoors and hiking when I can. Currently I
          have climbed 4 of the 14ers in Colorado, and I plan to climb more in the future.
        </p>
        <p className="my-4">
          I love going to the gym and exercising. I am currently doing a 6 day Push-Pull-Legs split
          with a focus on body recomposition.
        </p>
        <p className="my-4">
          I love cooking and trying new foods, it is one of my favorite ways to spend time with my
          partner. We love to try new recipes and find good restaurants in any city we are in.
        </p>
        <p className="my-4">
          I've always been passionate about music and recently have started making my own. I like
          many genres of music, you can see more of what music I enjoy from{' '}
          <Link href={'https://music.nathanroark.dev'} className="font-bold text-purple-400">
            Music Blog
          </Link>{' '}
          where I post and write my thoughts about my favorite albums.
        </p>
        <p className="mb-8">
          Keeping up with scientific research is always something I try to do. I enjoy seeing the
          progress that it happening in the world.
        </p>
      </div>
    </section>
  );
}
