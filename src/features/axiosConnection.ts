import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Buffer } from "buffer";

import config from "../config";

const client_id = config.api.clientId;
const client_secret = config.api.clientSecret;

let token = "";

// const authOptions: any = {
//   url: "https://accounts.spotify.com/api/token",
//   headers: {
//     Authorization:
//       "Basic " + new Buffer(client_id + ":" + client_secret).toString("base64"),
//   },
//   form: {
//     grant_type: "client_credentials",
//   },
//   json: true,
// };

const spotifyToken = async () => {
  const configuration = {
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
      ContentType: "application/x-www-form-urlencoded",
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  const request = await axios.post(config.api.authUrl, configuration);
  console.log("request", request);
  return request;
  // }

  //   try {
  //     const response = await axios.post(
  //       authOptions,
  //       function (error: any, response: any, body: any) {
  //         if (!error && response.statusCode === 200) {
  //           token = body.access_token;
  //         }
  //       }
  //     );
  //     token = response.data.access_token;
  //     return token;
  //   } catch (err: any) {
  //     console.log("err", err);
  //     // const message =
  //     //   (err.response && err.response.data && err.response.data.message) ||
  //     //   err.message ||
  //     //   err.toString();
  //   }
};

export default spotifyToken;
