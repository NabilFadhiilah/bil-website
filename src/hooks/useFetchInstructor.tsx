import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type InstructorResponse = {
  name: string,
  year: string,
}

export const useFetchInstructor = () => {
  const [instructor, setInstructor] = useState<InstructorResponse[]>();

  const fetchInstructor = async () => {
    const response = await axiosInstance.get<InstructorResponse[]>("/instructors");
    setInstructor(response.data);
  }

  useEffect(() => {
    fetchInstructor()
  }, [])

  return instructor
}