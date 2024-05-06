"use client";

import { Input } from "@components/input/input";
import { useEffect, useState } from "react";

export function MakeView() {}

export function MakeDetail() {}
var Options = [];
export function Edit({ title, value, update }) {
  const addNew = () => {
    let newValue = [...value];
    newValue.push("");
    update(newValue);
  };
  const deleteOne = (index) => {
    update(value.filter((val,i)=>i!=index));
  };
  return (
    <div className="pt-2">
      <div>{title}</div>
      <div className="pl-4">
        {value.map((item, index) => {
          return (
            <div className="w-full flex" key={index}>
              <Input
                value={item}
                onChange={(val) => {
                  let newValue = [...value];
                  newValue[index] = val;
                  update(newValue);
                }}
              />
              <div
                onClick={()=>deleteOne(index)}
                className="p-2 rounded-full ml-4 mt-6"
                style={{ width: "1rem", height: "1rem", background: "red" }}
              />
            </div>
          );
        })}
        <div>
          <div
            onClick={addNew}
            className="p-2 rounded-full mt-4"
            style={{ width: "1rem", background: "lime" }}
          />
        </div>
      </div>
    </div>
  );
}
