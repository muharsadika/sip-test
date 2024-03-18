import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchServiceDetails = async () => {
  const response = await axios.get(
    "http://localhost:8000/api/service-details"
  );

  return response.data;
};

export const useServiceDetails = () => {
  return useQuery({
    queryKey: ["service-details"],
    queryFn: () => fetchServiceDetails(),
  });
};
