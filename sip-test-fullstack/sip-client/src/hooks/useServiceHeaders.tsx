import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServiceHeaders = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/service-headers"
  );

  return response.data;
};

export const useServiceHeaders = () => {
  return useQuery({
    queryKey: ["service-headers"],
    queryFn: () => fetchServiceHeaders(),
  });
};
