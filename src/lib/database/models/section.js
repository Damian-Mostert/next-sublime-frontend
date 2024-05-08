import { Model } from "database-funnel";

export default function section() {
  return Model("Sections", {
    page_id: ["number"],
    order: ["number"],
    type: ["string"],
    active: ["boolean"],
    props: ["object"],
  });
}
