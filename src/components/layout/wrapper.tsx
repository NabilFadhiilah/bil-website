import { ProjectList } from "../../features/projects/projectList"
import { InstructorList } from "../../features/instructors/instructorsList"
import { CertificationList } from "../../features/certifications/certificationList"

export const Wrapper = () => {
 return(
  <div className="col-start-5 col-end-12 grid grid-cols-4 gap-4">
   <div className="col-start-1 col-end-3">
    <ProjectList/>
   </div>
   <div className="col-start-3 col-end-6">
    <CertificationList/>
    <InstructorList/>
   </div>
  </div>
 )
}