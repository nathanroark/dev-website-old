import LinkCard from '@/components/LinkCard';
export default function Home() {
  const fire = 'from-amber-500 via-red-500 to-yellow-500';
  const atmosphere = 'from-green-300 via-blue-500 to-purple-600';
  const gradientFire = 'bg-gradient-to-br ' + fire;
  const gradientAtmosphere = 'bg-gradient-to-br ' + atmosphere;
  return (
    <section className="h-full flex flex-col justify-evenly">
      <div className="flex justify-between gap-x-6 sm:gap-x-0 text-transparent">
        <div className={`w-fit sm:w-1/3  md:w-1/2 lg:w-1/2  pb-4 bg-clip-text ${gradientFire}`}>
          <h1
            className={` text-5xl font-san text-left leading-none font-extrabold sm:text-[4rem] lg:text-[5rem] xl:text-[6rem]`}
          >
            Nathan Roark
          </h1>
        </div>
        <div className={`w-fit sm:w-1/3 lg:w-1/3 bg-clip-text pb-4 ${gradientAtmosphere} `}>
          <h2
            className={`text-3xl font-sans text-right  leading-none font-extrabold sm:text-[3rem] lg:text-[3rem] xl:text-[4rem]`}
          >
            Full Stack Software Engineer
          </h2>
        </div>
      </div>
      <div className="pt-16">
        <div>
          <p className="my-5  text-neutral-200  text-2xl lg:text-4xl">
            Hey, my name is Nathan. I'm a <b>Software Engineer at Trideum</b> where I build tools
            for engineers and own the frontend of many of our applications.
          </p>
          <p className="my-5  text-neutral-200 text-xl">
            I'm a Full Stack Software Engineer specializing in <b>C++, React and Next.js</b>. I have
            a Undergraduate Degree in Computer Engineering from the The University of Alabama in
            Huntsville. And I'm currently working on my <b>Masters in Computer Science</b> from The
            University of Alabama in Huntsville.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-center pt-16 ">
        <LinkCard
          name="About"
          description="Learn more about me, my skills and my hobbies"
          link="/about"
        />
        <LinkCard
          name="Projects"
          description="All of my projects, open source packages, and apps"
          link="/projects"
        />
        <LinkCard
          name="Resume"
          description="Semi-formal version of my resume in a web format"
          link="/resume"
        />
      </div>
    </section>
  );
}
