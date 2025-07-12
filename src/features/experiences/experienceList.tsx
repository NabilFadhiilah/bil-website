import { useFetchExperiences } from "../../hooks/useFetchExperiences"
import { ExperienceCard } from "./experienceCard"

export const ExperienceList = () => {
 const experiences = useFetchExperiences()

 return (
  <>
   <div className="lg:col-start-5 lg:col-end-12 md:col-start-4 md:col-end-8 sm:col-start-1 sm:col-end-4 border-t-2 border-zinc-500 pt-4">
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