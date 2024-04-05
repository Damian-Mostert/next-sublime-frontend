"use server";

import axios from "./axios";

export async function ServerRequest(url, input_data) {
  process.env.SERVER_TYPE == "Development" &&
    console.log(
      "service send to : ",
      url,
      "\npayload : ",
      input_data
    );
  return await new Promise((Resolve) => {
    axios
      .post(url, input_data)
      .then((result) => {
        process.env.SERVER_TYPE == "Development" &&
          console.log("response:", result.data);
        Resolve(result.data);
      })
      .catch((error) => {
        console.error(error);
        if (error.response?.status) {
          return Resolve({
            status: "error",
            message: `Request failed with code ${error.response.status}.`,
          });
        }
        Resolve({
          status: "error",
          message: `Could not connect to the API.`,
        });
      });
  });
}
