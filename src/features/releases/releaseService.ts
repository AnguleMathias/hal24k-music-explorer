import axios from "axios";

import config from "../../config";
import spotifyToken from "../axiosConnection";

const newReleasesService = async () => {
  const token = await spotifyToken();
  Promise.resolve(token).then((data) => {
    console.log("token", data);
  });
  console.log("token", token);

  const options: any = {
    url: `${config.api.baseUrl}/browse/new-releases`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    json: true,
  };
  const response = await axios.get(options);
  console.log("response", response);
  return response.data;
};

export default newReleasesService;
