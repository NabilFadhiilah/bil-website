import { useFetchExperiences } from "../../hooks/useFetchExperiences"
import { ExperienceCard } from "./experienceCard"

export const ExperienceList = () => {
 const experiences = useFetchExperiences()

 return (
  <>
   <div className="col-start-5 col-end-12 border-t-2 border-zinc-500 pt-4">
    <h3 className="font-bold pb-4">Experiences</h3>
    {experiences?.map((experience)=>{
     return (
      <ExperienceCard
       title = {experience.title} 
       company = {experience.company}
       location = {experience.location}
       date = {experience.date}
       responsibilities={
        Object
        .values(experience.responsibilities)
        .map(item => ({ item })
       )}
      />
     )
    })}
   </div>
  </>
 )
}