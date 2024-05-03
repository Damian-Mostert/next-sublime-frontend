"use client";

import { Button } from "@components/button/button";
import { getOne, updateItem } from "../../services/server";
import { useFields, usePreview } from "../../services/client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Viewer } from "../../viewer";
import { Lg } from "@components/tools/Md&Lg";
import { Popup } from "@components/popup/popup";

export function Update({ params }) {
  const pathname = usePathname();
  const slug = pathname?.split("/")[pathname?.split("/").length - 2];
  const sub = pathname?.split("/")[pathname?.split("/").length - 1];

  const [data, setData] = useState(null);

  const fields = useFields(slug, data ? data : {});

  const loadData = async () => {
    setData(await getOne(slug, sub));
  };

  useEffect(() => {
    loadData();
  }, []);

  const newUpdate = (key) => {
    return (value) => {
      let new_data = { ...data };
      new_data[key] = value;
      setData(new_data);
    };
  };

  const save = async () => {
    Popup.fire({
      bg: "blur",
      icon: "loading",
    });
    await updateItem(slug, sub, data);
    Popup.close();
    setTimeout(() => {
      window.location.href = "/dashboard/detail/" + slug + "/" + sub;
    }, 500);
  };

  return (
    <div className="flex w-full">
      {data && (
        <>
          <div className="w-full mt-4">
            <div id="form">
              {fields.map((field, key) => {
                return field.edit(data[field.key], newUpdate(field.key));
              })}
            </div>
            <div className="w-full flex mt-4">
              <Button label={"Back"} href={`/dashboard/view/${slug}`} />
              <Button className={"ml-auto"} label={"Save"} onClick={save} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
