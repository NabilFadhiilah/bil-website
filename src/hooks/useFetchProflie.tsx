import { useState, useEffect} from "react"
import { fetchProfile } from "../services/profileService";

type ProfileResponse = {
  contact: object,
  summary: string
}

export const useFetchProfile = () => {
  const [profile, setProfile] = useState<ProfileResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchProfile();
      setProfile(data);
    } catch (err) {
      setError(`Failed to fetch education ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {profile, isLoading, error}
}