"use client";

import { v2Classes } from "@/components/v2-styles";
import HeroV2 from "@/components/homepage/HeroV2";
import OurStory from "@/components/homepage/OurStory";
import Product from "@/components/homepage/Product";
import Adventure from "@/components/homepage/Adventure";
import Help from "@/components/homepage/Help";
import Activities from "@/components/homepage/Activities";
import Blogs from "@/components/homepage/Blogs";

export default function Contact() {
    return (
        <main id="main" className={v2Classes("homepage-v2")}>
            <HeroV2 />
            <OurStory src="/assets/beesHomepage/story2.png" />
            <Product src="/assets/beesHomepage/product.png" />
            <Adventure src="/assets/beesHomepage/adventure.png" />
            <Help src="/assets/beesHomepage/hug.png" />
            <Activities src="/assets/beesHomepage/activitiess.png" />
            <Blogs />
        </main>
    );
}

