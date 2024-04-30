import { Text } from "@props/Text";

import popup from "@database/models/popup";
import { Id } from "@props/Id";
import { Boolean } from "@props/Boolean";
import popups from "@vendor/load/popups";
import { Dashboard } from "@props/Dashboard";

export class Popups extends Dashboard {
  group = "Content";
  title = "Popups";
  model = popup;
  
  async preview(data) {
    let Popup = popups[data.popup];
    return (
      <div className="w-full h-full flex justify-center items-center">
        <Popup Resolve={() => {}} />
      </div>
    );
  }
  fields(user) {
    return [
      new Id(),
      new Text("Popup", "popup").require(),
      new Text("Page id", "page_id").require(),
      new Boolean("Active", "active").require(),
    ];
  }
}
