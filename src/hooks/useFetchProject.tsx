import { useEffect, useState } from "react"
import { axiosInstance } from "../utils/axios";

type ProjectsResponse = {
 title: string,
 year: string,
 description: string,
}

export const useFetchProject = () => {
 const [project,setProject] = useState<ProjectsResponse[]>();

 const fetchProjects = async () => {
  const response = await axiosInstance.get<ProjectsResponse[]>("/projects");
  setProject(response.data);
 }

 useEffect(()=>{
  fetchProjects()
 },[])

 return project
}