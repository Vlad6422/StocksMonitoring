import axios from "axios"
import { CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company"
interface SearchResponse {
    data: CompanySearch[];
}
export const searchCompanies = async (query: string) => {
    try {
      //Add &exchange=NASDAQ or NYSE (if want)
        const data = await axios.get<SearchResponse>(`https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&limit=10&apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message :", error.message);
            return error.message;
        } else {
            console.log("unexpected error :");
            return "Unexpected Error";
        }
    };
}
export const getCompanyProfile = async (query: string) => {
    try {
      const data = await axios.get<CompanyProfile[]>(
        `https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };
  export const getKeyMetrics = async (query: string) => {
    try {
      const data = await axios.get<CompanyKeyMetrics[]>(
        `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?apikey=${process.env.REACT_APP_API_KEY}`
      );
      return data;
    } catch (error: any) {
      console.log("error message: ", error.message);
    }
  };