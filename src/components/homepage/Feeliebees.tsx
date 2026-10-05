"use client";

import Hero from "./Hero";
import OurStory from "./OurStory";
import Product from "./Product";
// import Adventure from "./Adventure";
// import Help from "./Help";
import Activities from "./Activities";
import Blogs from "./Blogs";
// import LetsTalk from "./LetsTalk";

export default function FeelieBees() {
  return (
    <main id="main">
        <Hero src="/assets/homepage/hero-foxes-butterflies.png" />
        <Product src="/assets/homepage/heartly-sunlit-meadow.webp" />
        <OurStory src="/assets/homepage/meet-feeliebees-celebration.png" />
        {/* <Adventure src="/assets/homepage/adventure-dreamy-foxes.webp" />
        <Help src="/assets/homepage/benefits-foxes-butterflies.webp" /> */}
        <Activities src="/assets/homepage/coloring-sheets.jpeg" />
        <Blogs />
        {/* <LetsTalk /> */}
    </main>
  );
}
