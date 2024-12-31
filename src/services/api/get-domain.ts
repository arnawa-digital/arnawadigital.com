import axios from "axios";

export const searchDomain = async (name: string) => {
  try {
    const response = await axios.get("", {
      params: { name },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching domain data:", error);
    throw error;
  }
};
