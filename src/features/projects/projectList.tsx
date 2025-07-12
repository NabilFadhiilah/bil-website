import { useFetchProject } from "../../hooks/useFetchProject"
import { ProjectCard } from "./projectCard"

export const ProjectList = () => {
 const projects = useFetchProject()

 return (
  <div className="
   lg:col-start-1 
   lg:col-end-3 
   md:col-start-1 
   border-t-2 
   border-zinc-500 pt-4"
  >
   <h3 className="font-bold pb-4">Project</h3>
   {projects?.map((project)=>{
    return <ProjectCard
     title={project.title}
     year={project.year}
     description={project.description}
    />
   })}
  </div>
 )
}