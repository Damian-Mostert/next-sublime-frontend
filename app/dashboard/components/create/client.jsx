"use client";

import { Button, Popup } from "sublime-components";
import { createItem } from "../../services/server";
import { useFields } from "../../services/client";
import { usePathname } from "next/navigation";
import { useState } from "react";
export function Create({ params }) {
  const pathname = usePathname();
  const slug = pathname?.split("/")[pathname?.split("/").length - 2];
  const sub = pathname?.split("/")[pathname?.split("/").length - 1];
  const [data, setData] = useState({});

  const fields = useFields(sub);

  const newUpdate = (key) => {
    return (value) => {
      let newData = { ...data };
      newData[key] = value;
      setData(newData);
    };
  };

  const save = async () => {
    Popup.fire({
      icon: "loading",
      bg: "blur",
    });
    const id = await createItem(sub, data);
    Popup.close();
    setTimeout(() => {
      window.location.href = "/dashboard/detail/" + sub + "/" + id;
    }, 500);
  };

  return (
    <>
      {fields && (
        <div className="w-full mt-4">
          <div id="form" className="flex flex-wrap">
            {fields.map((field, key) => {
              return (
                <div className="w-full pb-4" key={key}>
                  {field.edit(data[field.key], newUpdate(field.key))}
                </div>
              );
            })}
          </div>
          <div className="w-full flex mt-4">
            <Button label={"Back"} href={`/dashboard/view/${sub}`} />
            <Button
              className={"ml-auto shadow-xl"}
              label={"Save"}
              onClick={save}
            />
          </div>
        </div>
      )}
    </>
  );
}
