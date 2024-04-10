"use client";

import { Popup } from "@/vendor/components";
import { ServerRequest } from "./client/server-from-client";

import __load from "./__load";

const services = {};

const LOAD = __load;

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
      const res = await ServerRequest(LOAD[key][sub_key], input_data);
      const response = typeof res == "object" ? res : {};
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
