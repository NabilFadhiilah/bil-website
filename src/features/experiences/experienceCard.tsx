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
  <div className="grid grid-cols-4 gap-2 pb-6">
   <div className="col-start-1 col-end-2">
    <h3 className="font-bold">{props.title}</h3>
    <p className="text-md text-zinc-500">{props.company}</p>
    <p className="text-md text-zinc-500">{props.location}</p>
    <p className="text-md text-zinc-500">{props.date}</p>
   </div>
   <div className="col-start-2 col-end-5">
    <ul className="list-disc ml-4">
     {props.responsibilities.map((resp, index) => (
       <li key={index}>{resp.item}</li>
     ))}
    </ul>
   </div>
  </div>
 )
}