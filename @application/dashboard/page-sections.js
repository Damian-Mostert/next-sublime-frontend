import { Object } from "@props/Object";
import { Text } from "@props/Text";
import { Id } from "@props/Id";

import pageSection from "@database/models/page-section";
import sections from "@vendor/load/sections";
import { Boolean } from "@props/Boolean";
import { Dashboard } from "@props/Dashboard";

export class PageSections extends Dashboard {
  group = "Content";
  title = "Section";
  model = pageSection;

  async preview(data) {
    
    const Component = sections[data.type];
    return (
      <Component
        {...(data.data[data.type.toLowerCase()]
          ? data.data[data.type.toLowerCase()]
          : {})}
      />
    );
  }
  //build fields
  fields(user, data) {
    return [
      new Id(),
      new Text("Type", "type").require(),
      new Text("Page id", "page_id").require(),
      new Boolean("Active", "active"),
      //new Object("Props", "props", makeProps(sections[data.type].props)),
    ];
  }
}

function makeProps(props) {
  return props.map((prop) => prop);
}
