import Image from "next/image";

interface ProjectDetails {
  title: string;
  technologies: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
}

export default function ProjectCard(details: ProjectDetails) {
  return (
    <div className="hover-scale">
      <Image
        className="shadow-lg mb-4"
        src={details.imgSrc}
        alt={details.imgAlt}
        width={500}
        height={500}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-2xl md:text-3xl">{details.title}</h4>
        <p className="text-gray-500">{details.technologies}</p>
        <p className="text-lg">{details.description}</p>
      </div>
    </div>
  );
}

/*

<div
  class="shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center text-center items-center mx-auto content-div "
  style='background-image: url("/static/media/commonground.60002856ca4cdcf642c5.png");'
>
  <div class="opacity-0 group-hover:opacity-100 ">
    <span class="text-2xl font bold text-white tracking-wider ">
      Common Ground Chat
    </span>
    <div class="pt-8 text-center ">
      <a href="https://github.com/gjjrpin/common-ground" target="_blank">
        <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
          Code
        </button>
      </a>
      <a href="https://commonground.chat/" target="_blank">
        <button class="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
          Live
        </button>
      </a>
    </div>
  </div>
</div>;

*/
