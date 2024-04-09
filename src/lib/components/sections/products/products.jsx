"use client";

import { Layout, Title } from "@/vendor/components";
import { useState, useEffect } from "react";
import builder from "@/builder";
import { TextSection } from "@/lib/dynamic-sections/text";
export const ProductCollection = ({ collection }) => {
  const [data, setData] = useState();
  /* useEffect(() => {
    builder
      .get("products", {

      })
      .promise()
      .then((data) => {
        console.log("products",data.data);
        data?.data && setData(data.data);
      });
  }, []);
 */
  return (
    <Layout>
      <Title text={"WHATS"} extra="hot" align="center" />
      {data &&
        data.map((product, i) => <h1 key={`product-${i}`}>{product.title}</h1>)}
        <TextSection name="Products"/>
    </Layout>
  );
};
