"use client";

import Hero from "./Hero";
import OurStory from "./OurStory";
import Product from "./Product";
import Adventure from "./Adventure";
import Help from "./Help";
import Activities from "./Activities";
import Blogs from "./Blogs";

export default function FeelieBees() {
  return (
    <main id="main">
        <Hero src="/assets/homepage/hero.webp" />
        <OurStory src="/assets/homepage/story.webp" />
        <Product src="/assets/homepage/product.webp" />
        <Adventure src="/assets/homepage/adventure-with-board-text.webp" />
        <Help src="/assets/homepage/hug.webp" />
        <Activities src="/assets/homepage/activities.webp" />
        <Blogs />
    </main>
  );
}
