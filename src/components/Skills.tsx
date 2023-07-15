'use client'; // iconify is client side only :(

import { Icon } from '@iconify/react';
export type SoftwareSkillType = { name: string; icon: string };

const Skills = ({
  skills,
  className = '',
}: {
  skills: SoftwareSkillType[];
  className?: string;
}) => {
  return (
    <div className="space-y-14">
      <div className="flex gap-2 justify-center flex-wrap">
        {skills.map(({ name, icon }) => (
          <div
            key={name + '_skill_icon'}
            className={`text-2xl relative bg-bg-secondary shadow-xl rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group bg-bg-secondary`}
          >
            <Icon icon={icon} width="48" height="48" />
            <div
              className="opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible 
          absolute -top-8 rounded capitalize bg-slate-700/90 text-slate-100 py-1 px-2 text-sm duration-200"
            >
              {name}
              <svg
                className="absolute text-slate-700/90 h-2 w-full left-0 top-full"
                x="0px"
                y="0px"
                viewBox="0 0 255 255"
                xmlSpace="preserve"
              >
                <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
