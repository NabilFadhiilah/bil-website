import { useState, useEffect} from "react"
import { fetchInstructor, type InstructorResponse } from "../services/instructorService";



export const useFetchInstructor = () => {
  const [instructors, setInstructor] = useState<InstructorResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchInstructor();
      setInstructor(data);
    } catch (err) {
      setError(`Failed to fetch education ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  return {instructors, isLoading, error}
}