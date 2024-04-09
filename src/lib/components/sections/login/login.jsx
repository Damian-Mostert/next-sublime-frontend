"use client";

import { LoginForm } from "@forms/login";
import { Layout } from "@components";

export function Login() {
  return (
    <Layout type="center" className="h-screen items-center">
      <LoginForm />
    </Layout>
  );
}
