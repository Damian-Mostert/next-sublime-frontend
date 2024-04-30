"use server";

import popup from "@database/models/popup";
import page from "@database/models/page";
import pageSection from "@database/models/page-section";

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
        .get()
    : [];
  return page
    ? {
        ...page,
        popup: await popup().where("slug", "==", slug).first(),
        sections: sections ? sections : [],
      }
    : {};
}
