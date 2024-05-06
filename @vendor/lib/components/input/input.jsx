"use client";

import "./input.scss";

import Link from "next/link";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";
import { Icon, Icons } from "@components/icon/icon";

const validatePassword = (pw) => {
  const result =
    /[A-Z]/.test(pw) &&
    /[a-z]/.test(pw) &&
    /[0-9]/.test(pw) &&
    /[^A-Za-z0-9]/.test(pw) &&
    pw.length > 4;
  return result;
};

function validateDate(dateString) {
  var date = new Date(dateString);
  return !isNaN(date.getTime());
}

const Input = forwardRef(function Input(
  {
    variant = "default",
    name = null,
    value = "",
    type = "text",
    label = false,
    require = false,
    errorMessage = "This input is required.",
    size = "full",
    className = "",
    onChange = () => {},
    ...props
  },
  ref
) {
  const [Value, setValue] = useState(
    value == "" && type == "boolean" ? false : value
  );

  const imageRef = useRef();

  const [error, setError] = useState(null);

  function validate() {
    if (require) {
      const isValid = () => {
        switch (type) {
          case "link":
            return true;
          case "cell":
            return validator.isMobilePhone(Value.replace(/ /g, ""));
          case "text":
          case "name":
            return Value.length ? true : false;
          case "date":
            return validateDate(Value);
          case "password":
            return validatePassword(Value);
          case "email":
            return validator.isEmail(Value);
          case "boolean":
          case "select":
          case "image":
          case "hex":
            return Value;
        }
        return true;
      };
      if (!isValid()) {
        setError(errorMessage);
        return false;
      }
      return true;
    }
    return true;
  }

  useImperativeHandle(ref, function () {
    return {
      value: Value,
      setValue: setValue,
      validate: validate,
    };
  });

  const handleInstantChange = (ev) => {
    if (type == "cell") {
      if (
        ev.target.value.length == 1 &&
        ev.target.value != "0" &&
        ev.target.value != "+"
      )
        return;
      if (
        (ev.target.value.length === 3 &&
          ev.nativeEvent.inputType !== "deleteContentBackward") ||
        (ev.target.value.startsWith("0") &&
          ev.target.value.length === 7 &&
          ev.nativeEvent.inputType !== "deleteContentBackward") ||
        (ev.target.value.startsWith("+") &&
          (ev.target.value.length === 10 || ev.target.value.length === 6) &&
          ev.nativeEvent.inputType !== "deleteContentBackward")
      ) {
        ev.target.value += " ";
      }
      if (ev.target.value.startsWith("+")) {
        if (ev.target.value.length > 15) {
          return;
        }
      } else {
        if (ev.target.value.length > 12) {
          return;
        }
      }
    }

    setError(false);
    setValue(ev.target.value);
    onChange(ev.target.value);
  };

  const handleInstantChangeValueIn = (value) => {
    if (type == "number") {
      setError(false);
      setValue(Number(value));
      onChange(Number(value));
      return;
    }
    setError(false);
    setValue(value);
    onChange(value);
  };

  const booleanChange = () => {
    setError(false);
    onChange(!Value);
    setValue(!Value);
  };

  return (
    <div
      className={`input-container input-variant-${variant} input-size-${size} ${className}`}
      {...props}
    >
      {(function () {
        switch (type) {
          case "text":
          case "number":
          case "name":
          case "email":
          case "date":
          case "password":
          case "cell":
            return (
              <>
                {label && <label className="label">{label}</label>}
                <input
                  name={name}
                  className="input"
                  value={Value}
                  type={type == "cell" ? "phone" : type}
                  onChange={handleInstantChange}
                />
                {error && <div className="input-error">{error}</div>}
              </>
            );
          case "textarea":
            return (
              <>
                {label && <label className="label">{label}</label>}
                <textarea
                  className="input"
                  value={Value}
                  type={type == "cell" ? "phone" : type}
                  onChange={handleInstantChange}
                  style={{ resize: "none" }}
                />
                {error && <div className="input-error">{error}</div>}
              </>
            );
          case "select":
            var prp_value = "";
            if (props.options)
              for (let item of props.options) {
                if (item.value == Value) prp_value = item.label;
              }
            return (
              <>
                {label && <label className="label">{label}</label>}
                <select  className={`input input-${type}`} value={prp_value} onChange={handleInstantChange}>
                  {props.options &&
                    props.options.map((item, index) => {
                      return (
                        <option
                          value={item.value}
                          key={index}
                        >
                          {item.label}
                        </option>
                      );
                    })}
                </select>
                {error && <div className="input-error">{error}</div>}
              </>
            );
          case "boolean":
            return (
              <div className="input-boolean-container">
                {label && <label className="label">{label}</label>}
                <div className="input-boolean" onClick={booleanChange}>
                  {Value && <div className="input-boolean-dot" />}
                </div>
                {error && <div className="input-error">{error}</div>}
              </div>
            );
          case "link":
            return (
              <>
                <Link className="input-link" href={Value}>
                  {label}
                </Link>
              </>
            );
          case "g-re-captcha":
            return (
              <>
                {label && <label className="label">{label}</label>}
                <div className="input-g">
                  <ReCAPTCHA
                    sitekey={process.env.G_RECAPTCHA_KEY}
                    onChange={handleInstantChange}
                  />
                </div>
                {error && <div className="input-error">{error}</div>}
              </>
            );

          case "image":
            return (
              <>
                {label && <label className="label">{label}</label>}
                <div
                  className="w-full"
                  onClick={() => {
                    imageRef.current.click();
                  }}
                >
                  <img src={Value} className="input-image" />
                  <input
                    name={name}
                    ref={imageRef}
                    style={{ display: "none" }}
                    type="file"
                    accept="*img"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = () => {
                          handleInstantChangeValueIn(reader.result);
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                  />
                </div>
                {error && <div className="input-error">{error}</div>}
              </>
            );

          case "hex":
            return (
              <>
                {label && <label className="label">{label}</label>}
                <HexColorPicker
                  className="input-color"
                  color={Value}
                  onChange={handleInstantChangeValueIn}
                />
                {error && <div className="input-error">{error}</div>}
              </>
            );
        }
      })()}
    </div>
  );
});

export { Input };
