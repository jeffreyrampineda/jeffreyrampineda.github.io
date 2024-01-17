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
      className="container mx-auto px-3 md:px-6 xl:px-32 h-screen"
    >
      <div className="h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          <div className="grow lg:w-1/2 flex flex-col gap-6">
            <h1 className="text-5xl md:text-7xl hover-scale font-bold">
              Jeffrey Ram Pineda
            </h1>
            <div className="flex flex-row gap-4">
              {socialLinks.map((item) => (
                <a key={`icon_${item.name}`} href={item.href}>
                  <Image
                    className="invert-[.5] hover:scale-125 transition-all duration-300"
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
              <h3 className="text-gray-500 hover-scale">Introduction</h3>
              <h2 className="text-3xl md:text-4xl hover-scale">
                Full Stack Developer
              </h2>
            </div>
            <div>
              <h3 className="text-gray-500 hover-scale">
                HTML / CSS / SASS & SCSS / React
              </h3>
              <h3 className="text-gray-500 hover-scale">
                MongoDB / PostgreSQL / MySQL / SQLite
              </h3>
              <h3 className="text-gray-500 hover-scale">
                MEAN & JAMSTACK Experience
              </h3>
            </div>
            <div>
              <p className="hover-scale">
                Experience in designing and developing user interfaces, testing
                & debugging.
              </p>
              <p className="hover-scale">
                Able to work independently and within a team.
              </p>
              <p className="hover-scale">
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
