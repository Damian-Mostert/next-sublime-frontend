"use client";

import services from "@services";
import { useEffect, useState } from "react";

export function useUser() {
  
  const [user, setUser] = useState(null);

  const loadUser = () =>
    services[process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE][process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE_KEY](null, { fire: false },{
      Authorization:`Bearer ${localStorage.getItem("token")}`
    }).then((response) => {
      response.success && setUser(response.data);
    });

  useEffect(() => {
    loadUser();
  }, []);

  return user;
}