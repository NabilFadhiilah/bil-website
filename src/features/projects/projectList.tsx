import { useFetchProject } from "../../hooks/useFetchProject"
import { ProjectCard } from "./projectCard"

export const ProjectList = () => {
 const projects = useFetchProject()

 return (
  <div className="col-start-1 col-end-3 border-t-2 border-zinc-500 pt-4">
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