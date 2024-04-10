import __load from "../__load";

const services = {};

const LOAD = __load;

Object.keys(LOAD).map((key) => {
  const sub = {};

  Object.keys(LOAD[key]).map((sub_key) => {
    sub[sub_key] = async function Service(input_data = undefined) {
      const res = await ServerRequest(LOAD[key][sub_key], input_data);
      const response = typeof res == "object" ? res : {};
      response.success = true;
      response.error = false;

      if (response.status == "error") {
        response.success = false;
        response.error = true;
      }
      return response;
    };
  });
  services[key] = sub;
});

export default services;

import axios from "../init/axios";

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
