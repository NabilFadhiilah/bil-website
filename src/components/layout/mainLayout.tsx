
import { EducationList } from "../../features/education/educationList"
import { ExperienceList } from "../../features/experiences/experienceList"
import { ProfileSummary } from "../../features/profile/profileSummary"
import { SkillList } from "../../features/skills/skillList"
import { Wrapper } from "./wrapper"


export const MainLayout = () => {
 return (
  <div className="p-4 grid grid-cols-12 gap-6">
   <ProfileSummary/>
   <ExperienceList/>
   <SkillList/>
   <EducationList/>
   <Wrapper/>
  </div>
 )
}