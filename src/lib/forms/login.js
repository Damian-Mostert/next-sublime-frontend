"use client";

import services from "@services";
import { Popup, Form } from "@components";

const variant = "default";

const text = {
  title: {
    pre: "Welcome back",
    text: "Login to your",
    extra: "Account",
  },
};

const handel = async (credentials) => {
  Popup.fire({ icon: "loading", bg: "blur" });
  await signIn("Credentials", credentials);
};

const fields = [
  {
    label: "Email",
    type: "email",
    name: "email",
    errorMessage: "Please enter your email",
    require: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    errorMessage: "No password, or password to weak",
    require: true,
  },
  {
    type: "link",
    value: "/user/password-reset",
    label: "forgot password?",
  },
  {
    name: "remember",
    label: "Remember me",
    type: "boolean",
  },
];

export const LoginForm = () => Form.new(text, fields, handel, variant);
