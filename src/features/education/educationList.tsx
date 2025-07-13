import { useFetchEducation } from "../../hooks/useFetchEducation"
import { EducationCard } from "./educationCard"

export const EducationList = () => {
 const { educations, isLoading, error } = useFetchEducation()
 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>{error}</p>;

 return (
  <div className="lg:col-start-5 lg:col-end-12 md:col-start-4 md:col-end-8 sm:col-start-1 sm:col-end-4 border-t-2 border-zinc-500 pt-4">
   <h3 className="font-bold pb-4">Education</h3>
   {educations?.map((education,idx)=>{
    return (
    <EducationCard
     key={idx}
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