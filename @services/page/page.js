"use server";

import popup from "@database/models/popup";
import page from "@database/models/page";
import pageSection from "@database/models/section";

export async function getMetadata(slug, active) {
  return await page()
    .where("slug", "==", slug)
    .where("active", "==", !active)
    .first();
}

export async function getPage(slug) {
  const page = await getMetadata(slug);
  const sections = page
    ? await pageSection()
        .where("page_id", "==", page.id)
        .where("active", "==", true)
        .orderBy("order")
        .get()
    : [];
  return page
    ? {
        ...page,
        popup: await popup().where("page_id", "==", page.id).first(),
        sections: sections ? sections : [],
      }
    : {
        use_header: true,
        use_footer: true,
      };
}
