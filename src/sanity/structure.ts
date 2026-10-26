
import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("FeelieBees CMS")
    .items([
      S.listItem()
        .title("Homepage")
        .id("homepage")
        .child(
          S.list()
            .title("Homepage")
            .items([
              S.listItem()
                .title("Hero")
                .id("homepage-hero")
                .child(
                  S.document()
                    .schemaType("homePage")
                    .documentId("homepage-hero")
                    .title("Hero")
                ),

              S.listItem()
                .title("Product")
                .id("homepage-product")
                .child(
                  S.component(() => null).title("Product")
                ),

              S.listItem()
                .title("Our Story")
                .id("homepage-our-story")
                .child(
                  S.component(() => null).title("Our Story")
                ),

              S.listItem()
                .title("Activities")
                .id("homepage-activities")
                .child(
                  S.component(() => null).title("Activities")
                ),
            ])
        ),

      S.divider(),

      S.documentTypeListItem("post").title("Posts"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("author").title("Authors"),
    ]);
