import { useState, useEffect } from "react";
import { fetchCertification } from "../services/certificationService";
import type { CertificationResponse } from "../services/certificationService";

export const useFetchCertification = () => {
  const [certification, setCertification] = useState<CertificationResponse[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const data = await fetchCertification();
      setCertification(data);
    } catch (err) {
      setError(`Failed to fetch certifications ${err}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { certification, isLoading, error };
};