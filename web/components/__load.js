import basic_sections from "./basics";

//import custom sections here;

import { howItWorks } from "./custom/home/how-it-works";
import { ShopByBrand } from "./custom/home/shop-by-brand";
import { WhatsHot } from "./custom/home/whats-hot";

const customElements = {
  "how-it-works": howItWorks,
  "shop-by-brand": ShopByBrand,
  "whats-hot": WhatsHot,
};

export default {
  ...customElements,
  ...basic_sections,
};
