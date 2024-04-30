"use server";

import { Button } from "@components/button/button";
import { getOne, getPreview, getFields } from "../../services/server";
import { Viewer } from "../../viewer";

export async function Delete({ params }) {
  const data = await getOne(params.slug, params.sub);

  const fields = await getFields(params.slug);

  const preview = await getPreview(params.slug);
  
  return (
    <>
    <Viewer
        params={params}
        data={data}
        fields={fields}
        preview={preview(data)}
      />
      <div className="w-full flex mt-4">
        <Button
          className={"shadow-2xl"}
          label={"Back"}
          href={`/dashboard/view/${params.slug}`}
        />
        <div className="ml-auto">
          <Button
            className={"shadow-2xl ml-auto"}
            label={"Delete"}
            href={`/dashboard/delete/${params.slug}/${params.sub}`}
          />
          This action can not be undone!
        </div>
      </div>
    </>
  );
}
