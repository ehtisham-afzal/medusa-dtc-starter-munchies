import type {SectionList} from "./types";

import Assurance from "./assurance";
import CenteredText from "./centered-text";
import FeaturedProducts from "./featured-products";
import Hero from "./hero";
import Marquee from "./marquee";
import MediaText from "./media-text";
import Testimonials from "./testimonials";

export const sectionsList: SectionList = {
  "section.assurance": Assurance,
  "section.centeredText": CenteredText,
  "section.featuredProducts": FeaturedProducts,
  "section.hero": Hero,
  "section.marquee": Marquee,
  "section.mediaText": MediaText,
  "section.testimonials": Testimonials,
};
