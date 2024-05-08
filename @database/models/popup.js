import { Model } from "database-funnel";

export default function popup() {
  return Model("Popups", {
    page_id: ["string"],
    popup: ["string"],
    canClose: ["boolean"],
    bg: ["string"],
  });
}
