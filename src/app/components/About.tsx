import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-3 md:px-6 xl:px-32">
      <h2 className="text-3xl md:text-5xl font-extralight mb-8">About Me</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <p className="text-lg font-extralight mb-4">Hey! What&apos;s up?</p>
          <p className="text-lg font-extralight mb-4">
            I&apos;m Jeffrey, a Toronto-based Full-Stack Developer with a strong
            passion for innovative and creative ideas. Heavily interested in
            data-centric applications to which machine learning technologies can
            be applied to.
          </p>
          <p className="text-lg font-extralight mb-4">
            My approach as a front-end developer emphasizes attention to detail
            and user-centered design, utilizing evidence to guide decisions and
            improve usability.
          </p>
          <p className="text-lg font-extralight mb-4">
            Similarly, my methods of back-end development involve commonly used
            design patterns to structure databases, servers, and APIs to ensure
            that the client-side can function seamlessly while maintaining
            flexibility— adapting to current and future needs.
          </p>
        </div>
        <div className="md:w-1/4 flex items-center">
          <Image
            className="shadow-2xl hover-scale"
            src="/assets/profile-picture.jpg"
            alt="A profile picture of Jeffrey Ram Pineda"
            width={288}
            height={288}
          />
        </div>
      </div>
    </section>
  );
}
