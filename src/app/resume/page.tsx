import Skills from '@/components/Skills';
import { backendSkills, frontendSkills, otherSkills } from '@/utils/skills';
const atmosphere = 'from-green-300 via-blue-500 to-purple-600 font-sans';

const gradientAtmosphere = 'bg-gradient-to-br ' + atmosphere;

export default function ResumePage() {
  return (
    <section>
      <div className="pb-32">
        <div className="flex justify-between gap-x-2 sm:gap-0 text-transparent">
          <div className={`w-fit md:w-1/2 lg:w-1/2  pb-4 bg-clip-text ${gradientAtmosphere}`}>
            <h1 className="text-5xl font-mono leading-none pb-4  font-extrabold sm:text-[2rem] lg:text-[3rem] ">
              Resume
            </h1>
          </div>
        </div>
        <ul className="flex flex-col gap-y-16 pt-8">
          <li>
            <Summary />
          </li>
          <li>
            <ProgrammingLanguages />
          </li>
          <li>
            <Proficiencies />
          </li>
          <li>
            <ProfExperience />
          </li>
          <li>
            <Education />
          </li>
        </ul>
      </div>
    </section>
  );
}

const Summary = () => {
  return (
    <>
      <h3
        className={`text-3xl tracking-tight text-transparent bg-clip-text font-mono leading-none pb-4  font-extrabold sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Summary
      </h3>
      <hr />
      <ul className="list-disc pl-6">
        <li>Full Stack Software Engineer</li>
        <li>3 years of professional experience</li>
        <li>Secret Security Clearance</li>
        <li>Worked on teams in collaborative innovative and technical environments</li>
        <li>Specializing in JavaScript Frontend and C++ Backend development</li>
        <li>
          Passionate about creating aesthetically great projects with efficient reusable, and
          readable code
        </li>
      </ul>
    </>
  );
};

const Proficiencies = () => {
  return (
    <>
      <h3
        className={`text-3xl tracking-tight text-transparent bg-clip-text font-mono leading-none pb-4  font-extrabold sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Core Skills Technologies & Proficiencies
      </h3>
      <hr />
      <ul className="list-disc pl-8">
        <li>Web Development</li>
        <span className="pl-4 text-sm md:text-lg">Vercel | Digital Ocean | PlanetScale</span>
        <li>Native App Development</li>
        <span className="pl-4 text-sm md:text-lg">ElectronJS | Qt | Tauri</span>
        <li>Military Networks</li>
        <span className="pl-4 text-sm md:text-lg">Link16 | DIS | VMF</span>
        <li>Modeling and Simulation</li>
        <span className="pl-4 text-sm md:text-lg">
          Agent-based | Discrete Event | Monte Carlo | Distributed
        </span>
      </ul>
    </>
  );
};

const ProgrammingLanguages = () => {
  return (
    <>
      <h3
        className={`text-3xl tracking-tight text-transparent bg-clip-text font-mono leading-none pb-4  font-extrabold sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Programming Languages & Tools
      </h3>
      <div className="flex w-full flex-col sm:flex-row">
        <div className="py-2 pr-2 ">
          <h4 className="text-lg font-bold text-center">Frontend</h4>
          <hr />
          <Skills skills={frontendSkills} className="odd:lg:flex-row-reverse" />
        </div>
        <div className="py-2 px-2 ">
          <h4 className="text-lg font-bold text-center">Backend</h4>
          <hr />
          <Skills skills={backendSkills} className="odd:lg:flex-row-reverse" />
        </div>
        <div className="py-2 pl-2 ">
          <h4 className="text-lg font-bold text-center">Other</h4>
          <hr />
          <Skills skills={otherSkills} className="odd:lg:flex-row-reverse" />
        </div>
      </div>
    </>
  );
};

const ProfExperience = () => {
  return (
    <>
      <h3
        className={`text-3xl tracking-tight text-transparent bg-clip-text font-mono leading-none pb-4  font-extrabold sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Professional Experience
      </h3>
      <hr />
      <div className="flex flex-col gap-y-6 justify-between">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Software Engineer</strong>
            </p>
            <p>March 2021 - Present</p>
          </div>
          <div className="flex justify-between flex-col sm:text-right">
            <p>Trideum</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Computer Engineering Intern</strong>
            </p>
            <p>May 2017 - August 2017</p>
          </div>
          <div className="flex justify-between flex-col sm:text-right">
            <p>a.i. Solutions</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Education = () => {
  return (
    <>
      <h3
        className={`text-3xl tracking-tight text-transparent bg-clip-text font-mono leading-none pb-4  font-extrabold sm:text-[2rem] ${gradientAtmosphere}`}
      >
        Education
      </h3>
      <hr />{' '}
      <div className="flex flex-col gap-y-6 justify-between">
        <div className="flex flex-col  sm:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Masters in Computer Science | 4.0 GPA</strong>
            </p>
            <p>Expected December 2024</p>
          </div>
          <div className="flex justify-between flex-col sm:text-right">
            <p>UAH</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="flex flex-col justify-between">
            <p>
              <strong>Bachelors in Computer Engineering | Deans List</strong>
            </p>
            <p>Achieved December 2020</p>
          </div>
          <div className="flex justify-between flex-col sm:text-right">
            <p>UAH</p>
            <p>Huntsville, AL</p>
          </div>
        </div>
      </div>
    </>
  );
};
