import { defineQuery, groq } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type == "project"]`);

// export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
//     _id, title, body, mainImage
//     }`)