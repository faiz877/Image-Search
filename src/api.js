import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Z-7CHOdtRLBs2lS_zemPJEajymNqs3dfH3W9hTjxksk",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
