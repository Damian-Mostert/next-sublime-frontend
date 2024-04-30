"use server";

import { getAll, getFields } from "../../services/server";

import Table from "../table";

export async function View({ params }) {
  const data = await getAll(params.slug);
  console.log("view-data", data);
  const fields = await getFields(params.slug);
  return <Table params={params} data={data ? data : {}} fields={fields} />;
}
