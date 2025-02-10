import { m } from "motion/react";
import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: 'Project',
    type: 'document',
    fields: [
        defineField({
            name: "headerImage",
            type: "image",
        }),
        defineField({
            name: "urlProject",
            type: "url",
        }),
        defineField({
            name: "name",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "string"
        }),
        defineField({
            name: "techStack",
            type: "array",
            title: "tags for tech stack",
            of: [
               {
                type: "object",
                fields: [
                    {
                        type: "string", name: "label"
                    },
                    {
                        type: "string", name: "value"
                    }
                ]
               }
            ]
        }),
        defineField({
            name: "imageGallery",
            type: "image",
        })
    ]
})