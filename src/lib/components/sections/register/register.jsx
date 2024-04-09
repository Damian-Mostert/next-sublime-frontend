"use client";

import { RegisterForm } from "@forms/register";
import { Layout } from "@components";

export function Register() {
  return (
    <Layout type="center" className="h-screen items-center">
      <RegisterForm />
    </Layout>
  );
}
