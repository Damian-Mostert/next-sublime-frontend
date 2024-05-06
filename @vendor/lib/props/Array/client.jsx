"use client";

import { Input } from "@components/input/input";
import { useEffect, useState } from "react";

export function MakeView(){

}

export function MakeDetail(){

}
var Options = [];
export function MakeEdit(title, value, require, update, getOptions) {
  return function Edit() {
    const [options, setOptions] = useState(Options);
    const load = async () => {
      setOptions(await getOptions());
    };
    useEffect(() => {
      load();
    }, []);
    useEffect(()=>{
        console.log(options)
    },[options])
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
