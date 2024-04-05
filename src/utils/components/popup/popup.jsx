"use client";

import "./popup.scss";

import { useState } from "react";

import { PopupBox } from "./box/box";
import { Form } from "@/utils/components";

//container and contents
function Contents({ modal, form, ...props }) {
  if (form) {
    return Form.new(form.text, form.fields, form.onSubmit);
  }
  if (modal) {
    const Component = modal;
    return <Component Resolve={Resolve} />;
  }
  return <PopupBox {...props} />;
}

function Container({ data, Resolve, Id }) {
  return (
    <>
      {data && (
        <div
          style={{
            position: "fixed",
            zIndex: "20000",
            top: "0px",
            left: "0px",
          }}
        >
          <div
            style={{
              position: "fixed",
              top: "0px",
              left: "0px",
              width: "100vw",
              height: "100vh",
              display: "flex",
            }}
          >
            <div
              id={Id + "-bg"}
              className={`
                                popup-bg popup-bg-${
                                  data.bg ? data.bg : "default"
                                }
                        `}
              style={{
                width: "100vw",
                height: "100vh",
                position: "fixed",
              }}
            />
            {data.canClose && (
              <>
                <div
                  onClick={() => {
                    Resolve({ close: true });
                  }}
                  style={{
                    position: "fixed",
                    top: "0px",
                    left: "0px",
                    width: "100vw",
                    height: "100vh",
                  }}
                />
              </>
            )}
            <div
              className="popup-open"
              style={{
                transition: " 0.5s",
                margin: "auto",
                zIndex: "1",
              }}
              id={Id}
            >
              <Contents {...data} Resolve={Resolve} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function Popup() {
  //state
  const [data, setData] = useState([]);

  const newResolve = (z) => async (Output, resolve) => {
    const target = document.getElementById("Popup-" + z);
    const targetBg = document.getElementById("Popup-" + z + "-bg");

    if (target) target.style.scale = "0";
    if (targetBg) targetBg.style.opacity = "0";

    await new Promise((Resolve) =>
      setTimeout(function () {


        data[z] && data[z].resolve(Output);

        let newArray = [];

        for (let i = 0; i < data.length; i++)
          if (i != z) newArray.push(data[i]);

        setData(newArray);

        setTimeout(() => {
          resolve && resolve(Output);
          Resolve(Output);
        }, 100);
      }, 500)
    );
  };
  //fire
  Popup.fire = async (inputData = {}) => {
    return await new Promise((resolve) => {
      if (typeof inputData.z == "undefined") inputData.z = 0;
      let NData = [...data];
      NData[inputData.z] = {
        ...inputData,
        resolve,
      };
      setData([...NData]);
    });
  };
  //close
  Popup.close = async (zIndex = 0) =>
    await newResolve(zIndex)({ closed: true });
  //containers
  return (
    <>
      {data &&
        data.map((_, index) => (
          <Container
            Id={"Popup-" + index}
            key={"popup-" + index}
            data={data[index]}
            Resolve={newResolve(index)}
          />
        ))}
    </>
  );
}

Popup.fire = () => {};
Popup.close = () => {};
