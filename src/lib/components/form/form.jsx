"use client";

import "./form.scss";

import { useState } from "react";
import { Text, Input, Button } from "..";
import { useUser } from "../../../lib/modules/useUser";
import services from "../../services";

const makeHandleFormSubmit = (onsubmit) => {
  let [keys, type] = onsubmit.split("::");
  var Key0 = keys.split(".")[0];
  var Key1 = keys.split(".")[1];
  const service = services[Key0][Key1];
  return async (input) => {
    return service
      ? await (async function () {
          let res = await service(input, { fire: true }, {}, type == "client");
          if (res?.success)
            switch (keys) {
              //trigger on auth routes
              case `${process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE}.${process.env.NEXT_PUBLIC_AUTH_MODULE_LOGIN_KEY}`:
              case `${process.env.NEXT_PUBLIC_AUTH_MODULE_SERVICE}.${process.env.NEXT_PUBLIC_AUTH_MODULE_REGISTER_KEY}`:

                localStorage.setItem(
                  process.env.NEXT_PUBLIC_AUTH_LOCAL_STORAGE_KEY,
                  res.data.token
                );
                useUser.mutate();
            }
          return res?.success;
        })()
      : false;
  };
};

export function Form({
  className = "",
  variant = "default",
  fields = [],
  text,
  button,
  onSubmit = () => {},
  submittedText,
}) {
  const [submitted, setSubmitted] = useState(false);

  var busy = false;
  if (typeof onSubmit == "string") {
    onSubmit = makeHandleFormSubmit(onSubmit);
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!busy) {
      busy = true;
      var valid = true;
      let result = {};
      fields.map((input) => {
        if (input?.ref?.current && input.name) {
          result[input.name] = input.ref.current.value;
          const validation = input.ref.current.validate();
          if (valid) valid = validation;
        }
      });
      if (valid) {
        setSubmitted(await onSubmit(result));
      }
      busy = false;
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`form form-variant-${variant} ${className}`}
    >
      {!submitted && (
        <>
          {text && <Text {...text} />}
          <div className="form-fields">
            {fields.map((item, index) => {
              return <Input key={index} {...item} />;
            })}
          </div>

          <Button label="Submit" {...button} className="mx-auto" />
        </>
      )}
      {submitted && <>{submittedText && <Text {...submittedText} />}</>}
    </form>
  );
}

import { useRef } from "react";

Form.new = function (props) {
  return (
    <Form
      {...props}
      fields={props.fields.map((field, index) => ({
        ref: useRef(index),
        ...field,
      }))}
    />
  );
};
