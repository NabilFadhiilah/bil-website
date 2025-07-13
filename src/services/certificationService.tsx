import { axiosInstance } from "../utils/axios";

export type CertificationResponse = {
  name: string;
  year: string;
};

export const fetchCertification = async () => {
  const response = await axiosInstance.get<CertificationResponse[]>("/certifications");
  return response.data
}
