import { useEffect, useState } from "react"
import { fetchProjects, type ProjectsResponse } from "../services/projectService";

export const useFetchProject = () => {
 const [projects,setProject] = useState<ProjectsResponse[]>();
 const [isLoading, setIsLoading] = useState<boolean>(true)
 const [error, setError] = useState<string | null>(null);

 const fetchData = async () => {
   try {
     const data = await fetchProjects();
     setProject(data);
   } catch (err) {
     setError(`Failed to fetch education ${err}`);
   } finally {
     setIsLoading(false);
   }
 }

 useEffect(()=>{
  fetchData()
 },[])

 return {projects,isLoading,error}
}