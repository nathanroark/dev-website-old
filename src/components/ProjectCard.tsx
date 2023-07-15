import React from 'react';
import styles from '@/styles/projectCard.module.css';
import Link from 'next/link';
import { ArrowIcon, GitHubIcon } from './icons';

const ProjectCard: React.FC<{
  name: string;
  description: string;
  link: string;
  techStack: string[];
  repo?: string;
}> = ({ name, description, link, techStack, repo }) => {
  const createSubtitle = (text: string) => {
    return text.split(' ').map((word, index) => (
      <span
        style={{
          transitionDelay: `${index * 40}ms`,
        }}
        className={styles.cardSubtitleWord}
        key={'subtitleIndex-' + text + '-' + index}
      >
        {word}
      </span>
    ));
  };

  return (
    <Link className="group" href={link} target="_blank">
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <h3 className={styles.cardTitle}>
              {name}
              {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span> */}
            </h3>
            {/* <h3 className={styles.cardTitle}>{name}</h3> */}
            <h4 className={styles.cardSubtitle}>{createSubtitle(description).map((e) => e)}</h4>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.techStack}>
              {techStack.map((tech) => (
                <div key={name + tech} className={styles.techItem}>
                  {tech}
                </div>
              ))}
            </div>
            {repo && (
              <div
                className="group flex justify-evenly items-end group
               rounded-lg text-white p-1"
              >
                <Link
                  className="bg-black p-2 rounded-lg hover:scale-110 duration-200 h-fit w-fit"
                  href={repo}
                  target="_blank"
                >
                  <GitHubIcon size={24} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProjectCard;
