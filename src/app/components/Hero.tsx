import Image from "next/image";

const socialLinks = [
  {
    name: "instagram",
    href: "https://www.instagram.com/jeffreyrampineda/",
  },
  {
    name: "stackoverflow",
    href: "https://stackoverflow.com/users/8550657/jeffrey-ram/",
  },
  {
    name: "github",
    href: "https://github.com/jeffreyrampineda/",
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/jeffreyrampineda/",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="container mx-auto px-3 md:px-6 xl:px-32 mt-[2rem] lg:mt-0 h-screen"
    >
      <div className="h-full lg:mt-[32vh]">
        <div className="flex flex-col lg:flex-row items-start gap-y-8">
          <div className="grow lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-6xl xl:text-7xl">Jeffrey Ram Pineda</h1>
            <div className="flex flex-row gap-4">
              {socialLinks.map((item) => (
                <a key={`icon_${item.name}`} href={item.href}>
                  <Image
                    className="dark:invert"
                    src={`/assets/social_icons/icon_${item.name}.svg`}
                    alt={`Icon of ${item.name}`}
                    width={24}
                    height={24}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="grow lg:w-1/2 flex flex-col gap-6">
            <div>
              <h3>Introduction</h3>
              <h2 className="text-5xl xl:text-6xl font-thin">
                Full Stack Developer
              </h2>
            </div>
            <div>
              <h3>HTML / CSS / SASS & SCSS / React</h3>
              <h3>MongoDB / PostgreSQL / MySQL / SQLite</h3>
              <h3>MEAN & JAMSTACK Experience</h3>
            </div>
            <div>
              <p>
                Experience in designing and developing user interfaces, testing
                & debugging.
              </p>
              <p>Able to work independently and within a team.</p>
              <p>
                Creating clean, testable, maintainable and functional code is
                the highest priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
