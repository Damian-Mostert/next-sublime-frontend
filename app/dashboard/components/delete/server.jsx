"use server";

import { Button } from "@components/button/button";
import { getOne, getPreview, getFields } from "../../services/server";
import { Viewer } from "../../viewer";
import DeleteButton from "./button";

export async function Delete({ params }) {
  const data = await getOne(params.slug, params.sub);

  const fields = await getFields(params.slug, data);

  const preview = await getPreview(params.slug);

  return (
    <>
      <div className="w-full flex mt-4">
        <Button
          className={"shadow-2xl"}
          label={"Back"}
          href={`/dashboard/view/${params.slug}`}
        />
        <DeleteButton params={params} />
      </div>
      <Viewer
        params={params}
        data={data}
        fields={fields}
        preview={preview(data)}
      />
    </>
  );
}
