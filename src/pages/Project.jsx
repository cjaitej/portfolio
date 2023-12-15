import ProjectCard from "../components/projectCard";
import project_data from "../information/projectsInfo";

export default function Project() {
  return (
    <section id="project" className="flex flex-col justify-center px-44 py-10">
      <h1 className="text-3xl font-bold text-center text-white pb-10 tittle">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-3">
        {project_data.map((item) => (
          <ProjectCard
            tittle={item[0]}
            image={item[1]}
            info={item[2]}
            link={item[3]}
          />
        ))}
      </div>
    </section>
  );
}
