import { Model } from "database-funnel";

export default function page() {
  return Model("Pages", {
    title: ["string", "unique"],
    use_header: ["boolean"],
    test_x: ["double","default:90"],
    use_breadcrumbs: ["boolean"],
    use_footer: ["boolean"],
    slug: ["string", null, "unique", "default:'/'"],
    test: ["string"],
    active: ["boolean", null],
  });
}
