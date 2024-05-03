import { Object as object } from "@props/Object";
import { Text } from "@props/Text";
import { Id } from "@props/Id";

import pageSection from "@database/models/section";
import sections from "@vendor/load/sections";
import { Boolean } from "@props/Boolean";
import { Dashboard } from "@props/lib/Dashboard";
import { BelongsTo } from "@props/BelongsTo";
import { Pages } from "./pages";
import { Select } from "@props/Select";

export class PageSections extends Dashboard {
  group = "Content";
  title = "Section";
  model = pageSection;

  async preview(data) {
    const Component = sections[data.type];
    return (
      <div className="w-full h-full relative overflow-hidden">
        <div
          className="absolute scale-50 h-full w-full bg-body overflow-x-hidden"
          style={{
            width: "200%",
            height: "200%",
            left: "-50%",
            top: "-50%",
          }}
        >
          <Component {...(data.props ? data.props : {})} />
        </div>
      </div>
    );
  }
  //build fields
  fields(user, data) {
    return [
      new Id(),
      new Select("Type", "type").options(
        Object.keys(sections).map((sec) => ({ label: sec, value: sec }))
      ),
      new BelongsTo("Page", "page_id", Pages).displayUsing("title"),
      new Boolean("Active", "active"),
      new object(
        "Props",
        "props",
        sections[data?.type]?.props ? sections[data?.type]?.props : []
      ).hideAtView(),
    ];
  }
}

function makeProps(props) {
  return props.map((prop) => prop);
}
