"use client";

import "./form.scss";

import { useState } from "react";
import { Text, Input, Button } from "@vendor/components";

export function Form({
  className = "",
  variant = "default",
  fields = [],
  text,
  button,
  onSubmit = () => {},
  submittedText
}) {
  const [submitted, setSubmitted] = useState(false);

  var busy = false;

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!busy) {
      busy = true;
      var valid = true;
      let result = {};
      fields.map((input) => {
        if (input?.ref?.current) {
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
      {submitted && <>
        {submittedText && <Text {...submittedText} />}
      </>}
    </form>
  );
}

import { useRef } from "react";

Form.new = function (text, fields, handle, variant, successText) {
  return (
    <Form
      variant={variant}
      text={text}
      fields={fields.map((field, index) => ({
        ref: useRef(index),
        ...field,
      }))}
      onSubmit={handle}
      submittedText={successText}
    />
  );
};
