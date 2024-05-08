import { Object as object } from "../../app/lib/props/Object";
import { Text } from "../../app/lib/props/Text";
import { Id } from "../../app/lib/props/Id";

import pageSection from "@database/models/section";
import sections from "../../app/lib/load/sections";
import { Boolean } from "../../app/lib/props/Boolean";
import { Dashboard } from "../../app/lib/props/lib/Dashboard";
import { BelongsTo } from "../../app/lib/props/BelongsTo";
import { Pages } from "./pages";
import { Select } from "../../app/lib/props/Select";
import { Number } from "../../app/lib/props/Number";

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
      new Number("Order", "order"),
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
