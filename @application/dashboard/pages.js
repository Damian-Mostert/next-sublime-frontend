import { Text } from "@props/Text";
import { HasMany } from "@props/HasMany";
import { HasOne } from "@props/HasOne";
import { Id } from "@props/Id";

import page from "@database/models/page";

import { PageSections } from "./sections";
import { Popups } from "./popups";
import sections from "@vendor/load/sections";

import { getPage } from "@services/page/page";
import { Header } from "@application/navigation/header/header";
import { BreadCrumbs } from "@application/navigation/breadcrumbs/breadcrumbs";
import { Footer } from "@application/navigation/footer/footer";
import { Boolean } from "@props/Boolean";
import { Dashboard } from "@props/lib/Dashboard";

class Pages extends Dashboard {
  group = "Content";
  title = "Pages";
  model = page;

  async preview(data) {

    const page = await getPage(data.slug, true);
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
          <div className="w-full h-full overflow-y-auto overflow-x-hidden">
            {data.use_header && <Header />}
            {data.use_breadcrumbs && <BreadCrumbs />}
            <main>
              {page?.sections?.map((data, key) => {
                const Component = sections[data.type];
                return (
                  <Component key={key} {...(data.props ? data.props : {})} />
                );
              })}
            </main>
            {data.use_footer && <Footer />}
          </div>
        </div>
      </div>
    );
  }
  fields(user) {
    return [
      new Id().hideAtView(),
      new Text("Title", "title").require(),
      new Text("Slug", "slug").require(),
      new Text("Description", "description").require(),
      new Boolean("Header", "use_header"),
      new Boolean("Breadcrumbs", "use_breadcrumbs"),
      new Boolean("Footer", "use_footer"),
      new Boolean("Active", "active"),
      new HasOne("Popup", "page_id", new Popups()),
      new HasMany("Sections", "page_id", new PageSections()),
    ];
  }
}
export { Pages };
