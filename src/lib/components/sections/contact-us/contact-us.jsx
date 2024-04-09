"use client";

import { Layout } from "@components";
import { ContactForm } from "@forms/contact";

export function ContactUs() {
  return (
    <Layout type="center" className="h-screen items-center">
      <ContactForm />
    </Layout>
  );
}
