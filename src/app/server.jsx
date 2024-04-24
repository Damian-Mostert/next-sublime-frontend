import services from "../lib/services/server/server";
import metaDetails from "@application/default-meta-details.json";

export function MakeGenerateMetadata(slug) {
    return async function generateMetadata({ params }) {
        const Services = await services();
        const SLUG = slug ? slug : "/" + params?.slugs?.join("/");

        return await new Promise((Resolve) => {
            Services.page
                .getMetadata({ slug: SLUG, cache: true })
                .then((response) => {
                    if (response.success) {

                        Resolve(response.data);
                    } else {
                        Resolve(metaDetails);
                    }
                })
                .then((error) => {
                    Resolve(metaDetails);
                });
        });
    };
}
