import { defineField, defineType } from "sanity";

export const projectType = defineType({
    name: "project",
    title: 'Project',
    type: 'document',
    fields: [
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
            of: [{
                type: 'block'
            }]
        })
    ]
})