import services from "@vendor/services/server/server";
import metaDetails from "./default_meta.json";

const cache = {};

export function MakeGenerateMetadata(slug) {
  return async function generateMetadata({ params }) {
    const Services = await services();
    const SLUG = slug ? slug : "/" + params?.slugs?.join("/");
    if(cache[SLUG]){
      return cache[SLUG];
    }

    return await new Promise((Resolve) => {
      
      Services.page
        .getMetadata({ slug: SLUG })
        .then((response) => {
          if(response.success){
            cache[SLUG] = response.data;
            Resolve(response.data)
          }else{
            Resolve(metaDetails);
          }
        })
        .then((error) => {
          Resolve(metaDetails);
        });
    });
  };
}
