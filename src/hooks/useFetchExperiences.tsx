import { useState, useEffect} from "react"
import { fetchExperience, type ExperienceResponse } from "../services/experienceSercice";


export const useFetchExperiences = () => {
  const [experiences, setExperience] = useState<ExperienceResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchExperience();
      setExperience(data);
    } catch (err) {
      setError(`Failed to fetch education ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return {experiences,isLoading,error}
}