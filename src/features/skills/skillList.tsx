import { useFetchSkills } from "../../hooks/useFetchSkills"
import { SkillCard } from "./skillCard"

export const SkillList = () => {
  const {skills,isLoading,error} = useFetchSkills()
  if (isLoading || !skills) return <div>Loading...</div>
  if (error) return <p>{error}</p>;
  
  return (
    <div className="lg:col-start-5 lg:col-end-12 md:col-start-4 md:col-end-8 sm:col-start-1 sm:col-end-4 border-t-2 border-zinc-500 pt-4">
      <h3 className="font-bold lg:pb-2 mb:pb-2 sm:pb-4">Skills</h3>
      <div className="lg:flex md:flex flex-row justify-between">
        <SkillCard title="Soft Skills" items={skills.soft_skills} />
        <SkillCard title="Technical Skills" items={skills.technical_skills} />
      </div>
    </div>
  )
}