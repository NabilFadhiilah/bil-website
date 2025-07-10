import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type ExperienceResponse = {
  title: string,
  company: string,
  location: string,
  date: string,
  responsibilities: object,
}

export const useFetchExperiences = () => {
  const [Experience, setExperience] = useState<ExperienceResponse[]>();

  const fetchExperience = async () => {
    const response = await axiosInstance.get<ExperienceResponse[]>("/experiences");
    setExperience(response.data);
  }

  useEffect(() => {
    fetchExperience()
  }, [])

  return Experience
}