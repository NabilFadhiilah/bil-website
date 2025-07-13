import { useFetchCertification } from "../../hooks/useFetchCertification"

export const CertificationList = () => {
 const { certification, isLoading, error } = useFetchCertification()
 if (isLoading) return <p>Loading...</p>;
 if (error) return <p>{error}</p>;
 
 return (
  <div className="border-t-2 border-zinc-500 pt-4">
   <h3 className="font-bold pb-4">Certification</h3>
   <ul className="list-disc mx-4">
   {certification?.map((cert,idx)=>{
    return (
     <li key={idx}>{cert.name}</li>
    )
   })}
   </ul>
  </div>
 )
}