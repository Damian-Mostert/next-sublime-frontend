"use client";

import { Text, Layout } from "@/vendor/components";
import builder from "@/builder/client";
import Loading from "@/app/loading";
import { useEffect, useState } from "react";

export function TextSection({ name }) {
  const [data, setData] = useState();
  useEffect(() => {
    builder
      .get("text-section", {
        query: {
          name: name,
        },
      })
      .promise()
      .then((data) => {
        console.log(data.data);
        data?.data && setData(data.data);
      });
  }, []);

  return (
    <>
      {data && (
        <Layout>
          {data.sections.map((section, key) => {
            return (
              <Text
                title={section.title}
                paragraphs={
                  section?.paragraphs
                    ? section.paragraphs.map((p) => p.text)
                    : []
                }
                key={key}
              />
            );
          })}
        </Layout>
      )}
      {!data && <Loading />}
    </>
  );
}
