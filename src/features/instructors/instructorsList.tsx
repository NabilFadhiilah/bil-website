import { useFetchInstructor } from "../../hooks/useFetchInstructor"

export const InstructorList = () => {
 const {instructors, isLoading, error} = useFetchInstructor()
 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>{error}</p>;

 return (
  <div className="border-t-2 border-zinc-500 mt-4">
   <h3 className="font-bold py-4">Instructor</h3>
   <ul className="list-disc mx-4">
   {instructors?.map((item,idx)=>{
    return (
     <li key={idx}>{item.name}</li>
    )
   })}
   </ul>
  </div>
 )
}