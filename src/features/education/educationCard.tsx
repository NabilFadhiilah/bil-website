type EducationProps = {
  institution: string;
  faculty: string;
  degree: string;
  date: string;
  gpa: string;
}

export const EducationCard = (props: EducationProps) => {
 return (
  <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-2 lg:pb-6 md:pb-2">
   <div className="lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-1">
    <h3 className="font-bold">{props.institution}</h3>
   </div>
   <div className="lg:col-start-3 lg:col-end-6 md:col-start-1 md:col-end-4 sm:col-start-1 sm:col-end-1">
    <h3 className="font-bold ">{props.faculty}</h3>
    <div className="text-md text-zinc-500 lg:mt-2">
     <p>{props.degree}</p>
     <p>{props.date}</p>
     <p>{props.gpa}</p>
    </div>
   </div>
  </div>
 )
}