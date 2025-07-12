import { ProjectList } from "../../features/projects/projectList"
import { InstructorList } from "../../features/instructors/instructorsList"
import { CertificationList } from "../../features/certifications/certificationList"

export const Wrapper = () => {
 return(
  <div className="
   lg:col-start-5 
   lg:col-end-12
   lg:pt-4 
   md:col-start-4 
   md:col-end-8 
   md:pt-2 
   sm:col-start-1 
   sm:col-end-4 
   gap-2">
   <div className="
    grid
    lg:grid-cols-4
    lg:pb-6
    md:grid-cols-1 
    md:pb-2 
    sm:grid-cols-1 
    gap-2">
    <ProjectList/>
    <div className="lg:col-start-3 lg:col-end-5 md:col-start-1 md:col-end-2 sm:col-start-1 sm:col-end-">
     <CertificationList/>
     <InstructorList/>
    </div>
   </div>
  </div>
 )
}