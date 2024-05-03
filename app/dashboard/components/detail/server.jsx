import { Button } from "@components/button/button";
import { getOne, getPreview, getFields } from "../../services/server";
import { Viewer } from "../../viewer";

export async function Detail({ params }) {
  const data = await getOne(params.slug, params.sub);

  const fields = await getFields(params.slug, data);

  const preview = await getPreview(params.slug);
  return (
    <>
      <div className="w-full flex mt-4">
        <Button label={"Back"} href={`/dashboard/view/${params.slug}`} />
        <Button
          className={"ml-auto"}
          label={"Delete"}
          href={`/dashboard/delete/${params.slug}/${params.sub}`}
        />
        <Button
          className={"ml-4"}
          label={"Edit"}
          href={`/dashboard/update/${params.slug}/${params.sub}`}
        />
      </div>
      {data && (
        <Viewer
          params={params}
          data={data}
          fields={fields}
          preview={preview(data)}
        />
      )}
    </>
  );
}
