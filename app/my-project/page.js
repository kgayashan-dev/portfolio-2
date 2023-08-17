import { projects } from "@/data/data";
import ProjectCard from "./project-card";

const Myprojects = () => {
  return (
 <div className="w-full h-screen bg-black">
     <section className="flex flex-col w-11/12  content-center m-auto py-10 mb-20 ">
      <h2 className="text-2xl font-bold mb-4 text-white  uppercase">My Project</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-6">
        {projects.map((project, key) => {
          return (
            <ProjectCard
              key={key}
              title={project.title}
              img={project.image}
              body1={project.body1}
              body2={project.body2}
              link={project.link}
              links={project.links}
              text={project.links.text}
            />
          );
        })}
      </div>
    </section>
 </div>
  );
};
export default Myprojects;
