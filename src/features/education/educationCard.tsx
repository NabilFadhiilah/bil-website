type EducationProps = {
  institution: string;
  faculty: string;
  degree: string;
  date: string;
  gpa: string;
}

export const EducationCard = (props: EducationProps) => {
 return (
  <div className="grid grid-cols-4 gap-2 pb-6">
   <div className="col-start-1 col-end-3">
    <h3 className="font-bold">{props.institution}</h3>
   </div>
   <div className="col-start-3 col-end-6">
    <h3 className="font-bold">{props.faculty}</h3>
    <div className="text-md text-zinc-500 mt-2">
     <p>{props.degree}</p>
     <p>{props.date}</p>
     <p>{props.gpa}</p>
    </div>
   </div>
  </div>
 )
}