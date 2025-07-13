import { useState, useEffect} from "react"
import { fetchSkills, type SkillsResponse} from "../services/skillService";

export const useFetchSkills = () => {
  const [skills, setSkills] = useState<SkillsResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchSkills();
      setSkills(data);
    } catch (err) {
      setError(`Failed to fetch education ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {skills, isLoading, error}
}