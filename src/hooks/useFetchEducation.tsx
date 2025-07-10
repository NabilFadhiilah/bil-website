import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type EducationResponse = {
  institution: string,
  faculty: string,
  degree: string,
  date: string,
  gpa: string,
}

export const useFetchEducation = () => {
  const [education, setEducation] = useState<EducationResponse[]>();

  const fetchEducation = async () => {
    const response = await axiosInstance.get<EducationResponse[]>("/educations");
    setEducation(response.data);
  }

  useEffect(() => {
    fetchEducation()
  }, [])

  return education
}