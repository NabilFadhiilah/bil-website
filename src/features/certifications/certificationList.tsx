import { useFetchCertification } from "../../hooks/useFetchCertification"

export const CertificationList = () => {
 const certifications = useFetchCertification()
 console.log(certifications)
 return (
  <div className="col-start-3 col-end-6 gap-4 border-t-2 border-zinc-500 pt-4 mb-4">
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