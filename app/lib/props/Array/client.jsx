"use client";

import { Input } from "sublime-components";
import { useEffect, useState } from "react";

export function MakeView() {}

export function MakeDetail() {}
var Options = [];
export function Edit({ title, value = [], update, rules }) {
  const addNew = () => {
    let newValue = [...value];
    newValue.push("");
    update(newValue);
  };
  const deleteOne = (index) => {
    update(value.filter((val, i) => i != index));
  };
  return (
    <div className="pt-4">
      <div className="text-2xl">{title}</div>
      <div className="pl-4">
        {value.map((item, index) => {
          return (
            <div className="w-full flex" key={index}>
              {!rules && (
                <>
                  <Input
                    value={item}
                    onChange={(val) => {
                      let newValue = [...value];
                      newValue[index] = val;
                      update(newValue);
                    }}
                  />
                  <div
                    onClick={() => deleteOne(index)}
                    className="p-2 rounded-full ml-4 mt-6"
                    style={{ width: "1rem", height: "1rem", background: "red" }}
                  />
                </>
              )}
              {rules && (
                <div className="w-full flex">
                  <div className="w-full">
                    <RuleMap
                      rules={rules}
                      index={index}
                      update={update}
                      value={value}
                    />
                  </div>
                  <div className="h-full flex items-center">
                    <div
                      onClick={() => deleteOne(index)}
                      className="p-2 rounded-full ml-4 mt-6"
                      style={{
                        width: "1rem",
                        height: "1rem",
                        background: "red",
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="flex justify-start">
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

function RuleMap({ rules, value, update, index }) {
  return (
    <div
      className="w-full pb-8"
    >
      {rules.map((rule) => {
        return (
          <Ruled rule={rule} index={index} update={update} value={value} />
        );
      })}
    </div>
  );
}

function Ruled({ rule, value, update, index }) {
  const Component = () =>
    rule.edit && (
      <div>
        {rule?.edit(value[index]?.[rule.key], (val) => {
          let newValue = [...value];
          if (!newValue[index]) newValue[index] = {};
          newValue[index][rule.key] = val;
          update(newValue);
        })}
      </div>
    );
  return <Component />;
}
