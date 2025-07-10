import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type ProfileResponse = {
  contact: object,
  summary: string
}

export const useFetchProfile = () => {
  const [profile, setProfile] = useState<ProfileResponse[]>();

  const fetchProfile = async () => {
    const response = await axiosInstance.get<ProfileResponse[]>("/basic_info");
    setProfile(response.data);
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return {fetchProfile,profile}
}