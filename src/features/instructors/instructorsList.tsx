import { useFetchInstructor } from "../../hooks/useFetchInstructor"

export const InstructorList = () => {
 const instructors = useFetchInstructor()

 return (
  <div className="border-t-2 border-zinc-500 mt-4">
   <h3 className="font-bold py-4">Instructor</h3>
   <ul className="list-disc mx-4">
   {instructors?.map((item)=>{
    return (
     <li>{item.name}</li>
    )
   })}
   </ul>
  </div>
 )
}