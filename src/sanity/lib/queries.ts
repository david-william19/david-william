import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`*[_type] == "project" && define(slug.current)[0...12]{
    _id, title, slug, bannerImage, description
    }`)

export const PROJECT_QUERY = defineQuery(`*[_type == "project" && slug.current == $slug][0] {
    _id, title, body, mainImage
    }`)