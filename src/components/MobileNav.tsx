'use client';

import { FiHome, FiLink, FiUser, FiTag, FiFileText, FiZap } from 'react-icons/fi';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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

export default function MobileNavBar() {
  let pathname = usePathname() || '/';

  return (
    <div
      className="min-w-full min-h-full h-full flex overflow-x-scroll border-2
      border-black rounded-lg shadow-xl gap-4 py-2 bg-black/60"
    >
      <LayoutGroup>
        <div className="flex justify-evenly w-full gap-4 px-24 backdrop-blur-sm">
          {NavbarItems.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.slug}
                className="w-full flex justify-center items-center bg-zinc-900  hover:bg-zinc-700 
            border border-zinc-400 rounded duration-300 ease-in-out relative"
              >
                {/* <span className="relative"> */}
                <div className="p-2">
                  <item.icon size="1rem" className="text-zinc-100" />
                </div>{' '}
                {item.slug === pathname ? (
                  <motion.div
                    className="absolute -inset-2 border-2 border-white/30 bg-white/10 rounded-md -z-50"
                    layoutId="topbar"
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
                {/* </span> */}
              </Link>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}
