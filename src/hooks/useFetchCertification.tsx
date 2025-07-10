import { useState, useEffect} from "react"
import { axiosInstance } from "../utils/axios";

type CertificationResponse = {
  name: string,
  year: string,
}

export const useFetchCertification = () => {
  const [certification, setCertification] = useState<CertificationResponse[]>();

  const fetchCertification = async () => {
    const response = await axiosInstance.get<CertificationResponse[]>("/certifications");
    setCertification(response.data);
  }

  useEffect(() => {
    fetchCertification()
  }, [])

  return certification
}