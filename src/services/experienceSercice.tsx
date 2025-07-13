import { axiosInstance } from "../utils/axios";

export type ExperienceResponse = {
  title: string,
  company: string,
  location: string,
  date: string,
  responsibilities: object,
}

export const fetchExperience = async () => {
  const response = await axiosInstance.get<ExperienceResponse[]>("/experiences");
  return response.data
}