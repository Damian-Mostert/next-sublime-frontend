"use client";
import { Button } from "@components";
import DataTable from "react-data-table-component";

export const props = [];

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

export default function dashboard() {
  return (
    <div className="flex flex-col bg-gray-200">
      <div className="w-full p-2 bg-white"></div>
      <div className="flex h-full w-full p-4">
        <div className="w-[300px]"></div>
        <div className="w-full">
          <div className="pb-4">
            <div className="text-xl text-black">Title</div>
            <div className="flex">
              <input
                className="bg-white text-center rounded-xl"
                placeholder="search"
              />
              <Button className={"ml-auto"} label={"create"} />
            </div>
          </div>
          <div className="overflow-hidden rounded-xl">
            <DataTable selectableRows columns={columns} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
