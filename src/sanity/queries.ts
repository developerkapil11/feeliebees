
import { defineQuery } from "next-sanity";

export const HOME_PAGE_QUERY = defineQuery(`
  *[_type == "homePage" && _id == "homepage-hero"][0] {
    _id,
    eyebrow,
    title,
    description,
    heroImage {
      asset,
      alt,
      crop,
      hotspot
    },
    primaryButton {
      label,
      href
    },
    amazonButton {
      label,
      url
    },
    features[] {
      icon,
      text
    }
  }
`);
