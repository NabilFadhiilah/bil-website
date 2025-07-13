import { axiosInstance } from "../utils/axios";

export type SkillsResponse = {
  soft_skills: string[],
  technical_skills: string[],
}

export const fetchSkills = async () => {
  const response = await axiosInstance.get<SkillsResponse>("/skills");
  return response.data
}