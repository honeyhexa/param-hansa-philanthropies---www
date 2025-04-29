import { defineQuery } from "next-sanity";

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  mainImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{name, image},
`;

export const postQuery = defineQuery(`
    *[_type == "post" && slug.current == $slug] [0] {
      body,
      ${postFields}
    }
  `);

export const allPostsQuery = defineQuery(`
    *[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) {
      ${postFields}
    }
  `);
