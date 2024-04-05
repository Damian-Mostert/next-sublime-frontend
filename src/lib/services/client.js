"use client";

import { Popup } from "@/lib/components";
import { ServerRequest } from "./server-from-client";

import __load from "./__load";

const services = {};

const LOAD = __load;

export async function Request(url, input_data) {
  process.env.SERVER_TYPE == "Development" &&
    console.log("service send to : ", url, "\npayload : ", input_data);
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
Object.keys(LOAD).map((key) => {
  const sub = {};

  Object.keys(LOAD[key]).map((sub_key) => {
    sub[sub_key] = async function Service(
      input_data = undefined,
      popup_config = { success: false, error: false, fire: true }
    ) {
      if (popup_config.fire)
        Popup.fire({
          icon: "loading",
          bg: "blur",
        });
      const res = await Request(LOAD[key][sub_key], input_data);
      const response = res ? res : {};
      response.success = true;
      response.error = false;

      if (response.status == "error") {
        if (popup_config.fire)
          Popup.fire(
            popup_config?.error
              ? popup_config?.error(response.message)
              : {
                  icon: "warn",
                  text: {
                    title: {
                      text: "Whoops!",
                      align: "center",
                    },
                    paragraphs: [response.message],
                  },
                  canClose: true,
                  timer: 3000,
                  bg: "blur",
                }
          );
        response.success = false;
        response.error = true;
      } else {
        if (popup_config.fire)
          Popup.fire(
            popup_config?.success
              ? popup_config?.success(response.message)
              : {
                  icon: "success",
                  text: {
                    title: {
                      text: "Success",
                      align: "center",
                    },
                    paragraphs: [response.message],
                  },
                  canClose: true,
                  timer: 3000,
                  bg: "blur",
                }
          );
      }
      return response;
    };
  });
  services[key] = sub;
});

export default services;
