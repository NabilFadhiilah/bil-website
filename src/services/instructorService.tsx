import { axiosInstance } from "../utils/axios";

export type InstructorResponse = {
  name: string,
  year: string,
}

export const fetchInstructor = async () => {
  const response = await axiosInstance.get<InstructorResponse[]>("/instructors");
  return response.data
}