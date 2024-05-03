import { Text } from "@props/Text";

import popup from "@database/models/popup";
import { Id } from "@props/Id";
import { Boolean } from "@props/Boolean";
import popups from "@vendor/load/popups";
import { Dashboard } from "@props/lib/Dashboard";
import { BelongsTo } from "@props/BelongsTo";
import { Pages } from "./pages";
import { Select } from "@props/Select";
import POPUPS from "@vendor/load/popups";
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
      new Select("Popup", "popup").options(
        Object.keys(POPUPS).map((i) => ({ value: i, label: i }))
      ),
      new BelongsTo("Page", "page_id", Pages).displayUsing("title"),
      new Text("Background", "bg").require(),
      new Boolean("Can close", "canClose").require(),
      new Boolean("Active", "active").require(),
    ];
  }
}
