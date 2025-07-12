import { useFetchCertification } from "../../hooks/useFetchCertification"

export const CertificationList = () => {
 const certifications = useFetchCertification()
 return (
  <div className="border-t-2 border-zinc-500 pt-4">
   <h3 className="font-bold pb-4">Certification</h3>
   <ul className="list-disc mx-4">
   {certifications?.map((item)=>{
    return (
     <li>{item.name}</li>
    )
   })}
   </ul>
  </div>
 )
}