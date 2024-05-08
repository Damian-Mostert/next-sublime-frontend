"use client";

import { Input } from "sublime-components";
import { useEffect, useState } from "react";

export function MakeView() {}

export function MakeDetail() {}

var Options = [];

export function MakeEdit(title, value, require, update, getOptions) {
  return function Edit() {
    const [options, setOptions] = useState(Options);
    useEffect(() => {
      getOptions().then((res) => {
        Options = res;
        setOptions(res);
      });
    }, []);
    return (
      <div>
        <Input
          value={value}
          options={options}
          label={title}
          require={require}
          type={"select"}
          onChange={(val)=>{
            update(val);
          }}
        />
      </div>
    );
  };
}
