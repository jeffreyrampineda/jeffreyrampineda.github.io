import ProjectCard from "./ProjectCard";

const projects_list = [
  {
    id: "1",
    title: "Kochii",
    technologies: "Angular / ExpressJS / MongoDB",
    description:
      "Simplify your day to day life by letting Kochii assist you in managing your pantry cabinets and cooking ingredients.",
    link: "https://www.kochii.app/",
    imgSrc: "/assets/project_images/kochii-preview.jpg",
    imgAlt: "Kochii's landing page on a laptop",
  },
  {
    id: "2",
    title: "Habitus",
    technologies: "ReactJS / ExpressJS / PostgreSQL",
    description:
      "Discuss Anywhere. Post your comment anywhere. Bypass censorships!",
    link: "https://habitus.app/",
    imgSrc: "/assets/project_images/habitus-preview.jpg",
    imgAlt: "Habitus being used on google chrome",
  },
  {
    id: "3",
    title: "Takugen",
    technologies: "Python",
    description:
      "Translates keystrokes to the specified language in relation to the English alphabet's phonetics.",
    link: "https://github.com/jeffreyrampineda/takugen",
    imgSrc: "/assets/project_images/takugen-preview.jpg",
    imgAlt: "Roman alphabet translated to hiragana with Takugen",
  },
];

export default function Projects() {
  return (
    <section className="container mx-auto px-3 md:px-6 xl:px-32 text-primary font-extralight">
      <h2 className="text-3xl md:text-5xl mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects_list.map((project) => (
          <ProjectCard
            key={project.id.toString()}
            title={project.title}
            technologies={project.technologies}
            description={project.description}
            link={project.link}
            imgSrc={project.imgSrc}
            imgAlt={project.imgAlt}
          />
        ))}
      </div>
    </section>
  );
}
