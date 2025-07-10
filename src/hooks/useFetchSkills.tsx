import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type SkillsResponse = {
  soft_skills: string[],
  technical_skills: string[],
}

export const useFetchSkills = () => {
  const [skills, setSkills] = useState<SkillsResponse | null>(null);

  const fetchSkills = async () => {
    const response = await axiosInstance.get<SkillsResponse>("/skills");
    setSkills(response.data);
  }

  useEffect(() => {
    fetchSkills()
  }, [])

  return skills
}