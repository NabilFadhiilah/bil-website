import { axiosInstance } from "../utils/axios";

export type ProjectsResponse = {
 title: string,
 year: string,
 description: string,
}

export const fetchProjects = async () => {
  const response = await axiosInstance.get<ProjectsResponse[]>("/projects");
  return response.data
 }