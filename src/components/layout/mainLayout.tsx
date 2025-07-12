import { ProfileSummary } from "../../features/profile/profileSummary"
import { ExperienceList } from "../../features/experiences/experienceList"
import { SkillList } from "../../features/skills/skillList"
import { EducationList } from "../../features/education/educationList"
import { Wrapper } from "./wrapper"


export const MainLayout = () => {
 return (
  <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-4 p-4">
   <ProfileSummary/>
   <ExperienceList/>
   <SkillList/>
   <EducationList/>
   <Wrapper/>
  </div>
 )
}