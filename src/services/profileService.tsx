import { axiosInstance } from "../utils/axios";

export type ProfileResponse = {
  contact: object,
  summary: string
}

export const fetchProfile = async () => {
  const response = await axiosInstance.get<ProfileResponse[]>("/basic_info");
  return response.data
}