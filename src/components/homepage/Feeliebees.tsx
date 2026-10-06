"use client";

import Hero from "./Hero";
import OurStory from "./OurStory";
import Product from "./Product";
import Activities from "./Activities";
import Blogs from "./Blogs";

export default function FeelieBees() {
  return (
    <main id="main">
        <Hero src="/assets/homepage/hero-foxes-butterflies.png" />
        <Product src="/assets/homepage/heartly-sunlit-meadow.webp" />
        <OurStory src="/assets/homepage/meet-feeliebees-celebration.png" />
        <Activities src="/assets/homepage/coloring-sheets.jpeg" />
        <Blogs />
    </main>
  );
}
