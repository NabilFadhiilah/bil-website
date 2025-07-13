import { useState, useEffect} from "react"
import { fetchEducation } from "../services/educationService";
import type { EducationResponse } from "../services/educationService";

export const useFetchEducation = () => {
  const [educations, setEducation] = useState<EducationResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchEducation();
      setEducation(data);
    } catch (err) {
      setError(`Failed to fetch education ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return {educations,isLoading,error}
}