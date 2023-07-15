import ProjectCard from '@/components/ProjectCard';

const projectsData = [
  {
    name: 'Music Blog',
    description: 'Static Music Blog for showing and talking about albums that I like.',
    techStack: ['NextJS', 'TailwindCSS', 'TypeScript', 'Markdown'],
    link: 'https://music.nathanroark.dev',
    repo: 'https://github.com/nathanroark/music-website',
  },
  {
    name: 'Pokedex',
    description: 'Pokedex App using the T3 stack.',
    techStack: ['NextJS', 'tRPC', 'Prisma', 'TailwindCSS', 'TypeScript'],
    link: 'https://pokedex.nathanroark.dev',
    repo: 'https://github.com/nathanroark/pokedex',
  },
  {
    name: 'Advent of Code Test Suite',
    description: 'My Advent of Code Challenges in TypeScript.',
    techStack: ['React', 'Jotai', 'NextJS', 'TypeScript', 'TailwindCSS'],
    link: 'https://advent-of-code.nathanroark.dev/',
    repo: 'https://github.com/nathanroark/advent-of-code-next',
  },
  {
    name: 'Modeling & Simulation',
    description: 'A collection of my Modeling and Simulation projects.',
    techStack: ['React', 'NextJS', 'TypeScript', 'TailwindCSS'],
    link: 'https://modeling-and-simulation.nathanroark.dev/',
    repo: 'https://github.com/nathanroark/modeling-and-simulation',
  },
  {
    name: 'Dev Website & Portfolio',
    description: 'This website! My dev website to show my software engineering self.',
    techStack: ['NextJS', 'TypeScript', 'TailwindCSS'],
    link: 'https://nathanroark.dev',
    repo: 'https://github.com/nathanroark/dev-website',
  },
];

export default function ProjectsPage() {
  return (
    <section className="text-gray-300 pb-96 lg:px-24 xl:px-0   ">
      <div className="flex justify-between text-transparent pb-8">
        <div className=" bg-clip-text  bg-gradient-to-br from-purple-400 via-pink-300 to-yellow-500">
          <h1 className="text-5xl font-mono leading-none pb-4  font-extrabold sm:text-[2rem] lg:text-[3rem] fon">
            Projects
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3  gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name + '-card'}
            name={project.name}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
}
