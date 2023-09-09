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

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full container mx-auto px-3 py-8 md:px-6 md:py-16 xl:px-32 text-center md:text-left"
    >
      <div className="flex flex-col md:flex-row gap-16">
        <div className="grow md:w-3/6 flex flex-col gap-y-4">
          <a className="flex justify-center md:justify-start" href="/">
            <Image
              src="/assets/logo.png"
              width={42}
              height={42}
              alt="Logo of Jeffrey Ram Pineda"
            />
          </a>
          <p className="max-w-md font-light tracking-wide">
            Although I may not be able to respond immediately, my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <div className="flex flex-row gap-4 justify-center md:justify-start">
            {socialLinks.map((item) => (
              <a key={`icon_${item.name}`} href={item.href}>
                <Image
                  className="invert-[.5]"
                  src={`/assets/social_icons/icon_${item.name}.svg`}
                  alt={`Icon of ${item.name}`}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="grow md:w-1/6 flex flex-col gap-y-4 font-light tracking-wide">
          <h3 className="font-bold">Socials</h3>
          {socialLinks.map((item) => (
            <a className="capitalize" key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="grow md:w-1/6 flex flex-col gap-y-4 font-light tracking-wide">
          <h3 className="font-bold">Contact Me</h3>
          <p>Toronto, Ontario</p>
          <p>
            <a
              className="text-sky-300"
              href="mailto:jeffreyrampineda@gmail.com"
            >
              jeffreyrampineda@gmail.com
            </a>
          </p>
        </div>
      </div>
      <p className="pt-4 font-light tracking-wide">Jeffrey Ram Pineda</p>
    </footer>
  );
}
