type ProjectProps = {
 title:string;
 year:string;
 description:string;
}

export const ProjectCard = (props: ProjectProps) => {
 return (
  <div className="pb-4">
  <h4>{props.title}</h4>
  <p className="text-zinc-400">{props.year}</p>
  <p className="text-zinc-400">{props.description}</p>
  </div>
 )
}