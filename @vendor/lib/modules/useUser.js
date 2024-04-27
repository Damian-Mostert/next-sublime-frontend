"use client";

import services from "../services";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  const loadUser = () =>
    services[process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE]
      [process.env.NEXT_PUBLIC_AUTH_MODULE_GET_USER_KEY](
        null,
        { fire: false },
        {
          Authorization: `Bearer ${localStorage.getItem(
            process.env.NEXT_PUBLIC_AUTH_LOCAL_STORAGE_KEY
          )}`,
        }
      )
      .then((response) => {
        console.log(response)
        response.success &&
          setUser({
            ...response.data.user,
            logout() {
              localStorage.setItem(
                process.env.NEXT_PUBLIC_AUTH_LOCAL_STORAGE_KEY,
                ""
              )
              setTimeout(()=>window.location.reload(),100);
              
            },
          });
      });

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    user && console.info("user", user);
  }, [user]);
  useUser.mutate = () => {
    loadUser();
  };
  return user;
}
useUser.mutate = () => {
  console.warn("useUser not called before mutate.");
};
