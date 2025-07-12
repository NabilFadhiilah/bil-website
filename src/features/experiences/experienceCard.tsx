type Responsibilities = {
 item:string
}

type ExperienceCardProps = {
 title:string;
 company:string;
 location:string;
 date:string;
 responsibilities:Responsibilities[];
}


export const ExperienceCard = (props: ExperienceCardProps) => {
 return (
  <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-2 pb-6">
   <div className="lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-1">
    <h3 className="font-bold">{props.title}</h3>
    <p className="text-md text-zinc-500">{props.company}</p>
    <p className="text-md text-zinc-500">{props.location}</p>
    <p className="text-md text-zinc-500">{props.date}</p>
   </div>
   <div className="lg:col-start-2 lg:col-end-6 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-1">
    <ul className="list-disc ml-4">
     {props.responsibilities.map((resp, index) => (
      <li key={index}>{resp.item}</li>
     ))}
    </ul>
   </div>
  </div>
 )
}