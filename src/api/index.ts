import axios from "axios";

const axiosService = axios.create({
  baseURL: "https://api.dictionaryapi.dev/",
  headers: {
    "Content-Type": "application/json",
  },
});

const findDictionary = (word: string) => {
  return axiosService.get(`api/v2/entries/en/${word}`);
};

export { findDictionary };
