'use client';
import { FiHome, FiLink, FiUser, FiFileText, FiTag, FiZap } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { LayoutGroup, motion } from 'framer-motion';
const NavbarItems = [
  {
    name: 'Home',
    slug: '/',
    icon: FiHome,
  },
  {
    name: 'About',
    slug: '/about',
    icon: FiUser,
  },
  {
    name: 'Projects',
    slug: '/projects',
    icon: FiZap,
  },
  {
    name: 'Resume',
    slug: '/resume',
    icon: FiFileText,
  },
  {
    name: 'Links',
    slug: '/links',
    icon: FiLink,
  },
  {
    name: 'Uses',
    slug: '/uses',
    icon: FiTag,
  },
];

export default function NavBar() {
  let pathname = usePathname() || '/';

  // const tooltipMap = new Map();
  // NavbarItems.map((item) => {
  //   tooltipMap.set(item.name, false);
  // });
  // tooltipMap.set('Home', false);
  // tooltipMap.set('About', false);
  // tooltipMap.set('Projects', false);
  // tooltipMap.set('Resume', false);
  // tooltipMap.set('Uses', false);

  // const [tooltipVisibility, setTooltipVisibility] = useState<Record<string, boolean>>(() => {
  //   return NavbarItems.map((item) => {
  //     item.name, false;
  //   });
  // });
  const [tooltipVisibility, setTooltipVisibility] = useState<Record<string, boolean>>({
    Home: false,
    About: false,
    Now: false,
    Links: false,
    Guestbook: false,
    Spotify: false,
    Dashboard: false,
  });
  // const [tooltipVisibility, setTooltipVisibility] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  return (
    <div className="w-full min-h-full h-full flex flex-col justify-start items-center pt-6">
      <LayoutGroup>
        <nav className="flex flex-col gap-4">
          {NavbarItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.slug}
                className="w-full flex justify-center items-center bg-zinc-900  hover:bg-zinc-800 
                border border-zinc-400 rounded duration-300 ease-in-out relative"
                onMouseLeave={() =>
                  setTooltipVisibility((state) => {
                    return {
                      ...state,
                      [item.name]: false,
                    };
                  })
                }
                onMouseEnter={() =>
                  setTooltipVisibility((state) => {
                    return {
                      ...state,
                      [item.name]: true,
                    };
                  })
                }
              >
                <span className="relative">
                  <div className="p-2">
                    <item.icon size="1rem" className="text-zinc-100" />
                  </div>{' '}
                  {item.slug === pathname ? (
                    <motion.div
                      className="absolute -inset-2 border border-white/30 bg-white/10 rounded-md -z-50"
                      layoutId="sidebar"
                      transition={{
                        type: 'spring',
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  ) : null}
                </span>
                {tooltipVisibility[item.name] && (
                  <span
                    className="absolute text-[0.75rem] leading-none left-10 p-[0.62rem] 
                  rounded shadow-xl text-zinc-200 bg-zinc-800 "
                  >
                    {item.name}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </LayoutGroup>
      <div className="border-r-2 border-zinc-700 h-full mt-4"></div>
      {/* <div className={styles.gradientBar} /> */}
    </div>
  );
}
