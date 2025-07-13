import { axiosInstance } from "../utils/axios";

export type EducationResponse = {
  institution: string,
  faculty: string,
  degree: string,
  date: string,
  gpa: string,
}

export const fetchEducation = async () => {
  const response = await axiosInstance.get<EducationResponse[]>("/educations");
  return response.data
}