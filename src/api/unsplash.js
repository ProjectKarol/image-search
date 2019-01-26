import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a6d8fba812dc40c18adc51fb13e0364727e490b52076fdacb2483a824dd4f3ec"
  }
});
