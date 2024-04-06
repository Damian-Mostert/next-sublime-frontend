"use client";

import services from "@services";
import { useEffect, useState } from "react";

export function useUser() {
  const [user, setUser] = useState(null);

  const loadUser = () =>
    services.user.getUser(null, {}, { fire: false }).then((response) => {
      console.log(response)

      response.success && setUser(response.data);
    });

  useEffect(() => {
    loadUser();
  }, []);

  return user;
}
