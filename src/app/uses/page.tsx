import Link from 'next/link';
export default function UsesPage() {
  const minnesota = 'from-purple-400 to-yellow-400';
  const gradient = 'bg-gradient-to-br ' + minnesota;

  return (
    <section className="w-full min-w-4xl">
      <div className="pb-32">
        <div className="flex justify-between text-transparent ">
          <div className={`w-fit bg-clip-text  ${gradient} `}>
            <h1 className="text-5xl font-mono leading-none  font-extrabold sm:text-[2rem] lg:text-[3rem] ">
              What I Use
            </h1>
          </div>
        </div>
        <h3 id="about-description" className="py-4 text-xl pb-16 pt-8">
          A list of the hardware and software I use regularly or just miscellaneous things that I
          like to nerd out about.
        </h3>
        <div className="w-full">
          <h3 id="computer-office" className="py-4 font-bold text-2xl">
            Computer / Office
          </h3>
          <ul>
            <li>16" Macbook Pro (2023)</li>
            <li>Custom Built PC</li>
          </ul>
          <h3 id="computer-office" className="py-4 font-bold text-2xl">
            Custom Built PC
          </h3>
          <ul>
            <li>CPU: intel 12900k</li>
            <li>GPU: ASUS RTX 2080</li>
            <li>RAM: Corsair Dominator 32GB DDR5</li>
            <li>Motherboard: ASUS ROG STRIX Z690-E</li>
            <li>Storage: Samsung SSD 980 Pro 2TB</li>
            <li>Mouse: Logitech G703</li>
            <li>Keyboard: ikbc CD87 V2 w/ Cherry MX Brown Switch</li>
            <li>Monitor: ASUS ROG PG279Q</li>
            <li>Monitor: ASUS ProArt 1440p</li>
            <li>Monitor: Some Random 1080p monitor</li>
          </ul>
          <h3 id="coding" className="py-4 font-bold text-2xl">
            Coding
          </h3>
          <ul>
            <li>
              Editor: VSCode (
              <Link
                className="font-bold"
                href="https://gist.github.com/nathanroark/0b6eb8ae2ee0e0251a564247f8285b21"
              >
                Settings / Extensions
              </Link>
              )
            </li>
            <li>Theme: Catppuccin (Mocha)</li>
            <li>Terminal: Hyper / zsh</li>
          </ul>
          <h3 id="audio-video" className="py-4 font-bold text-2xl">
            Audio
          </h3>
          <ul>
            <li>Microphone: MXL V67G</li>
            <li>Headphones: Sennheiser HD 6XX</li>
            <li>IEMs: IKKO OH10s</li>
            <li>Audio Interface: Focusrite Scarlett 2i2 (3rd Gen)</li>
            <li>DAC/AMP: Fi audio hip-dac</li>
          </ul>
          <h3 id="software" className="py-4 font-bold text-2xl">
            Software
          </h3>
          <ul>
            <li>Password Manager: Bitwarden</li>
            <li>Streaming Music Player: Spotify</li>
            <li>macOS Tiling Window Manager: Magnet</li>
            <li>Productivity and Note-taking: Notion</li>
            <li>Whiteboard Tool: Excalidraw</li>
            <li>Social Platform(s): Discord</li>
          </ul>
          <h3 id="software" className="py-4 font-bold text-2xl">
            DX Libraries / Tools I Like
          </h3>
          <ul>
            <li>Zustand</li>
            <li>Zod</li>
            <li>React Query</li>
            <li>Framer Motion</li>
            <li>tRPC</li>
            <li>Prisma</li>
          </ul>
          <h3 id="music" className="py-4 font-bold text-2xl">
            Music
          </h3>
          <ul>
            <li>Digital Audio Workstation: FL Studio</li>
            <li>MIDI Keyboard: Novation FLKey 37</li>
          </ul>
          <h3 id="other-tech" className="py-4 font-bold text-2xl">
            Other Tech
          </h3>
          <ul>
            <li>Apple Airpods Pro</li>
            <li>Apple iPhone</li>
            <li>Apple iPad</li>
            <li>Lacie USB-C External HDD</li>
            <li>Subaru Forester</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
