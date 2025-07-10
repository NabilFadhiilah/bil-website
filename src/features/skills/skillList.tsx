import { useFetchSkills } from "../../hooks/useFetchSkills"
import { SkillCard } from "./skillCard"

export const SkillList = () => {
  const skills = useFetchSkills()
  if (!skills) return <div>Loading...</div>
  
  return (
    <div className="col-start-5 col-end-12 border-t-2 border-zinc-500 py-4 mb-4">
      <h3 className="font-bold pb-4">Skills</h3>
      <div className="flex flex-row justify-between">
        <SkillCard title="Soft Skills" items={skills.soft_skills} />
        <SkillCard title="Technical Skills" items={skills.technical_skills} />
      </div>
    </div>
  )
}