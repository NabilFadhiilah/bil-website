import { useFetchEducation } from "../../hooks/useFetchEducation"
import { EducationCard } from "./educationCard"

export const EducationList = () => {
 const educations = useFetchEducation()

 return (
  <div className="col-start-5 col-end-12 border-t-2 border-zinc-500 pt-4">
   <h3 className="font-bold pb-4">Education</h3>
   {educations?.map((education)=>{
    return (
    <EducationCard
     institution={education.institution}
     faculty={education.faculty}
     degree={education.degree}
     date={education.date}
     gpa={education.gpa}
    />
   )
   })}
  </div>
 )
}