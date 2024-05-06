"use client";

import { Input } from "@components/input/input";
import { useEffect, useState } from "react";

export function MakeView() {}

export function MakeDetail() {}

export function MakeEdit(title, value, require, update, getOptions) {
  return function Edit() {
    const [options, setOptions] = useState([]);
    useEffect(() => {
      getOptions().then((res) => setOptions(res));
    }, []);
    return (
      <div>
        <Input
          value={value}
          options={options}
          label={title}
          require={require}
          type={"select"}
          onChange={update}
        />
      </div>
    );
  };
}
