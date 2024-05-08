"use server";

import { Update } from "../../components/update/client";
import { View } from "../../components/view/server";
import { Create } from "../../components/create/client";
import { Nav } from "../../components/nav";
import { Title } from "sublime-components";
import { Detail } from "../../components/detail/server";
import { Delete } from "../../components/delete/server";

export default async function ({ params }) {
  params.slug = params.slug.replace(/%20/g, " ");
  return (
    <>
      <Nav params={params} />
      <div className="w-full">
        <div className="capitalize text-2xl">
          <Title
            align="left"
            extra={params.sub}
            pre={params.action}
            text={params.slug}
          />
        </div>
        {(() => {
          switch (params.action) {
            case "view":
              return <View params={params} />;
            case "create":
              return <Create params={params} />;
            case "update":
              return <Update/>;
            case "detail":
              return <Detail params={params} />;
            case "delete":
              return <Delete params={params} />;
          }
        })()}
      </div>
    </>
  );
}
