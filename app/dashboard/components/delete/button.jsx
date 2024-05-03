"use client";

import { Button } from "@components/button/button";
import { Popup } from "@components/popup/popup";
import { deleteItem } from "../../services/server";

export default function DeleteButton({ params }) {
  const deleteThis = async () => {
    Popup.fire({
      icon: "loading",
      bg: "blur",
    });
    await deleteItem(params.slug, params.sub);
    Popup.close()
    setTimeout(()=>{
        window.location.href = `/dashboard/view/${params.slug}`
    },500);
  };
  return (
    <div className="ml-auto">
      <Button
        className={"shadow-2xl ml-auto"}
        label={"Delete"}
        onClick={deleteThis}
      />
      This action can not be undone!
    </div>
  );
}
